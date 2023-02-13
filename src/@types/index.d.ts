declare module Common {
  interface Config {
    prefix: string;
    output: string;
  }

  interface UserInput {
    name: string;
    template: string;
  }

  interface GenerateParam extends Config, Pick<UserInput, "name"> {
    templatePath: string;
  }
}
