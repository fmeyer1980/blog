module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('admin');

    eleventyConfig.addCollection("tagList", require("./src/_filters/getTagList.js"));
    eleventyConfig.addCollection("posts", function(collection) {
      return collection.getFilteredByGlob("src/blog/*.md").reverse();
    });

    eleventyConfig.addCollection("author", function(collection) {
        return collection.getFilteredByGlob("src/author/*.md").reverse();
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