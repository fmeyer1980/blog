// const filters = require('./src/_11ty/filters')

module.exports = function(eleventyConfig) {
    // eleventyConfig.addCollection("tagList", require("./src/_11ty/getTagList"));

    eleventyConfig.addCollection("tagList", require("./src/_filters/getTagList.js"));
    eleventyConfig.addCollection("posts", function(collection) {
      return collection.getFilteredByGlob("src/blog/*.md").reverse();
    });
    return {
        markdownTemplateEngine: "njk",
        templateFormats: ["html", "njk", "md"],
        passthroughFileCopy: true,
        
        dir: {
            input: "src",
            output: "_dist",
            includes: "_includes"
        }
    }
}