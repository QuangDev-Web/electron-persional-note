// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

// ipcRenderer = điện thoại của renderer để gọi sang main.
// contextBridge = cây cầu an toàn từ preload → renderer.
import { contextBridge, ipcRenderer } from "electron";

// Đây là bước khai báo và chức năng của điện thoại ipcRenderer
const renderer = {
    close: () => {
        ipcRenderer.send('close-app')
    },
    maximizeApp: () => {
        ipcRenderer.send('maximize-app')
    },
    minimizeApp: () => {
        ipcRenderer.send('minimize-app')
    }
}

contextBridge.exposeInMainWorld('electron', renderer)

export type IRenderer = typeof renderer