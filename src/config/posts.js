const en = {
  use: "@gridsome/source-filesystem",
  options: {
    typeName: "Post",
    path: "./src/content/posts/**/*.en.md"
  }
};

const zh = {
  use: "@gridsome/source-filesystem",
  options: {
    typeName: "Post",
    path: "./src/content/posts/**/*.zh.md"
  }
};

module.exports.en = en;
module.exports.zh = zh;
