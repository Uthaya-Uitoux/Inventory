const {BrowserWindow, app} = require('electron')
const path = require('path')

const createWindow = () => {
  const win = new BrowserWindow({
    width:1600,
    height: 900,
    webPreferences:{
      preload: path.join(__dirname, 'preload.js')
    }
  })
  win.loadFile("index.html")
 //win.webContents.openDevTools()
}

app.whenReady().then(() => {
  createWindow();
})

app.on('window-all-closed',()=>{
  if(process.platform !== 'darwin')
    app.quit();
})