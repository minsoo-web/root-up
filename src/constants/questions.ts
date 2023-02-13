import { Question } from "inquirer";

type QuestionWithChoices = Question & { choices?: string[] };

export const componentNameQuestion: QuestionWithChoices[] = [];

export const questions = (templates: string[]): QuestionWithChoices[] => [
  {
    name: "name",
    message: "What is your component name?",
    askAnswered: true
  },
  {
    name: "template",
    message: "Chose your template",
    type: "list",
    choices: templates
  }
];
