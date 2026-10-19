require "cgi"
require "kramdown"

module AcademicSite
  module ArticleTocFilters
    # The layout receives converted HTML.
    # Reuse Kramdown's HTML parser so the TOC follows the actual heading IDs
    # without another parser dependency.
    def article_toc(input)
      headings = []
      article_toc_headings(Kramdown::Document.new(input.to_s, input: "html").root, headings)
      return "" if headings.empty?

      items = headings.map do |heading|
        id = CGI.escapeHTML(CGI.unescapeHTML(heading.attr["id"]))
        title = CGI.escapeHTML(article_toc_text(heading).gsub(/\s+/, " ").strip)
        "  <li><a href=\"##{id}\">#{title}</a></li>"
      end
      "<ul class=\"article-toc\">\n#{items.join("\n")}\n</ul>"
    end

    private

    def article_toc_headings(element, headings)
      classes = element.attr.fetch("class", "").split
      return if (classes & %w[sidenote sidebar statement proof no_toc]).any?
      return if element.type == :html_element && %w[aside nav pre code script style].include?(element.value)
      return if %i[codeblock codespan].include?(element.type)

      if element.type == :header && element.options[:level] == 2 && !element.attr["id"].to_s.empty?
        headings << element
      end
      element.children.each { |child| article_toc_headings(child, headings) }
    end

    def article_toc_text(element)
      case element.type
      when :text, :codespan, :math
        element.value.to_s
      when :entity
        element.value.char
      when :br
        " "
      when :img
        CGI.unescapeHTML(element.attr.fetch("alt", ""))
      else
        element.children.map { |child| article_toc_text(child) }.join
      end
    end
  end
end

Liquid::Template.register_filter(AcademicSite::ArticleTocFilters)
