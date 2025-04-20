

# helm-用法

- 执行`helm install -n 命名空间  ./ -f values文件`，安装helm文件
- 卸载helm，执行`helm uninstall -n 命名空间 helm名称`
- helm模版：
  - 本地渲染模版并显示输出：`helm tempalte  -n 命名空间 ./ -f values文件`,测试yaml文件是否有问题
- 