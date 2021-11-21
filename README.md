# KBCTL-NG
[Electron](http://electron.atom.io/) application boilerplate based on [Vue](https://vuejs.org/).

## 整体设计框架

计划采用3层实现，大体结构复合MVC设计逻辑：
1. Model：本项目中为驱动层，负责实现和键盘的数据传输和接受。驱动层可以支持不同的协议，目前拟支持RAW HID、Nordic Uart Service。
2. View: 本项目中为所有的UI页面，负责和用户交互，收集反馈，并对接受到的来自控制器的数据进行展示。
3. Controller: 本项目中为数据逻辑层，负责解包、封装、分发来自驱动层的数据和UI的数据。

### Model

### View

### Controller