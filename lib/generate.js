const fs = require("fs");
const path = require("path");

const readTemplate = (path = "./assets/data/.template") => {
  return JSON.parse(fs.readFileSync(`${path}/template.json`).toString());
};

const Generator = argv => {
  console.log("✓ Check .template folder exists...\n");

  let templatePath = path.resolve(__dirname, "../assets/data/.template");

  // 커스텀 템플릿이 있는 경우
  if (fs.existsSync("./.template")) {
    templatePath = "./.template";
  } else {
    console.log(
      "🔥 No custom .template folder exist!\nIf you want your own customize template command\n\nm-rcfg doc\n"
    );
  }

  const { prefix, output } = readTemplate(templatePath);

  // 옵션으로 들어온 컴포넌트 이름으로 대체
  const folderName = argv.n;

  if (!fs.existsSync(output)) {
    fs.mkdirSync(output, { recursive: true });
  }

  if (!fs.existsSync(`${output}/${folderName}`)) {
    fs.mkdirSync(`${output}/${folderName}`);
  }

  const reg = new RegExp(prefix, "gi");

  const fileList = fs.readdirSync(templatePath);

  fileList.forEach(fileName => {
    const fileString = fs.readFileSync(`${templatePath}/${fileName}`, "utf-8").toString();

    if (fileName !== "template.json") {
      fs.writeFileSync(
        `${output}/${folderName}/${fileName.replace(reg, folderName)}`,
        fileString.replace(reg, folderName)
      );
    }
  });

  console.log(`🚀 ${folderName} Component folder is made with m-rcfg!!!\n\n😎Happy Hacking`);
};

module.exports = { Generator, readTemplate };
