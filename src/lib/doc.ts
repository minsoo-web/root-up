import { TEMPLATE_PATH } from "constants/common";
import fs from "fs";
import path from "path";

export const doc = () => {
  const exampleTemplateFolderPath = path.resolve(__dirname, "../assets/data/.template");

  if (!fs.existsSync(TEMPLATE_PATH)) {
    fs.mkdirSync(TEMPLATE_PATH);

    const fileList = fs.readdirSync(exampleTemplateFolderPath);
    fileList.forEach(fileName => {
      const data = fs.readFileSync(`${exampleTemplateFolderPath}/${fileName}`, "utf-8");
      fs.writeFileSync(`.template/${fileName}`, data);
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
