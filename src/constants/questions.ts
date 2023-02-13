import { Question } from "inquirer";

type QuestionWithChoices = Question & { choices?: string[] } & Partial<{
    excludePath: (path: string) => boolean;
    excludeFilter: (path: string) => boolean;
    itemType: "any" | "directory" | "file";
    rootPath: string;
    suggestOnly: boolean;
    depthLimit: number;
  }>;

export const componentNameQuestion: QuestionWithChoices[] = [];

export const questions = (templates: string[], outputPath: string): QuestionWithChoices[] => [
  {
    name: "name",
    message: "What is your folder name?",
    askAnswered: true
  },
  {
    name: "template",
    message: "Chose your template",
    type: "list",
    choices: templates
  },
  {
    type: "fuzzypath",
    name: "outputPath",
    excludePath: nodePath => nodePath.startsWith("node_modules") || nodePath.startsWith(".git"),
    // excludePath :: (String) -> Bool
    // excludePath to exclude some paths from the file-system scan
    excludeFilter: nodePath => nodePath === ".",
    // excludeFilter :: (String) -> Bool
    // excludeFilter to exclude some paths from the final list, e.g. '.'
    itemType: "directory",
    // itemType :: 'any' | 'directory' | 'file'
    // specify the type of nodes to display
    // default value: 'any'
    // example: itemType: 'file' - hides directories from the item list
    rootPath: ".",
    // rootPath :: String
    // Root search directory
    message: "Select a target directory for your component:",
    default: outputPath,
    suggestOnly: false,
    // suggestOnly :: Bool
    // Restrict prompt answer to available choices or use them as suggestions
    depthLimit: 5
    // depthLimit :: integer >= 0
    // Limit the depth of sub-folders to scan
    // Defaults to infinite depth if undefined
  }
];
