# KBCTL-NG
[Electron](http://electron.atom.io/) application boilerplate based on [Vue](https://vuejs.org/).

## 整体设计框架

计划采用3层实现，大体结构为MVVC设计逻辑：
1. View Model：本项目中为驱动层，负责实现和键盘的数据传输和接受。驱动层可以支持不同的协议，目前拟支持RAW HID、Nordic Uart Service。
2. View: 本项目中为所有的UI页面，负责和用户交互，收集反馈，并对接受到的来自控制器的数据进行展示。
3. Controller: 本项目中为数据逻辑层，负责解包、封装、分发来自驱动层的数据和UI的数据。

### Model
驱动层主要负责对接各类硬件协议，不同的数据传输协议分别需要实现3个函数，分别是：
1. `data_driver_receive(p_data, data_len)`, 用来接受数据，入参为数据指针，数据长度
2. `data_driver_send(p_data, data_len)`，用来发送数据，入参为数据指针，数据长度
3. `data_driver_error_handler(err_code)`，数据接受或者发送出错时的处理函数，入参为错误代码

### View
UI层主要展示功能页，主要有以下几个功能页：
1. 键盘配置页（支持配列功能等配置的导入和本地持久保存，远程库读取等功能，暂定）
2. 按键修改页（可以支持自定义按键的映射和绑定，并保存到本地配置文件中）
3. 宏录制页（可以添加延时）
4. 灯光控制页（灯光支持单点控制）
5. 键盘测试页
6. 工具页（包括固件升级，bug提交等，暂定）

### Controller
控制器功能比较繁琐，主要负责连通UI和驱动，主要要完成以下几个服务函数：
1. 布局解析和发送
2. 按键修改值解析和发送
3. 宏按键修改和发送
4. 灯光状态和值的修改和发送
5. 键盘状态显示（暂定）

## 开发准则
1. main用来进行版本发布，每月底接受一次来自dev的合并
2. dev用来进行功能验证，随时接受来自其他dev分支的合并
3. dev\_{:username}为个人开发分支
4. dev\_{:username}\_{:feature}为个人新特征开发分支

## 参考

1. [Electron-VUE 项目起步说明](https://simulatedgreg.gitbooks.io/electron-vue/content/cn/webpack-configurations.html)
2. [vial上位机PyQT](https://github.com/Oh-My-Mechanical-Keyboard/KBCTL-NG/blob/main/README.md)
3. [remap上位机react](https://github.com/remap-keys/remap/blob/main/package.json)
4. [qmk configure网站](https://github.com/qmk/qmk_configurator/tree/master/src/components)

## UI原型设计

## 开发环境

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
