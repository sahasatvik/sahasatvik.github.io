require "fileutils"

# Keep the public CV URL stable while its PDF and sources live together in cv/.
Jekyll::Hooks.register :site, :post_write do |site|
  FileUtils.cp(
    site.in_source_dir("cv", "cv.pdf"),
    site.in_dest_dir("cv.pdf")
  )
end
