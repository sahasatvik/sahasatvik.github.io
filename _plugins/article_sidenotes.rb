require "kramdown"
require "kramdown/parser/html"

module AcademicSite
  # Reuse Kramdown's HTML tokenizer, retaining byte ranges instead of converting
  # the HTML back to Markdown elements. Wrapping must preserve TeX, code, and
  # attributes exactly as Jekyll rendered them.
  class SidenoteHtmlParser < Kramdown::Parser::Base
    include Kramdown::Parser::Html::Parser

    def parse
      @stack, @tree = [], @root
      @src = Kramdown::Utils::StringScanner.new(source)
      handler = lambda do |element, closed, handle_body|
        parse_raw_html(element, &handler) if !closed && handle_body
      end
      parse_raw_html(@root, &handler)
    end

    def handle_html_start_tag(line = nil)
      start = @src.pos - @src.matched_size
      top_level = @tree.equal?(@root)
      super do |element, closed, handle_body|
        yield(element, closed, handle_body)
        element.options[:source_range] = start...@src.pos if top_level
      end
    end
  end

  module ArticleSidenoteFilters
    # The article layout receives HTML after Markdown and Liquid conversion.
    # Adjacent top-level paragraphs, headings, or divs pair with their following notes.
    def article_sidenotes(input)
      html = input.to_s
      return html unless html.include?("sidenote")

      root, = SidenoteHtmlParser.parse(html)
      blocks = root.children.reject do |element|
        element.type == :xml_comment ||
          (element.type == :text && element.value.strip.empty?)
      end
      blocks.each do |element|
        article_sidenote_attachment(element) if article_sidenote?(element)
      end
      output = +""
      cursor = 0
      index = 0

      while index < blocks.length
        anchor = blocks[index]
        index += 1
        next unless anchor.type == :html_element &&
          %w[div p h1 h2 h3 h4 h5 h6].include?(anchor.value)
        classes = anchor.attr.fetch("class", "").split
        next if (classes & %w[sidenote sidenote-group sidenote-notes]).any?

        notes = []
        while index < blocks.length && article_sidenote?(blocks[index])
          notes << blocks[index]
          index += 1
        end
        next if notes.empty?

        passage = anchor.options.fetch(:source_range)
        finish = notes.last.options.fetch(:source_range).end
        output << html.byteslice(cursor...passage.begin)
        output << "<div class=\"sidenote-group\">\n"
        output << html.byteslice(passage)
        note_cursor = passage.end
        # Preserve source order, splitting only when adjacent notes choose
        # different anchors. The script positions each run independently.
        notes.chunk { |note| article_sidenote_attachment(note) }.each do |attachment, run|
          run_end = run.last.options.fetch(:source_range).end
          attribute = attachment == "next" ? ' data-attach="next"' : ""
          output << "\n<div class=\"sidenote-notes\"#{attribute}>"
          output << html.byteslice(note_cursor...run_end)
          output << "</div>"
          note_cursor = run_end
        end
        output << "\n</div>"
        cursor = finish
      end

      output << html.byteslice(cursor..-1)
    end

    private

    def article_sidenote?(element)
      element.type == :html_element && %w[aside div].include?(element.value) &&
        element.attr.fetch("class", "").split.include?("sidenote")
    end

    def article_sidenote_attachment(element)
      attachment = element.attr.fetch("data-attach", "previous").strip.downcase
      return attachment if %w[previous next].include?(attachment)

      raise Jekyll::Errors::FatalException,
            "Sidenote data-attach must be 'previous' or 'next' (got #{attachment.inspect})."
    end
  end
end

Liquid::Template.register_filter(AcademicSite::ArticleSidenoteFilters)
