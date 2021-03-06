# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
`npx create-react-app cook_books`
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### `yarn mock` 本地启用json-server服务，调用mock数据。
使用`http-proxy-middleware`中间件做服务代理，解决本地跨域问题。
### 使用UI组件: antd mobile
`yarn add antd-mobile@next`

### 使用 customize-cra 重写配置：
`yarn add react-app-rewird` 修改package.json文件。
`yarn add customize-cra` 并创建config-overrides.js进行配置。

## 1.支持修饰： `yarn add babel-plugin-import`
   配置：addDecoratorsLegacy()

## 2.rem 配置rem ：
  `yarn add  lib-flexible postcss-px2rem`

## 3.配置 xx.svg解析：
`yarn add svg-sprite-loader svgo-loader`
## 4.配置redux
`yarn add redux react-redux react-thunk`

## 5. 配置less 
`yarn add less less-loader`

## 6. 配置多环境
`yarn add dotenv-cli -D`

### 使用：
1. 根目录下创建如：.env.uat文件
2. package.json配置："uat": "dotenv -e .env.uat react-app-rewired start"

> **注意：**

>> __变量定义:REACT_APP_XXX=xxx__ 

>> __变量获取:process.env.REACT_APP_XXX__

>> yarn start 默认为.env.development;  yarn build默认为.env.production
