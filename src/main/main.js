/** @format */
import { resolve } from 'app-root-path'
import { app, Tray, Menu, BrowserWindow } from 'electron'
import installExtension, { REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer'
import { autoUpdater } from 'electron-updater'
import logger from 'electron-log'
import url from 'url'

autoUpdater.logger = logger
autoUpdater.logger.transports.file.level = 'info'

logger.info('Application is starting ...')

// Keep a global reference of the window object, if you don't, the window will be closed automatically when the
// JavaScript object is garbage collected.
let mainWindow

const isMacOS = () => process.platform === 'darwin'

const isDev = () => {
  if ('ELECTRON_IS_DEV' in process.env) {
    return parseInt(process.env.ELECTRON_IS_DEV, 10) === 1
  } else {
    return process.defaultApp || /node_modules[\\/]electron[\\/]/.test(process.execPath)
  }
}

async function installDevExtension(extension) {
  try {
    let name = await installExtension(extension)
    console.log(`Added extension: ${name}`)
  } catch (error) {
    console.log(`An error occurred: ${error}`)
  }
}

function setupTray(win) {
  const tray = new Tray(resolve('assets/icons/png/16x16.png'))
  const trayMenu = Menu.buildFromTemplate([
    {
      label: 'Update'
    },
    {
      label: 'Settings'
    },
    {
      label: 'Hide Window',
      click: () => {
        win.isVisible() ? win.hide() : win.show()
      }
    },
    {
      label: 'Toggle DevTools',
      accelerator: isMacOS() ? 'Option+Command+I' : 'Alt+Command+I',
      click: () => {
        win.show()
        win.toggleDevTools()
      }
    },
    {
      label: 'Quit',
      accelerator: isMacOS() ? 'Command+Q' : 'Ctrl+Q',
      selector: 'terminate:'
    }
  ])
  tray.setToolTip('Electron Genesis')
  tray.setContextMenu(trayMenu)
}

function createWindow() {
  const PROTOCOL = process.env.HTTPS === 'true' ? 'https' : 'http'
  const PORT = parseInt(process.env.PORT || '', 10) || 3000
  const HOST = process.env.HOST || '127.0.0.1'

  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: resolve('assets/icons/icon.png.icns')
  })

  const appUrl = isDev()
    ? `${PROTOCOL}://${HOST}:${PORT}`
    : url.format({
        pathname: resolve('dist/renderer/production/index.html'),
        protocol: 'file:',
        slashes: true
      })

  // Open the DevTools.
  if (isDev()) {
    installDevExtension(REACT_DEVELOPER_TOOLS)
    // mainWindow.webContents.openDevTools()
  }

  setupTray(mainWindow)

  // Load the index.html of this application.
  mainWindow.loadURL(appUrl)

  app.setAboutPanelOptions({
    applicationName: 'Electron Genesis',
    applicationVersion: '0.0.1'
  })

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows in an array if your app supports multi windows,
    // this is the time when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

app.on('window-all-closed', () => {
  // On MacOS it's common for applications and their menu bar to stay active until the user quits explicitly with Cmd+Q.
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On MacOS it's common to re-create a window in the app when the dock icon is clicked and there are no other windows
  // open.
  if (mainWindow === null) {
    createWindow()
  }
})
