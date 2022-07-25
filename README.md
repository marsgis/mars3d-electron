<p align="center">
<img src="//mars3d.cn/logo.png" width="300px" />
</p>

<p align="center">基于Vue3.x + Vite2 + Electron 技术栈的 Mars3D🌎CS桌面程序项目模板</p>

<p align="center">
<a target="_black" href="https://github.com/marsgis/mars3d">
<img alt="GitHub stars" src="https://img.shields.io/github/stars/marsgis/mars3d?style=flat&logo=github">
</a>
<a target="_black" href="https://www.npmjs.com/package/mars3d">
<img alt="Npm downloads" src="https://img.shields.io/npm/dt/mars3d?style=flat&logo=npm">
</a>
<a target="_black" href="https://www.npmjs.com/package/mars3d">
<img alt="Npm version" src="https://img.shields.io/npm/v/mars3d.svg?style=flat&logo=npm&label=version"/>
</a>
</p>

Mars3D 平台基于`Vue3.x ` 、 `Vite ` 和 `Electron` 的最简的 CS 应用项目模版，可以使用该模板建立自己的 CS 桌面版三维地球程序。

## 如何安装

> 请确保您的 node 版本大于等于 16.

```bash
npm config edit
# 该命令会打开npm的配置文件，请在空白处添加，记得去除#号
# electron_builder_binaries_mirror=https://npmmirror.com/mirrors/electron-builder-binaries/
# electron_custom_dir={{ version }}
# electron_mirror=https://cdn.npmmirror.com/binaries/electron/v
# registry=https://registry.npmmirror.com/
# 然后关闭该窗口，重启命令行.

# 使用yarn安装
yarn or yarn install

# 启动之后，会在9080端口监听
yarn dev

# build命令在不同系统环境中，需要的的不一样，需要自己根据自身环境进行配置
yarn build

```

## 常见问题

### npm 安装是 electron 总是超时

删除 package.json 中 electron 包，通过 npm install 安装成功后，再恢复 electron 包，通过 cnpm install 安装完成。




## 参考了仓库
- [electron-vite-template](https://gitee.com/Zh-Sky/electron-vite-template)








## Mars3D 是什么

> `Mars3D平台` 是[火星科技](http://marsgis.cn/)研发的一款基于 WebGL 技术实现的三维客户端开发平台，基于[Cesium](https://cesium.com/cesiumjs/)优化提升与 B/S 架构设计，支持多行业扩展的轻量级高效能 GIS 开发平台，能够免安装、无插件地在浏览器中高效运行，并可快速接入与使用多种 GIS 数据和三维模型，呈现三维空间的可视化，完成平台在不同行业的灵活应用。

> Mars3D 平台可用于构建无插件、跨操作系统、 跨浏览器的三维 GIS 应用程序。平台使用 WebGL 来进行硬件加速图形化，跨平台、跨浏览器来实现真正的动态大数据三维可视化。通过 Mars3D 产品可快速实现浏览器和移动端上美观、流畅的三维地图呈现与空间分析。

### 相关网站

- Mars3D 官网：[http://mars3d.cn](http://mars3d.cn)

- Mars3D 开源项目列表：[https://github.com/marsgis/mars3d](https://github.com/marsgis/mars3d)

## 版权说明

1. Mars3D 平台由[火星科技](http://marsgis.cn/)自主研发，拥有所有权利。
2. 任何个人或组织可以在遵守相关要求下可以免费无限制使用。
