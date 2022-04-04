const fs = require("fs");

const Generator = argv => {
  let templatePath = "./assets/data/.template";

  if (fs.existsSync("./.template")) {
    templatePath = "./.template";
  }

  const isTypeScript = fs.existsSync(`${templatePath}/__M_COMPONENT__.tsx`);

  const type = isTypeScript ? "ts" : "js";

  const componentFileStr = fs
    .readFileSync(`${templatePath}/__M_COMPONENT__.${type}x`, "utf-8")
    .toString();

  const styleFileStr = fs
    .readFileSync(`${templatePath}/__M_STYLE__.style.${type}`, "utf-8")
    .toString();

  const indexJs = fs.readFileSync(`${templatePath}/index.js`, "utf-8").toString();

  // 옵션으로 들어온 컴포넌트 이름으로 대체
  const folderName = argv.n;

  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }

  const computedComponentStr = componentFileStr
    .replace(/__M_COMPONENT__/gi, folderName)
    .replace(/__M_STYLE__.style/gi, `${folderName}.style`);

  const computedIndexJs = indexJs
    .replace(/__M_COMPONENT__/gi, folderName)
    .replace(/__M_STYLE__.style/gi, `${folderName}.style`);

  fs.writeFileSync(`./${folderName}/${folderName}.${type}x`, computedComponentStr);
  fs.writeFileSync(`./${folderName}/${folderName}.style.${type}`, styleFileStr);
  fs.writeFileSync(`./${folderName}/index.js`, computedIndexJs);
};

module.exports = Generator;
