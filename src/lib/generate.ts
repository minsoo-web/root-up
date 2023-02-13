import fs from "fs";

export const generate = ({ prefix, templatePath, name, outputPath }: Common.GenerateParam) => {
  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true });
  }

  if (!fs.existsSync(`${outputPath}/${name}`)) {
    fs.mkdirSync(`${outputPath}/${name}`);
  }

  const reg = new RegExp(prefix, "gi");

  const fileList = fs.readdirSync(templatePath);

  fileList.forEach(fileName => {
    const fileString = fs.readFileSync(`${templatePath}/${fileName}`, "utf-8").toString();

    fs.writeFileSync(
      `${outputPath}/${name}/${fileName.replace(reg, name)}`,
      fileString.replace(reg, name)
    );
  });

  console.log(`🚀 ${name} folder is made with root-up!!!\n\n😎Happy Hacking`);
};
