declare module Common {
  interface Config {
    prefix: string;
    output: string;
    excludePath: string[];
  }

  interface UserInput {
    name: string;
    template: string;
    outputPath: string;
  }

  interface GenerateParam extends Pick<Config, "prefix">, Omit<UserInput, "template"> {
    templatePath: string;
  }
}
