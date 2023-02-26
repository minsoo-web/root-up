# Root Up

![banner](./src/assets/images/banner.png)

[English](https://github.com/minsoo-web/root-up/blob/main/README.md) | 한국어

## 목차

- [🗂 Root Up이 뭔데?](#🗂-root-up이-뭔데)
- [🚗 설치](#🚗-설치)
  - [Global](#global)
  - [Local](#local)
- [🛑 시작하기 전에](#🛑-시작하기-전에)
  - [templateFolder](#templateFolder)
  - [config.json](#config.json)
- [🚀 실행 방법](#🚀-실행-방법)
- [🚕 예제](#🚕-예제)
- [Contributing](#contributing)

## 🗂 Root Up이 뭔데?

`Root Up` 이란, 반복되어 사용되는 폴더 템플릿이 있는 사람들에게 손쉽게 폴더 구조를 생성할 수 있게 해주는 패키지입니다.

## 🚗 설치

### 전역 설치

```bash
# yarn을 사용할 경우
yarn global add root-up
```

```bash
# npm을 사용할 경우
npm install -g root-up
```

### 로컬 설치

```bash
# yarn을 사용할 경우
yarn add -D root-up
```

```bash
# npm을 사용할 경우
npm install -D root-up
```

> 주의: 만약 npm 버전 5.0.0 이전의 버전을 사용할 경우 --save 옵션을 꼭 넣어주어야 합니다.

아래와 같이 `package.json`의 scripts에 추가해줍니다.

```json
"scripts": {
   "root-up": "root-up"
},
```

## 🛑 시작하기 전에

시작하기 전에, 워크스페이스의 루트 경로에 `.template`라는 폴더를 꼭 생성해야 합니다.  
`.template`폴더는 아래와 같이 구성되어야 합니다.

```txt
/.template
   /<templateFolder>
   /<templateFolder>
   ...
   config.json
```

[`.template`폴더 예시 확인하기](https://github.com/minsoo-web/root-up/tree/main/.template)

### templateFolder

`/<templateFolder>` 은 자주 사용되는 템플릿 폴더입니다.  
prefix가 제대로 설정되었는지, config.json에 명시되어있는 내용과 일치하는지를 꼭 확인하세요

### config.json

`.config.json` 파일은 다음과 같이 구성되어야 합니다.

```json
{
  "prefix": "내가_좋아하는_PREFIX",
  "output": "내가_자주_사용하는_output_path",
  "excludePath": "내가_무시하고_싶은_folder_name_prefix"
}
```

**prefix**:
`prefix` 속성은 이름으로 대체되는 속성입니다. 파일의 이름과 코드 내부에서 사용되었을 때,  
입력된 `name`으로 대체됩니다.

**output**:
`output` 속성은 템플릿을 통해 생성된 폴더가 위치할 경로를 명시합니다.  
명령어가 실행된 workspace를 기준으로 상대경로를 명시합니다.

**excludePath**:  
excludePath 속성은 생성할 폴더를 검색할 때 무시하고 싶은 폴더 이름을 설정할 수 있습니다.  
(예를 들면, .yarn 폴더와 같이요!)  
default로 `node_modules`와 `.git`이 설정되어있습니다.

## 🚀 실행 방법

```bash
# 전역으로 설치된 경우
root-up

# 로컬로 설치된 경우
yarn <command> # package.json에 명시된 명령어를 입력합니다.
```

## 🚕 예제

> npx를 사용할 수도 있습니다.

https://user-images.githubusercontent.com/57122180/218425678-eabb9b8d-f7a2-4048-bec1-e32f2da900b0.mov

## Contributing

기여는 언제든지 환영입니다!
