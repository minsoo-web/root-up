# Root Up

![banner](./src/assets/images/banner.png)

## 🗂 What is Root Up?

This package is built for folder structure generator who has specific folder template.

## 🚗 Installation

### Global

```bash
# using yarn
yarn global add root-up
```

```bash
# using npm
npm install -g root-up
```

Note: add --save if you are using npm < 5.0.0

### Local

```bash
# using yarn
yarn add -D root-up
```

```bash
# using npm
npm install -D root-up
```

Add script in your package.json

```json
"scripts": {
   "root-up": "root-up"
},
```

## Before you start

You must make `.template` folder to your root path in workspace
The `.template` folder must be configured as follows

```txt
/.template
   /<templateFolder>
   /<templateFolder>
   ...
   config.json
```

[Checkout `.template` folder demo](https://github.com/minsoo-web/root-up/tree/main/.template)

### templateFolder

`/<templateFolder>` ... is your own template.
Make sure check prefix in your config.json

### config.json

The `.config.json` file must be configured as follows

```json
{
  "prefix": "YOUR_FAVORITE_PREFIX",
  "output": "YOUR_DEFAULT_OUTPUT_PATH_IN_YOUR_WORKSPACE"
}
```

**prefix**:
The `prefix` property is the property that sets the alternate text to be replaced by the name of the folder.  
Write down the name of the file, the code used in the template.

**output**:
The `output` property is the property that path to template folder generated _related path_ to your command is executed path

## 🚀 How to run

```bash
# Global installed
root-up

# or local installed
yarn <command> # specified in your package.json
```

Default output location is configured in .template/config.json

## 🚕 Demo

> You can use npx

<video src="./src/assets/videos/demo.mov" controls autoplay loop muted></video>
