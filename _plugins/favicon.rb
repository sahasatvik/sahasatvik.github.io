require "fileutils"

# Serve the conventional favicon URL while keeping the original with the icons.
Jekyll::Hooks.register :site, :post_write do |site|
  FileUtils.cp(
    site.in_source_dir("icons", "favicon.ico"),
    site.in_dest_dir("favicon.ico")
  )
end
