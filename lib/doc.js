const fs = require("fs");
const { readTemplate } = require("./generate");

const Doc = () => {
  if (!fs.existsSync("./.template")) {
    const templateConfig = readTemplate();

    fs.mkdirSync(".template");
    templateConfig.fileConfig.forEach(config => {
      const fileName = config.fileName ? config.fileName : templateConfig.prefix;
      const fileNameWithExtends = `${fileName}.${config.extends}`;

      const data = fs.readFileSync(`./assets/data/.template/${fileNameWithExtends}`, "utf-8");
      fs.writeFileSync(`.template/${fileName}.${config.extends}`, data);
    });

    fs.writeFileSync(".template/template.json", JSON.stringify(templateConfig));

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
