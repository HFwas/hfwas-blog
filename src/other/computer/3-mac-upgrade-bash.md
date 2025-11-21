# MacOS-升级bash版本

执行`bash -version`查看当前ba sh版本

```bash
hfwas@192 ~ % bash -version 
GNU bash, version 3.2.57(1)-release (arm64-apple-darwin24)
Copyright (C) 2007 Free Software Foundation, Inc.
```

使用homebrew升级bash，首先更新下brew，执行

```bash
brew update
```

然后执行

```
brew install bash
```

查看`which -a bash`

```bash
hfwas@HFwasdeMacBook-Pro ~ % which -a bash
/opt/homebrew/bin/bash
/bin/bash
hfwas@HFwasdeMacBook-Pro ~ % 
hfwas@HFwasdeMacBook-Pro ~ % bash -version 
GNU bash, version 3.2.57(1)-release (arm64-apple-darwin24)
Copyright (C) 2007 Free Software Foundation, Inc.
hfwas@HFwasdeMacBook-Pro ~ % 
hfwas@HFwasdeMacBook-Pro ~ % /opt/homebrew/bin/bash -version 
GNU bash，版本 5.2.37(1)-release (aarch64-apple-darwin24.2.0)
Copyright (C) 2022 自由软件基金会
许可证 GPLv3+：GNU GPL 许可证第三版或者更新版本 <http://gnu.org/licenses/gpl.html>

本软件是自由软件，您可以自由地更改和重新发布。
在法律许可的情况下特此明示，本软件不提供任何担保。
hfwas@HFwasdeMacBook-Pro ~ % 
```

将新版本的bash添加到shell当中：

```bash
sudo vi /etc/shells

hfwas@192 ~ % cat /etc/shells       
# List of acceptable shells for chpass(1).
# Ftpd will not allow users to connect who are not using
# one of these shells.

/bin/bash
/bin/csh
/bin/dash
/bin/ksh
/bin/sh
/bin/tcsh
/bin/zsh
/opt/homebrew/bin/bash
```

创建文件：`touch ~/.bash_profile`

添加内容；

```bash
cat .bash_profile 
export PATH="/opt/homebrew/bin:$PATH"
source ~/.bash_profile
```

更改默认shell

```
chsh -s /opt/homebrew/bin/bash
```

更改root用户的默认shell

```
sudo chsh -s /usr/local/bin/bash 
```

