const fs = require("fs");
const { readTemplate } = require("./generate");

const Doc = () => {
  if (!fs.existsSync("./.template")) {
    const { prefix, fileConfig } = readTemplate();

    fs.mkdirSync(".template");
    fileConfig.forEach(config => {
      fs.writeFileSync(`.template/${prefix}.${config.extends}`, "asd");
    });

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
