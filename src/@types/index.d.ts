declare module Common {
  interface Config {
    prefix: string;
    output: string;
  }

  interface UserInput {
    name: string;
    template: string;
    outputPath: string;
  }

  interface GenerateParam extends Omit<Config, "output">, Omit<UserInput, "template"> {
    templatePath: string;
  }
}
