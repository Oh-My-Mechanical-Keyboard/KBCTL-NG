# KBCTL-NG
[Electron](http://electron.atom.io/) application boilerplate based on [Vue](https://vuejs.org/).

## 整体设计框架

计划采用3层实现，大体结构复合MVC设计逻辑：
1. Model：本项目中为驱动层，负责实现和键盘的数据传输和接受。驱动层可以支持不同的协议，目前拟支持RAW HID、Nordic Uart Service。
2. View: 本项目中为所有的UI页面，负责和用户交互，收集反馈，并对接受到的来自控制器的数据进行展示。
3. Controller: 本项目中为数据逻辑层，负责解包、封装、分发来自驱动层的数据和UI的数据。

### Model
驱动层主要负责对接各类硬件协议，不同的数据传输协议分别需要实现3个函数，分别是：
1. `data_driver_receive(p_data, data_len)`, 用来接受数据，入参为数据指针，数据长度
2. `data_driver_send(p_data, data_len)`，用来发送数据，入参为数据指针，数据长度
3. `data_driver_error_handler(err_code)`，数据接受或者发送出错时的处理函数，入参为错误代码

### View


### Controller

