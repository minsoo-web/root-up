import inquirer from "inquirer";
import { questions } from "./constants/questions";
import { generate } from "./lib/generate";
import { readTemplates } from "./lib/readTemplates";

const main = async () => {
  const { templateList, configFile, templatePath } = readTemplates();

  if (templateList.length === 0) {
    throw new Error("🔥 No Exist template in .template folder");
  }

  const { name, template } = await inquirer.prompt<Common.UserInput>(questions(templateList));

  generate({ name, templatePath: `${templatePath}/${template}`, ...configFile });
};

main();
