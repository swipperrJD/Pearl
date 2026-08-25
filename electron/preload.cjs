const { contextBridge, ipcRenderer, } = require('electron')

contextBridge.exposeInMainWorld('pearl', {
    openPath: (path) => ipcRenderer.invoke('open-path', path),
})