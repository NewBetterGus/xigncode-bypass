# xigncode-bypass

- [xigncode-bypass-standalone] 适用于无[teraProxy]的环境

- [xigncode-bypass] 自然是适用于伴随[teraProxy]一起启动的环境

- 兼容 [老旧的] [最新C版] [最新P版] TeraProxy

# 使用须知

由于2家作者现在都已没有了启动[teraProxy]时运行\tera-proxy\mods中mod的功能

所以仍将[xigncode-bypass]放入\tera-proxy\mods将无任何效果

这是因为\tera-proxy\mods中的内容都需要等待 TERA.exe 客户端选择服务器后才会加载

解决方案肯定是有的:

原本为运行teraProxy并提前加载xigncode-bypass模块

将这个顺序颠倒, 先运行xigncode-bypass在运行teraProxy

但这样便无法利用teraProxy自动更新xigncode-bypass数据(无所谓反正也不常更新)

# 安装说明

- 建议删除客户端 \TERA\Binaries\XIGNCODE 中垃圾文件避免自动上传, 仅需保留以下4个文件即可

  [x3.xem] [xcorona.xem] [xcorona_x64.xem] [xnina.xem]

- 将整个库 存放到你的 \teraProxy\目录下

  !!注意!! 不再是常规的 \teraProxy\mod\

  !!注意!! 不再是常规的 \teraProxy\mod\

![screenshot](https://github.com/zc149352394/xigncode-bypass/blob/master/screenshot/01.png)

- (旧的C版和最新P版 依旧是先打开登录器 再)

- 以管理员权限运行 XigncodeBypassWithTeraProxy.bat

![screenshot](https://github.com/zc149352394/xigncode-bypass/blob/master/screenshot/02.png)

- 功能等效于 xigncode-bypass-standalone 且附带启动teraProxy 并优先执行

![screenshot](https://github.com/zc149352394/xigncode-bypass/blob/master/screenshot/03.png)

![screenshot](https://github.com/zc149352394/xigncode-bypass/blob/master/screenshot/04.png)

![screenshot](https://github.com/zc149352394/xigncode-bypass/blob/master/screenshot/05.png)
