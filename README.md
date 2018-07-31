# React-Native-demo

### React Native ：
(简称RN)是Facebook于2015年4月开源的跨平台移动应用开发框架，是Facebook早先开源的UI框架 React 在原生移动应用平台的衍生产物，目前支持iOS和安卓两大平台。RN使用Javascript语言，类似于HTML的JSX，以及CSS来开发移动应用

### React Native主要特性：
- 原生的iOS组件
- 异步执行
- 触摸处理

### 搭建开发环境：
###### 安装依赖：
必须安装的依赖有：Node、Watchman 和 React Native 命令行工具以及 Xcode。

Watchman 则是由 Facebook 提供的监视文件系统变更的工具。安装此工具可以提高开发时的性能（packager 可以快速捕捉文件的变化从而实现实时刷新）。

虽然你可以使用任何编辑器来开发应用（编写 js 代码），但你仍然必须安装 Xcode 来获得编译 iOS 应用所需的工具和环境。

###### 使用Homebrew来安装 Node 和 Watchman。在命令行中执行下列命令安装：
```javascript
brew install node
brew install watchman
```

###### 设置 npm 镜像以加速后面的过程:
```javascript
npm config set registry https://registry.npm.taobao.org --global
npm config set disturl https://npm.taobao.org/dist --global
```

###### React Native 的命令行工具:
```javascript
npm install -g yarn react-native-cli
```

###### 安装完 yarn 后同理也要设置镜像源：
```javascript
yarn config set registry https://registry.npm.taobao.org --global
yarn config set disturl https://npm.taobao.org/dist --global
```

###### Xcode:
下载Xcode软件，同时安装 Xcode IDE、Xcode 的命令行工具和 iOS 模拟器

###### 创建新项目（稳定版本0.44.3的版本）：
```javascript
react-native init AwesomeProject
```

###### 编译并运行 React Native 应用：
在你的项目目录中运行react-native run-ios：
```javascript
cd AwesomeProject
react-native run-ios
```
