"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readTemplate = exports.Generator = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var readTemplate = function (path) {
    if (path === void 0) { path = "./assets/data/.template"; }
    return JSON.parse(fs_1.default.readFileSync("".concat(path, "/template.json")).toString());
};
exports.readTemplate = readTemplate;
var Generator = function (argv) {
    console.log("✓ Check .template folder exists...\n");
    var templatePath = path_1.default.resolve(__dirname, "../assets/data/.template");
    // 커스텀 템플릿이 있는 경우
    if (fs_1.default.existsSync("./.template")) {
        templatePath = "./.template";
    }
    else {
        console.log("🔥 No custom .template folder exist!\nIf you want your own customize template command\n\nm-rcfg doc\n");
    }
    var _a = readTemplate(templatePath), prefix = _a.prefix, output = _a.output;
    // 옵션으로 들어온 컴포넌트 이름으로 대체
    var folderName = argv.name;
    if (!fs_1.default.existsSync(output)) {
        fs_1.default.mkdirSync(output, { recursive: true });
    }
    if (!fs_1.default.existsSync("".concat(output, "/").concat(folderName))) {
        fs_1.default.mkdirSync("".concat(output, "/").concat(folderName));
    }
    var reg = new RegExp(prefix, "gi");
    var fileList = fs_1.default.readdirSync(templatePath);
    fileList.forEach(function (fileName) {
        var fileString = fs_1.default.readFileSync("".concat(templatePath, "/").concat(fileName), "utf-8").toString();
        if (fileName !== "template.json") {
            fs_1.default.writeFileSync("".concat(output, "/").concat(folderName, "/").concat(fileName.replace(reg, folderName)), fileString.replace(reg, folderName));
        }
    });
    console.log("\uD83D\uDE80 ".concat(folderName, " Component folder is made with m-rcfg!!!\n\n\uD83D\uDE0EHappy Hacking"));
};
exports.Generator = Generator;
//# sourceMappingURL=generate.js.map