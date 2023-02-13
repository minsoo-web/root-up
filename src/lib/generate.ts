import fs from "fs";

export const generate = ({ output, prefix, name, templatePath }: Common.GenerateParam) => {
  if (!fs.existsSync(output)) {
    fs.mkdirSync(output, { recursive: true });
  }

  if (!fs.existsSync(`${output}/${name}`)) {
    fs.mkdirSync(`${output}/${name}`);
  }

  const reg = new RegExp(prefix, "gi");

  const fileList = fs.readdirSync(templatePath);

  fileList.forEach(fileName => {
    const fileString = fs.readFileSync(`${templatePath}/${fileName}`, "utf-8").toString();

    fs.writeFileSync(
      `${output}/${name}/${fileName.replace(reg, name)}`,
      fileString.replace(reg, name)
    );
  });

  console.log(`🚀 ${name} folder is made with m-rcfg!!!\n😎Happy Hacking`);
};
