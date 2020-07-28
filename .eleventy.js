module.exports = (config) => {
  // Set files to pass through to the dist folder
  config.addPassthroughCopy("./src/robots.txt");
  config.addPassthroughCopy("./src/manifest.json");
  config.addPassthroughCopy("./src/browserconfig.xml");
  config.addPassthroughCopy("./src/scripts/");
  config.addPassthroughCopy("./src/cal/");

  // Create a helpful production flag
  const isProduction = process.env.NODE_ENV === "production";

  // Transforms
  const htmlMinTransform = require("./src/transforms/html-min-transform.js");

  // Only minify HTML if we are in production because it slows builds _right_ down
  if (isProduction) {
    config.addTransform("htmlmin", htmlMinTransform);
  }

  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  config.setUseGitIgnore(false);

  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
