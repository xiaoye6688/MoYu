import { app, protocol, dialog } from 'electron'
import { getStartupUrl } from './utils'
import { contentManager } from './utils/contents'
import { protocolScheme, registerScheme } from './utils/protocol'

import path from 'path'
import os from 'os'
import process from 'process'
import './utils/bridge'

protocol.registerSchemesAsPrivileged([
  protocolScheme
])

const bootstrap = async () => {
  registerScheme()
  const root = getStartupUrl()

  const [window, id] = contentManager.createWindow({
    width: 1200,
    height: 800,
    show: false,
    // 默认不显示菜单栏
    autoHideMenuBar: true,
    webPreferences: {
      devTools: true,
      preload: path.resolve(__dirname, 'preload_main.js')
    }
  }, 'main')
  // 按下f12如果是开发环境则打开调试工具，如果已打开则关闭
  window.webContents.on('before-input-event', (event, input) => {
    if (input.key === 'F12' && input.type === 'keyDown') {
      if (window.webContents.isDevToolsOpened()) {
        window.webContents.closeDevTools()
      } else {
        window.webContents.openDevTools({ mode: 'detach' })
        // 主窗口获取焦点
        window.focus()
      }
    }
    // 如果是非开发环境则一秒按五下f12打开开发者工具
    if (input.key === 'F12' && input.type === 'keyDown' && process.env.NODE_ENV !== 'development') {
      let count = 0
      const timer = setInterval(() => {
        count++
        if (count === 5) {
          window.webContents.openDevTools({ mode: 'detach' })
          // 主窗口获取焦点
          window.focus()
          clearInterval(timer)
        }
      }, 1000)
    }
  })
  window.loadURL(`${root}/index.html`)
  // window.loadURL('http://blog.xiaoye6688.xyz')
  // window.loadURL('http://feijisu9.com')
  // 设置窗口标题
  window.setTitle('默余')

  window.once('ready-to-show', () => window.show())

  contentManager.on(id, 'show-app-version', () => {
    const detail = `App Version: ${app.getVersion()}
Electron: ${process.versions.electron}
Chromium: ${process.versions.chrome}
V8: ${process.versions.v8}
Node: ${process.versions.node}
OpenSSL: ${process.versions.openssl}
Zlib: ${process.versions.zlib}
OS: ${os.version()} (${os.arch()})`

    dialog.showMessageBox(window, {
      title: 'Vitectron',
      detail,
      message: 'Vitectron',
      type: 'info'
    })
  })
}

app.whenReady().then(bootstrap)
