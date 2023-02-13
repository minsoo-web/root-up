import fs from "fs";
import path from "path";
const __dirname = path.resolve();

const readConfigFile = (path = "src/assets/data/.template") => {
  return JSON.parse(fs.readFileSync(`${path}/config.json`).toString());
};

export const readTemplates = () => {
  let templatePath = path.resolve(__dirname, "src/assets/data/.template");
  if (fs.existsSync("./.template")) {
    templatePath = "./.template";
  }

  const templateList = fs.readdirSync(templatePath);

  const configFileIndex = templateList.findIndex(template => template === "config.json");
  let configFile: Common.Config = readConfigFile(templatePath);

  if (configFileIndex >= 0) {
    templateList.splice(configFileIndex, 1);
  }

  return { templateList, configFile, templatePath };
};
