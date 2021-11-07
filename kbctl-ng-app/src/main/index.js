'use strict'

import { app, BrowserWindow, Menu, dialog } from 'electron'
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
  var template = [
    {
      label: '键盘配置文件',
      submenu: [
        {
          accelerator: 'ctrl+n',
          label: '导入新配置',
          type: 'checkbox',
          click: () => {
            dialog.showOpenDialog({ properties: [ 'openFile', 'openDirectory', 'multiSelections' ]})
          }
        },
        {
          label: '列出支持的键盘',
          type: 'checkbox',
          click: () => {
            console.log('1')
          }
        }
      ]
    },
    {
      label: '关于我们',
      submenu: [
        {
          label: '本项目地址'
        },
        {
          label: 'QQ群:xxxxxxx'
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
