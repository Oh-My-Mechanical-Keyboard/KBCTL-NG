'use strict'

import { app, BrowserWindow, Menu } from 'electron'
import '../renderer/store'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow() {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 563,
    useContentSize: true,
    width: 1000
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
  return mainWindow
}

function createMenu () {
  //在渲染进程中使用Menu模块需要用到remote函数
  //创建一个模板
  var template = [
    {
      label: '文件',
      submenu: [
        {
          accelerator: 'ctrl+n',
          label: '新建文件',
          type: 'checkbox',
          click: () => {
            alert('2')
          }
        },
        {
          label: '新建窗口',
          type: 'checkbox',
          click: () => {
            alert('1')
          }
        }
      ]
    },
    {
      label: '编辑',
      submenu: [
        {
          label: '编辑文件'
        },
        {
          label: '编辑窗口'
        }
      ]
    }
  ]

  var m = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(m);
}

app.on('ready', () => {
  mainWindow = createWindow()
  createMenu()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
