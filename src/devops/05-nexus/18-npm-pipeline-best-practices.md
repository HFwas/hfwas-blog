# 前端的流水线最佳实践

- Devops支持过几百项目的流水线，大多数项目的前端流水线的报错可以总结为以下几种：
  - 不熟悉内网环境下的依赖
  - 命令错误
  - 内网环境下依赖下载问题
- 基本上以上三种可以包含大多数的前端项目流水线的报错类型
- 后来思考，如何提高内网环境下，前端项目的一次性 ci 成功率，自己思考总结以下几个步骤提供参考：
  - 删除本地的package-lock.json或者Yarn.lock或者pnpm-lock.yaml文件
  - 内网环境下执行`npm install`和`npm run build`能够成功
  - 执行依赖下载命令，比如
    - npm就执行npm install
    - yarn就执行yarn install
    - pnpm 就执行 pnpm install
  - 生成内网依赖源下的版本约束文件
  - 将依赖约束文件纳入代码版本管理
- 

## 命令比较

### npm ci 



### yarn install --immutable



### pnpm ci 



## 最佳实践

- 前提：

  - 已经在内网环境下成功构建过

- 流水线当中执行代码构建子步骤时，下载依赖执行，例如：

  - npm 就执行：npm ci

  - yarn 就执行：yarn install --immutable

  - pnpm 就执行：pnpm ci 或者 pnpm install --frozen-lockfile