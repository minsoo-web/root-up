#!/usr/bin/env node
"use strict";

const yargs = require("yargs");
const Doc = require("../lib/doc");
const { Generator } = require("../lib/generate");

yargs.usage("🚀 Make your component directory with your own template");

yargs.command({
  command: "doc",
  describe: "generate template folder with template.json",
  handler: Doc
});

yargs.command({
  command: "generate",
  describe: "generate folder template for specific template",
  handler: Generator,
  builder: {
    name: {
      alias: "n",
      describe: "Your component folder name",
      type: "string",
      default: "Example",
      require: true
    }
  }
});

yargs.command({
  command: "*",
  handler: () => {
    console.log("first");
  }
});

yargs.parse();
