# KBCTL-NG
[Electron](http://electron.atom.io/) application boilerplate based on [Vue](https://vuejs.org/).

## 整体设计框架

计划采用3层实现，大体结构为MVC设计逻辑：
1. Model：本项目中为驱动层，负责实现和键盘的数据传输和接受。驱动层可以支持不同的协议，目前拟支持RAW HID、Nordic Uart Service。
2. View: 本项目中为所有的UI页面，负责和用户交互，收集反馈，并对接受到的来自控制器的数据进行展示。
3. Controller: 本项目中为数据逻辑层，负责解包、封装、分发来自驱动层的数据和UI的数据。

### Model
驱动层主要负责对接各类硬件协议，不同的数据传输协议分别需要实现3个函数，分别是：
1. `data_driver_receive(p_data, data_len)`, 用来接受数据，入参为数据指针，数据长度
2. `data_driver_send(p_data, data_len)`，用来发送数据，入参为数据指针，数据长度
3. `data_driver_error_handler(err_code)`，数据接受或者发送出错时的处理函数，入参为错误代码

### View
UI层主要展示功能页，主要有以下几个功能页：
1. 键盘选择页（暂定）
2. 按键修改页
3. 宏录制页
4. 灯光控制页
5. 工具页（暂定）

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
3. {username}_dev为个人开发分支
4. {username}_dev_{feature}为个人新特征开发分支
