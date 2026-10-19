# Populate in-memory project metadata before Liquid renders any previews/pages.
# Source Markdown is never rewritten.
require "fastimage"
require "uri"

module AcademicSite
  class ProjectImageDimensions < Jekyll::Generator
    priority :high

    def generate(site)
      dimensions = {} # Fresh on every rebuild, so replaced images are remeasured.
      projects = site.collections["projects"]
      return unless projects

      projects.docs.each do |project|
        image = project.data["image"]
        next unless image.is_a?(Hash) && image["src"].is_a?(String)

        source = image["src"]
        # Local files only: builds never fetch remote images or data URIs.
        next if source.empty? || source.match?(%r{\A(?:[a-z][a-z0-9+.-]*:|//)}i)

        begin
          relative = URI::DEFAULT_PARSER.unescape(source.split(/[?#]/, 2).first)
          path = File.expand_path(relative.sub(%r{\A/}, ""), site.source)
          root = File.expand_path(site.source) + File::SEPARATOR
          raise ArgumentError, "image must be inside the site source folder" unless path.start_with?(root)

          width, height = dimensions[path] ||= File.open(path, "rb") do |file|
            FastImage.size(file, :raise_on_failure => true)
          end
          unless width && height && width.positive? && height.positive?
            raise ArgumentError, "image has no usable dimensions"
          end

          image["width"] = width
          image["height"] = height
        rescue StandardError => error
          raise Jekyll::Errors::FatalException,
                "Cannot measure project image #{source.inspect} in #{project.relative_path}: #{error.message}"
        end
      end
    end
  end
end
