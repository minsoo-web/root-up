const fs = require("fs");

const Doc = () => {
  if (!fs.existsSync("./.template")) {
    fs.mkdirSync(".template");

    console.log(
      "🚀 Generate template folder with doc file! \nif you want specify custom template check https://github.com/minsoo-web/react-component-folder-generator#case-of-your-own-template"
    );
  } else {
    console.log(
      `".template" folder is already exists😢\nmake sure folder name ".template" is not exists`
    );
  }
};

module.exports = Doc;
