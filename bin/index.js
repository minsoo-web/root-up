#!/usr/bin/env node
"use strict";

const fs = require("fs");
const yargs = require("yargs");

const options = yargs
  .usage("Usage: --path template path")
  .option("p", {
    alias: "path",
    describe: "template path",
    type: "string",
    demandOption: false
  })
  .option("n", {
    alias: "name",
    describe: "folder name",
    type: "string",
    demandOption: true
  }).argv;

// 템플릿 읽어오기
const componentFileStr = fs.readFileSync("./.template/__M_COMPONENT__.js", "utf-8").toString();
const styleFileStr = fs.readFileSync("./.template/__M_STYLE__.style.js", "utf-8").toString();

// 옵션으로 들어온 컴포넌트 이름으로 대체
const folderName = options.n;
const computedComponentStr = componentFileStr
  .replace(/__M_COMPONENT__/gi, folderName)
  .replace(/__M_STYLE__.style/gi, `${folderName}.style`);

if (!fs.existsSync(folderName)) {
  fs.mkdirSync(folderName);
}

fs.writeFileSync(`./${folderName}/${folderName}.js`, computedComponentStr);
fs.writeFileSync(`./${folderName}/${folderName}.style.js`, styleFileStr);
