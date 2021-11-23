# kbctl-ng

> An electron-vue project

## Build Setup

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:9080
yarn run dev

# build electron application for production
yarn run build

# run unit & end-to-end tests
yarn test


# lint all JS/Vue component files in `src/`
yarn run lint
```

## 文件结构
- dist
- src
    - main
    - model
        - `keycode.js`: 记录了所有的按键码
    - renderer
    - controller
        - `kle-parse.js`: KLEjson解析用来解析具体的电路行列布局和键位形状

This project was generated with [electron-vue](https://github.com/SimulatedGREG/electron-vue)@[8d4ed60](https://github.com/SimulatedGREG/electron-vue/tree/8d4ed607d65300381a8f47d97923eb07832b1a9a) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about the original structure can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).
