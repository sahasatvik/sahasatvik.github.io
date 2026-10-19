require "uri"

module AcademicSite
  class Redirects < Jekyll::Generator
    priority :lowest

    def generate(site)
      redirects = site.data["redirects"] || {}
      fail_build("expected a mapping of paths to destinations") unless redirects.is_a?(Hash)
      occupied = (site.pages + site.documents + site.static_files).map { |item| item.destination(site.dest) }

      redirects.each do |path, target|
        unless path.is_a?(String) && path.match?(%r{\A/(?:[a-z0-9_.-]+/)+\z}i) &&
            (path.split("/") & [".", ".."]).empty?
          fail_build("invalid path #{path.inspect}; use a directory URL such as /canopy/")
        end
        validate_target(path, target)

        page = Jekyll::PageWithoutAFile.new(site, site.source, path.delete_prefix("/"), "index.html")
        page.content = ""
        page.data["layout"] = "redirect"
        page.data["permalink"] = path
        page.data["redirect_to"] = target
        output = page.destination(site.dest)
        fail_build("#{path} conflicts with an existing page or file") if occupied.include?(output)

        occupied << output
        site.pages << page
      end
    end

    private

    def validate_target(path, target)
      fail_build("destination for #{path} must be a URL") unless target.is_a?(String)
      uri = URI.parse(target)
      local = target.start_with?("/") && !target.start_with?("//")
      external = %w[http https].include?(uri.scheme) && uri.host && !uri.host.empty?
      fail_build("destination for #{path} must be a site path or an HTTP(S) URL") unless local || external
    rescue URI::InvalidURIError
      fail_build("invalid destination URL for #{path}: #{target.inspect}")
    end

    def fail_build(message)
      raise Jekyll::Errors::FatalException, "_data/redirects.yml: #{message}"
    end
  end
end
