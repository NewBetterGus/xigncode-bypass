"use strict"

const fs = require("fs");
const path = require("path");
const ProcessListener = require("./process-listener");
const { scan_interval: SCAN_INTERVAL, backup: BACKUP } = require('./config.json');

let PatchedProcesses = {};
let check = false;

module.exports = function XigncodeBypass(region) {
    
    if (["eu", "ru"].includes(region)) {
        console.log(`[xigncode-bypass] bypass 不支持的地区 ${region.toUpperCase()}, 洗洗睡!`);
        return;
    }
    
    ProcessListener("TERA.exe", HandleAddedProcess, HandleRemovedProcess, SCAN_INTERVAL);
    // console.log("[xigncode-bypass] Ready, waiting for game client to be started!");
    console.log("[xigncode-bypass] 已就绪,等待游戏客户端启动!");
    
    try {
        fs.unlinkSync("C:\\Windows\\xhunter1.sys");
        // console.log("[xigncode-bypass] Traces of a previous xigncode installation have been located and removed from your system!");
        // console.log("[xigncode-bypass] Note that some registry keys might still remain on your system.");
        console.log("[xigncode-bypass] 已经找到并从您的系统中删除了以前安装的XIGNCODE的痕迹!");
        console.log("[xigncode-bypass] 请注意,一些注册表项可能仍然保留在您的系统上.");
    } catch(e) {
        // Ignore errors...
    }
    
    function HandleAddedProcess(process) {
        if (check) return;
        
        try {
            let XigncodeFolder = path.join(path.dirname(process.path), "XIGNCODE");
            
            if (BACKUP) {
                fs.renameSync(path.join(XigncodeFolder, "x3.xem"), path.join(XigncodeFolder, "x3.xem.bak"));
                fs.renameSync(path.join(XigncodeFolder, "xcorona.xem"), path.join(XigncodeFolder, "xcorona.xem.bak"));
            }
            
            fs.copyFileSync(path.join(__dirname, "res/x3.xem"), path.join(XigncodeFolder, "x3.xem"));
            fs.copyFileSync(path.join(__dirname, "res/xcorona.xem"), path.join(XigncodeFolder, "xcorona.xem"));
            
            PatchedProcesses[process.pid] = XigncodeFolder;
            
            check = true;
            
            // console.log(`[xigncode-bypass] Game client (PID ${process.pid}) detected, bypass installed.`);
            console.log(`[xigncode-bypass] TERA游戏客户端 (PID ${process.pid}) 被检测到, bypass 已安装.`);
        } catch(e) {
            // Ignore errors...
        }
    }
    
    function HandleRemovedProcess(pid) {
        try {
            let XigncodeFolder = PatchedProcesses[pid];
            
            if (BACKUP) {
                fs.renameSync(path.join(XigncodeFolder, "x3.xem.bak"), path.join(XigncodeFolder, "x3.xem"));
                fs.renameSync(path.join(XigncodeFolder, "xcorona.xem.bak"), path.join(XigncodeFolder, "xcorona.xem"));
                // console.log(`[xigncode-bypass] Game client (PID ${pid}) closed, bypass reverted.`);
                console.log(`[xigncode-bypass] TERA游戏客户端 (PID ${pid}) 已结束, bypass 已还原.`);
            }
            
            delete PatchedProcesses[pid];
            
        } catch(e) {
            // Ignore errors...
        }
    }
    
}
