import { Question } from "inquirer";

type QuestionWithChoices = Question & { choices?: string[] };

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
    name: "outputPath",
    message: "Type your output path",
    default: outputPath
  }
];
