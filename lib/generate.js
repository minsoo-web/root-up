const fs = require("fs");

const Generator = argv => {
  const componentFileStr = fs.readFileSync("./.template/__M_COMPONENT__.js", "utf-8").toString();
  const styleFileStr = fs.readFileSync("./.template/__M_STYLE__.style.js", "utf-8").toString();
  // 옵션으로 들어온 컴포넌트 이름으로 대체
  const folderName = argv.n;
  const computedComponentStr = componentFileStr
    .replace(/__M_COMPONENT__/gi, folderName)
    .replace(/__M_STYLE__.style/gi, `${folderName}.style`);
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }
  fs.writeFileSync(`./${folderName}/${folderName}.js`, computedComponentStr);
  fs.writeFileSync(`./${folderName}/${folderName}.style.js`, styleFileStr);
};

module.exports = Generator;
