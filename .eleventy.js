const sass = require("sass");
const path = require("path");
const fs = require("fs");

module.exports = function(eleventyConfig) {
  // Compile SCSS to CSS
  eleventyConfig.on("eleventy.before", async () => {
    const result = sass.compile("src/styles/main.scss");
    fs.mkdirSync("_site/css", { recursive: true });
    fs.writeFileSync("_site/css/styles.css", result.css);
  });

  // Copy any static assets
  eleventyConfig.addPassthroughCopy("src/assets");

  // Watch SCSS files for changes
  eleventyConfig.addWatchTarget("src/styles/");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    },
    templateFormats: ["html", "md", "njk"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
