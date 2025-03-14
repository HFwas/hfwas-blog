# jenkins常见问题-ssh版本国道导致连接不上虚拟机

# 背景信息

- 客户环境开出来的虚拟机ssh版本最低是8.8p1版本，之前流水线服务测试连接虚拟机的代码显示报错连接失败

# 复现步骤

- 阿里云申请一个抢占士实例的ecs， 公共镜像选择alibaba cloud linux3.2104LTS 64位
  - 自带了openssl 1.1.1k版本,不用再自己升级openssl了

- 执行`wget https://cdn.openbsd.org/pub/OpenBSD/OpenSSH/portable/openssh-9.8p1.tar.gz`，下载openssh9.8p1版本
- 执行

```
   yum install -y install libz-dev
   yum install -y libz-dev
   yum install -y zlib1g-dev
   yum install -y zlib-devel
   ./configure 
   yum install -y openssl-devel
   ./configure
   make
   make install
   echo 'export PATH=/usr/local/bin:/usr/local/sbin:$PATH' >> ~/.bashrc
   systemctl daemon-reload
   systemctl restart sshd
   systemctl status ssh
```

- 升级之后的自带的sshd配置文件如下：

```shell
#	$OpenBSD: sshd_config,v 1.103 2018/04/09 20:41:22 tj Exp $

# This is the sshd server system-wide configuration file.  See
# sshd_config(5) for more information.

# This sshd was compiled with PATH=/usr/local/bin:/usr/bin:/usr/local/sbin:/usr/sbin

# The strategy used for options in the default sshd_config shipped with
# OpenSSH is to specify options with their default value where
# possible, but leave them commented.  Uncommented options override the
# default value.

# If you want to change the port on a SELinux system, you have to tell
# SELinux about this change.
# semanage port -a -t ssh_port_t -p tcp #PORTNUMBER
#
#Port 22
#AddressFamily any
#ListenAddress 0.0.0.0
#ListenAddress ::

HostKey /etc/ssh/ssh_host_rsa_key
HostKey /etc/ssh/ssh_host_ecdsa_key
#In FIPS mode Ed25519 keys are not supported, please comment out the next line
HostKey /etc/ssh/ssh_host_ed25519_key

# Ciphers and keying
#RekeyLimit default none

# This system is following system-wide crypto policy. The changes to
# crypto properties (Ciphers, MACs, ...) will not have any effect here.
# They will be overridden by command-line options passed to the server
# on command line.
# Please, check manual pages for update-crypto-policies(8) and sshd_config(5).

# Logging
#SyslogFacility AUTH

#LogLevel INFO

# Authentication:

#LoginGraceTime 2m

#StrictModes yes
#MaxAuthTries 6
#MaxSessions 10

#PubkeyAuthentication yes

# The default is to check both .ssh/authorized_keys and .ssh/authorized_keys2
# but this is overridden so installations will only check .ssh/authorized_keys
AuthorizedKeysFile .ssh/authorized_keys

#AuthorizedPrincipalsFile none

#AuthorizedKeysCommand none
#AuthorizedKeysCommandUser nobody

# For this to work you will also need host keys in /etc/ssh/ssh_known_hosts
#HostbasedAuthentication no
# Change to yes if you don't trust ~/.ssh/known_hosts for
# HostbasedAuthentication
#IgnoreUserKnownHosts no
# Don't read the user's ~/.rhosts and ~/.shosts files
#IgnoreRhosts yes

# To disable tunneled clear text passwords, change to no here!
#PermitEmptyPasswords no


# Change to no to disable s/key passwords
#ChallengeResponseAuthentication yes
ChallengeResponseAuthentication no

# Kerberos options
#KerberosAuthentication no
#KerberosOrLocalPasswd yes
#KerberosTicketCleanup yes
#KerberosGetAFSToken no
#KerberosUseKuserok yes

# GSSAPI options
GSSAPIAuthentication yes
GSSAPICleanupCredentials no
#GSSAPIStrictAcceptorCheck yes
#GSSAPIKeyExchange no
#GSSAPIEnablek5users no

# Set this to 'yes' to enable PAM authentication, account processing,
# and session processing. If this is enabled, PAM authentication will
# be allowed through the ChallengeResponseAuthentication and
# PAM authentication via ChallengeResponseAuthentication may bypass
# the setting of "PermitRootLogin without-password".
# If you just want the PAM account and session checks to run without
# and ChallengeResponseAuthentication to 'no'.
# WARNING: 'UsePAM no' is not supported in RHEL and may cause several
# problems.
UsePAM yes

#AllowAgentForwarding yes
#AllowTcpForwarding yes
#GatewayPorts no
X11Forwarding yes
#X11DisplayOffset 10
#X11UseLocalhost yes
#PermitTTY yes

# It is recommended to use pam_motd in /etc/pam.d/sshd instead of PrintMotd,
# as it is more configurable and versatile than the built-in version.
PrintMotd no

#PrintLastLog yes
#TCPKeepAlive yes
#PermitUserEnvironment no
#Compression delayed
#ClientAliveInterval 0
#ClientAliveCountMax 3
#UseDNS no
#PidFile /var/run/sshd.pid
#MaxStartups 10:30:100
#PermitTunnel no
#ChrootDirectory none
#VersionAddendum none

# no default banner path
#Banner none

# Accept locale-related environment variables
AcceptEnv LANG LC_CTYPE LC_NUMERIC LC_TIME LC_COLLATE LC_MONETARY LC_MESSAGES
AcceptEnv LC_PAPER LC_NAME LC_ADDRESS LC_TELEPHONE LC_MEASUREMENT
AcceptEnv LC_IDENTIFICATION LC_ALL LANGUAGE
AcceptEnv XMODIFIERS

# override default of no subsystems
Subsystem sftp	/usr/libexec/openssh/sftp-server

# Example of overriding settings on a per-user basis
#Match User anoncvs
#	X11Forwarding no
#	AllowTcpForwarding no
#	PermitTTY no
#	ForceCommand cvs server

UseDNS no
SyslogFacility AUTHPRIV
PermitRootLogin yes
PasswordAuthentication yes
```

