const {app, BrowserWindow} = require("electron");

const enableRemote = require("@electron/remote/main").enable
const init = require("@electron/remote/main").initialize

function createWindow() {
    
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            contextIsolation: false
          }
    });

    enableRemote(win.webContents);
    init();
    win.loadURL("http://localhost:3000")
}


app.on("ready", createWindow);

app.on("window-all-closed", function() {

    if(process.platform !== "darwin") {

        app.quit();
    }
});

app.on("activate", function() {

    createWindow();
})