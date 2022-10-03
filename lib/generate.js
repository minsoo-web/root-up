const fs = require("fs");

const readTemplate = (path = "./assets/data/.template") => {
  return JSON.parse(fs.readFileSync(`${path}/template.json`).toString());
};

const Generator = argv => {
  let templatePath = "./assets/data/.template";

  if (fs.existsSync("./.template")) {
    templatePath = "./.template";
  }
  const { prefix, output, fileConfig } = readTemplate(templatePath);

  // 옵션으로 들어온 컴포넌트 이름으로 대체
  const folderName = argv.n;

  if (!fs.existsSync(output)) {
    fs.mkdirSync(output, { recursive: true });
  }

  if (!fs.existsSync(`${output}/${folderName}`)) {
    fs.mkdirSync(`${output}/${folderName}`);
  }

  const reg = new RegExp(prefix, "gi");

  const result = fileConfig.map(config => {
    const _fileName = config.fileName ? config.fileName : prefix;
    const fileNameWithExtends = `${_fileName}.${config.extends}`;

    const fileString = fs
      .readFileSync(`${templatePath}/${fileNameWithExtends}`, "utf-8")
      .toString();

    const data = fileString.replace(reg, folderName);

    return {
      fileName: fileNameWithExtends.replace(folderName),
      data
    };
  });

  result.forEach(fileConfig => {
    fs.writeFileSync(`${output}/${folderName}/${fileConfig.fileName}`, fileConfig.data);
  });
};

module.exports = { Generator };
