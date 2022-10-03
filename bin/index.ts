#!/usr/bin/env node

import yargs from "yargs";
import Doc from "../lib/doc";
import { Generator } from "../lib/generate";

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
