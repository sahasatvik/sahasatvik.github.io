# Render stored Markdown like page bodies: Liquid first, then Markdown.
module AcademicSite
  module MarkdownFilters
    def render_markdown(input)
      # Keep caller variables available without leaking a fragment's assignments.
      context = Liquid::Context.new(
        @context.scopes + @context.environments, {}, @context.registers, true
      )
      rendered = Liquid::Template.parse(input.to_s).render!(context)
      @context.registers[:site].find_converter_instance(
        Jekyll::Converters::Markdown
      ).convert(rendered)
    end
  end
end

Liquid::Template.register_filter(AcademicSite::MarkdownFilters)
