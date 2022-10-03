#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var yargs_1 = __importDefault(require("yargs"));
var doc_1 = __importDefault(require("../lib/doc"));
var generate_1 = require("../lib/generate");
yargs_1.default.usage("🚀 Make your component directory with your own template");
yargs_1.default.command({
    command: "doc",
    describe: "generate template folder with template.json",
    handler: doc_1.default
});
yargs_1.default.command({
    command: "generate",
    describe: "generate folder template for specific template",
    handler: generate_1.Generator,
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
yargs_1.default.command({
    command: "*",
    handler: function () {
        console.log("first");
    }
});
yargs_1.default.parse();
//# sourceMappingURL=index.js.map