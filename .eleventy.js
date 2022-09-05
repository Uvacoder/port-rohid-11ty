const { format } = require("date-fns");
const readingTime = require("reading-time");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/assets");

  eleventyConfig.addPassthroughCopy("./src/styles/main.css");
  eleventyConfig.addWatchTarget("./src/styles/main.css");

  eleventyConfig.addFilter("formatDate", (date) => {
    return format(new Date(date), "MMM dd, yyyy");
  });
  eleventyConfig.addFilter("readingTime", (content) => {
    return readingTime(content).text;
  });

  eleventyConfig.addPlugin(syntaxHighlight, {
    templateFormats: ["*"],
    preAttributes: {
      tabIndex: 0,
      "data-language": function ({ language, content, options }) {
        return language;
      },
    },
  });

  return {
    dir: {
      input: "src",
    },
  };
};
