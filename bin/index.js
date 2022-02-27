#!/usr/bin/env node
"use strict";

const yargs = require("yargs");
const Doc = require("../lib/doc");
const Generator = require("../lib/generate");

yargs
  .usage("🚀 Make your component directory with your own template")
  .command("doc", "generate template folder with template.json", () => {}, Doc)
  .command(
    "generate",
    "generate folder template for specific template",
    function (yargs, helpOrVersionSet) {
      return yargs.option("name", {
        alias: "n",
        describe: "Your component folder name",
        type: "string",
        default: "Example",
        require: true
      });
    },
    Generator
  ).argv;
