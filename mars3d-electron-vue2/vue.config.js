const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  publicPath: './',
  assetsDir: './static',
  productionSourceMap: false,
  lintOnSave: true, // 是否开启eslint
  // 它支持webPack-dev-server的所有选项
  devServer: {
    port: 3011, // 端口号
    open: true
  },
  configureWebpack: (config) => {
    const cesiumSourcePath = 'node_modules/mars3d-cesium/Build/Cesium/' // cesium库安装目录
    const cesiumRunPath = './mars3d-cesium/' // cesium运行时路径

    let plugins = [
      // 标识cesium资源所在的主目录，cesium内部资源加载、多线程等处理时需要用到
      new webpack.DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify(path.join(config.output.publicPath, cesiumRunPath))
      }),
      // Cesium相关资源目录需要拷贝到系统目录下面（部分CopyWebpackPlugin版本的语法可能没有patterns）
      new CopyWebpackPlugin({
        patterns: [
          { from: path.join(cesiumSourcePath, 'Workers'), to: path.join(config.output.path, cesiumRunPath, 'Workers') },
          { from: path.join(cesiumSourcePath, 'Assets'), to: path.join(config.output.path, cesiumRunPath, 'Assets') },
          { from: path.join(cesiumSourcePath, 'ThirdParty'), to: path.join(config.output.path, cesiumRunPath, 'ThirdParty') },
          { from: path.join(cesiumSourcePath, 'Widgets'), to: path.join(config.output.path, cesiumRunPath, 'Widgets') }
        ]
      })
    ]

    return {
      module: { unknownContextCritical: false }, // 配置加载的模块类型，cesium时必须配置
      resolve: {
        alias: {
          '@': path.resolve('src')
        }
      },
      plugins: plugins
    }
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: 'marsgis.cn', // 开发者标示
        win: {
          icon: 'mars3d.ico' // windows系统中icon需要256*256的ico格式图片，更换应用图标亦在此处
        },
        nsis: {
          // nsis配置参数
          oneClick: false, // 可单击打开
          allowToChangeInstallationDirectory: true, // 允许用户选择安装位置
          perMachine: true
        }
      }
    }
  }
}
