"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var Doc = function () {
    var exampleTemplateFolderPath = path_1.default.resolve(__dirname, "../assets/data/.template");
    if (!fs_1.default.existsSync("./.template")) {
        fs_1.default.mkdirSync("./.template");
        var fileList = fs_1.default.readdirSync(exampleTemplateFolderPath);
        fileList.forEach(function (fileName) {
            var data = fs_1.default.readFileSync("".concat(exampleTemplateFolderPath, "/").concat(fileName), "utf-8");
            fs_1.default.writeFileSync(".template/".concat(fileName), data);
        });
        console.log("🚀 Generate template folder with doc file! \nif you want specify custom template check https://github.com/minsoo-web/react-component-folder-generator#case-of-your-own-template");
    }
    else {
        console.log("\".template\" folder is already exists\uD83D\uDE22\nmake sure folder name \".template\" is not exists");
    }
};
exports.default = Doc;
//# sourceMappingURL=doc.js.map