- 替换为内网可复现的sshd配置文件，如下

```shell
// 省略
AllowTcpForwarding no
AllowAgentForwarding no
GatewayPorts no
PermitTunnel no
KexAlgorithms curve25519-sha256,curve25519-sha256@libssh.org,diffie-hellman-group-exchange-sha256
HostbasedAcceptedKeytypes ssh-ed25519,ssh-ed25519-cert-v01@openssh.com,rsa-sha2-256,rsa-sha2-512
GSSAPIKexAlgorithms gss-group14-sha256-,gss-group16-sha512-,gss-curve25519-sha256-
CASignatureAlgorithms ssh-ed25519,sk-ssh-ed25519@openssh.com,rsa-sha2-512,rsa-sha2-256
HostKeyAlgorithms ssh-ed25519,ssh-ed25519-cert-v01@openssh.com,rsa-sha2-256,rsa-sha2-512
PubkeyAcceptedKeyTypes ssh-ed25519,ssh-ed25519-cert-v01@openssh.com,rsa-sha2-256,rsa-sha2-512
```

- 重启sshd服务，启动报错，报错日志截图如下：

- 将以下内容删除，

```shell
GSSAPIKexAlgorithms gss-group14-sha256-,gss-group16-sha512-,gss-curve25519-sha256-
CASignatureAlgorithms ssh-ed25519,sk-ssh-ed25519@openssh.com,rsa-sha2-512,rsa-sha2-256
```

- 重启服务，执行`systemctl restart sshd`

- 然后代码测试连接，发现可以测试连接成功，发现原因：可能是因为这两行配置导致的，将内网的sshd_config配置文件同样删除这两行，重启sshd服务，发现可以连接成功了。
- 问题解决！

# 附录

- 测试虚拟机连接的代码如下：

```java
Session session;
            if(credentialDetail.getCredentialType() == 0){
                session = JschUtil.openSession(info.getIp(), info.getPort(), credentialDetail.getName(), credentialDetail.getPassword(), 2000);
```