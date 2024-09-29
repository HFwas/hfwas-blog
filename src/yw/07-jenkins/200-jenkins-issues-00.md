# jenkins常见问题-illegal string body character after dollar sign

- 今天遇到了一个问题，报错截图如下：

![image-20240929222225871](images/image-20240929222225871.png)

- 解决办法：

  - 将流水线的`"""`修改为`'''`，将shell命令包围的修改一下

  ![image-20240929222308245](images/image-20240929222308245.png)

## 参考链接

- https://stackoverflow.com/questions/55454137/jenkinsfile-illegal-string-body-character-after-dollar-sign-solution-either-e