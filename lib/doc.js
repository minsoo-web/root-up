const fs = require("fs");

const Doc = () => {
  if (!fs.existsSync(".template")) {
    fs.mkdirSync(".template");

    fs.copyFileSync();
  } else {
    console.log(
      `".template" folder is already exists😢\nmake sure folder name ".template" is not exists`
    );
  }
};

module.exports = Doc;
