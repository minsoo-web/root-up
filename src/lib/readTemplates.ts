import { TEMPLATE_PATH } from "constants/common";
import fs from "fs";

const readConfigFile = (path = TEMPLATE_PATH) => {
  let configFile;

  try {
    configFile = fs.readFileSync(`${path}/config.json`);
  } catch (error) {
    throw new Error(
      "config.json is not found please checkout https://github.com/minsoo-web/root-up/blob/main/README.md"
    );
  }

  return JSON.parse(configFile.toString());
};

export const readTemplates = () => {
  let templateList = [];
  try {
    templateList = fs.readdirSync(TEMPLATE_PATH);
  } catch (error) {
    throw new Error(
      "`/.template` folder is not found please checkout https://github.com/minsoo-web/root-up/blob/main/README.md"
    );
  }

  const configFileIndex = templateList.findIndex(template => template === "config.json");
  let configFile: Common.Config = readConfigFile();

  if (configFileIndex === -1) {
    throw new Error("🔥 No Exist config.json file in .template folder");
  }

  if (configFileIndex >= 0) {
    templateList.splice(configFileIndex, 1);
  }

  if (templateList.length === 0) {
    throw new Error("🔥 No Exist template in .template folder");
  }

  return { templateList, configFile };
};
