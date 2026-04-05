# 18 Linux 与命令行

> Linux 系统操作、Shell 脚本、服务器运维核心词汇

| 英文单词 / 短语 | 中文释义 | 场景记忆 |
|---|---|---|
| ⭐ Linux | Linux 操作系统 | 开源类 Unix 系统，服务器主流 |
| ⭐ Unix | Unix 系统 | 老牌商业多用户操作系统 |
| ⭐ shell | 命令解释器 | Bash、Zsh，用户与内核交互界面 |
| ⭐ bash | Bourne Again Shell | 最常用的 Linux shell |
| ⭐ terminal | 终端 | 输入命令的界面 |
| ⭐ command line | 命令行 | CLI，通过文本命令操作计算机 |
| ⭐ prompt | 命令提示符 | 等待用户输入命令的符号 `~$` |
| ⭐ stdin | 标准输入 | standard input，文件描述符 0 |
| ⭐ stdout | 标准输出 | standard output，文件描述符 1 |
| ⭐ stderr | 标准错误 | standard error，文件描述符 2 |
| ⭐ pipe | 管道 | `\|` 将前一个命令输出传给后一个 |
| ⭐ redirect | 重定向 | `> >> <` 改变输入输出方向 |
| ⭐ ls | 列出目录 | `ls -la` 显示所有文件包括隐藏文件 |
| ⭐ cd | 切换目录 | `cd ~` 回家目录，`cd -` 回上一目录 |
| ⭐ pwd | 显示当前路径 | print working directory |
| ⭐ cat | 查看文件内容 | concatenate，也可合并多个文件 |
| ⭐ less / more | 分页查看 | 大文件逐页浏览，`less` 可上下翻 |
| ⭐ head | 查看文件头部 | `head -n 20` 看前 20 行 |
| ⭐ tail | 查看文件尾部 | `tail -f` 实时追踪文件变化 |
| ⭐ grep | 搜索文本 | `grep -r "pattern" .` 递归搜索 |
| ⭐ find | 查找文件 | `find . -name "*.js"` 按名查找 |
| ⭐ chmod | 修改权限 | change mode，`chmod +x` 加执行权限 |
| ⭐ chown | 修改所有者 | change owner，`chown user:group file` |
| ⭐ sudo | 超级用户权限 | superuser do，`sudo apt install` |
| ⭐ su | 切换用户 | switch user，`su - root` |
| ⭐ root | 超级用户 | Linux 系统管理员账户 |
| ⭐ man | 查看手册 | manual，`man grep` 看命令帮助 |
| ⭐ ps | 查看进程 | process status，`ps aux` 看所有进程 |
| ⭐ top / htop | 实时进程监控 | 类似任务管理器，看 CPU 内存占用 |
| ⭐ kill | 终止进程 | `kill -9 PID` 强制结束进程 |
| ⭐ df | 磁盘空间 | disk free，`df -h` 人类可读格式 |
| ⭐ du | 目录大小 | disk usage，`du -sh *` 看各目录大小 |
| ⭐ free | 内存使用 | `free -h` 看内存使用情况 |
| ⭐ touch | 创建空文件 | 或更新文件时间戳 |
| ⭐ mkdir | 创建目录 | make directory，`mkdir -p` 递归创建 |
| ⭐ rm | 删除 | remove，`rm -rf` 强制递归删除 ⚠️ |
| ⭐ cp | 复制 | copy，`cp -r` 递归复制目录 |
| ⭐ mv | 移动/重命名 | move，`mv old new` 重命名 |
| ⭐ ln | 创建链接 | link，`ln -s` 创建软链接 |
| ⭐ tar | 打包压缩 | `tar -czvf` gzip 压缩，`tar -xzvf` 解压 |
| ⭐ gzip | gzip 压缩 | `.gz` 文件压缩/解压 |
| ⭐ zip / unzip | zip 压缩 | `.zip` 文件处理 |
| ⭐ curl | 下载/请求 | `curl -O` 下载，`curl -X POST` 发请求 |
| ⭐ wget | 下载工具 | `wget -O filename URL` |
| ⭐ ssh | 安全远程登录 | secure shell，`ssh user@host` |
| ⭐ scp | 安全复制 | secure copy，`scp file user@host:/path` |
| ⭐ rsync | 同步工具 | `rsync -avz` 增量同步，高效传输 |
| ⭐ vim / vi | 文本编辑器 | `vim file` 编辑，`:wq` 保存退出 |
| ⭐ nano | 简单编辑器 | 适合新手的命令行编辑器 |
| ⭐ echo | 输出文本 | `echo $PATH` 打印环境变量 |
| ⭐ env | 环境变量 | `env` 显示所有环境变量 |
| ⭐ export | 导出变量 | `export VAR=value` 设置环境变量 |
| ⭐ source | 执行脚本 | `source ~/.bashrc` 使配置生效 |
| ⭐ alias | 命令别名 | `alias ll='ls -alF'` 简化命令 |
| ⭐ PATH | 可执行文件路径 | 系统查找命令的目录列表 |
| ⭐ HOME | 用户主目录 | `/home/username` |
| ⭐ pwd | 当前工作目录 | print working directory |
| ⭐ which | 查找命令位置 | `which python` 看 python 路径 |
| ⭐ whoami | 当前用户 | 显示当前用户名 |
| ⭐ hostname | 主机名 | 显示或设置系统主机名 |
| ⭐ ping | 网络连通测试 | `ping google.com` 测试网络 |
| ⭐ netstat | 网络状态 | 查看端口连接，`netstat -tlnp` |
| ⭐ ss | 套接字统计 | 替代 netstat，更高效 |
| ⭐ lsof | 列出打开文件 | `lsof -i :8080` 看端口占用 |
| ⭐ ifconfig / ip | 网络接口 | `ip addr` 看 IP 地址 |
| ⭐ iptables | 防火墙规则 | Linux 防火墙配置 |
| ⭐ systemctl | 系统服务管理 | `systemctl start nginx` 启动服务 |
| ⭐ service | 服务管理 | `service nginx restart` |
| ⭐ crontab | 定时任务 | `crontab -e` 编辑定时任务 |
| ⭐ cron | 定时调度 | 周期性执行任务的后台服务 |
| ⭐ nohup | 不挂断运行 | no hang up，`nohup cmd &` |
| ⭐ background | 后台运行 | `cmd &` 在后台执行命令 |
| ⭐ foreground | 前台运行 | `fg` 将后台任务调到前台 |
| ⭐ job | 作业 | 终端中运行的任务 |
| ⭐ wildcard | 通配符 | `* ? []` 匹配文件名 |
| ⭐ glob | 模式匹配 | shell 的文件名扩展机制 |
| ⭐ shebang | 脚本解释器声明 | `#!/bin/bash` 指定解释器 |
| ⭐ permission | 权限 | rwx 读写执行权限 |
| ⭐ owner | 所有者 | 文件的主人 |
| ⭐ group | 用户组 | 文件所属的用户组 |
| ⭐ other | 其他用户 | 非所有者非组内用户 |
| ⭐ executable | 可执行 | 有 x 权限的文件 |
| ⭐ symlink | 符号链接/软链接 | 类似快捷方式，指向另一个文件 |
| ⭐ hard link | 硬链接 | 指向同一 inode 的多个文件名 |
| ⭐ inode | 索引节点 | 存储文件元数据的数据结构 |
| ⭐ directory | 目录 | 文件夹，存文件和其他目录 |
| ⭐ hidden file | 隐藏文件 | 以 `.` 开头的文件 |
| ⭐ kernel | 内核 | Linux 系统核心 |
| ⭐ distribution / distro | 发行版 | Ubuntu、CentOS、Debian 等 |
| ⭐ package | 软件包 | `.deb` `.rpm` 等安装包 |
| ⭐ apt / yum / pacman | 包管理器 | 安装、更新、卸载软件 |
| ⭐ repository / repo | 软件仓库 | 存放软件包的服务器 |
| ⭐ dependency | 依赖 | 软件运行需要的其他包 |
| ⭐ process | 进程 | 正在运行的程序实例 |
| ⭐ daemon | 守护进程 | 后台持续运行的服务 |
| ⭐ fork | 创建子进程 | 复制当前进程 |
| ⭐ zombie process | 僵尸进程 | 已结束但未被父进程回收的进程 |
| ⭐ signal | 信号 | 进程间通信机制，`kill -9` 发 SIGKILL |
| ⭐ exit code | 退出码 | 0 成功，非 0 表示不同错误 |
| ⭐ log | 日志 | 系统和应用运行的记录 |
| ⭐ rotate | 日志轮转 | 定期切割和清理日志文件 |
| ⭐ mount | 挂载 | 将文件系统连接到目录树 |
| ⭐ unmount / umount | 卸载 | 断开文件系统连接 |
| ⭐ disk | 磁盘 | 存储设备 |
| ⭐ partition | 分区 | 磁盘上的逻辑分割 |
| ⭐ filesystem | 文件系统 | ext4、XFS、NTFS 等 |
| ⭐ swap | 交换分区 | 虚拟内存，用磁盘扩展内存 |
| ⭐ stdin | 标准输入 | 文件描述符 0，通常是键盘 |
| ⭐ stdout | 标准输出 | 文件描述符 1，通常是屏幕 |
| ⭐ stderr | 标准错误 | 文件描述符 2，错误信息输出 |
| ⭐ file descriptor | 文件描述符 | 内核追踪打开文件的整数标识 |
| ⭐ append | 追加 | `>>` 追加到文件末尾 |
| truncate | 截断 | 清空文件内容或限制大小 |
