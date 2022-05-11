require('dotenv').config({ path: join(__dirname, '.env') })

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from 'path'
import mars3dCesium from "vite-plugin-mars3d"
import electron from 'vitejs-plugin-electron'


export default defineConfig(env => {
  console.log(`ENV：`, env)

  return {
    base: '/', // index.html 中静态资源加载位置
    server: {
      host: "localhost",
      https: false,
      port: 3004
    },
    root: join(__dirname, 'src/render'),
    resolve: {
      alias: {
        '@render': join(__dirname, 'src/render'),
        '@mars': join(__dirname, 'src/render'),
        '@main': join(__dirname, 'src/main'),
        '@src': join(__dirname, 'src'),
        '@root': __dirname,
      },
    },
    optimizeDeps: {
      include: ["mars3d"]
    },
    plugins: [
      vue(),
      mars3dCesium(),
      electron(),
    ],
    build: {
      outDir: join(__dirname, 'dist/render'),
      assetsDir: '', // 相对路径 加载问题
      // 小于此阈值的导入或引用资源将内联为 base64 编码， 以避免额外的http请求， 设置为 0, 可以完全禁用此项，
      assetsInlineLimit: 4096,
      // 启动 / 禁用 CSS 代码拆分
      cssCodeSplit: true,
      // 构建后是否生成 soutrce map 文件
      sourcemap: false,
      // 默认情况下 若 outDir 在 root 目录下， 则 Vite 会在构建时清空该目录。
      emptyOutDir: true,
      // 当设置为 true, 构建后将会生成 manifest.json 文件
      manifest: false,
      // 自定义rollup-commonjs插件选项
      commonjsOptions: {
        include: /node_modules|src\/render\/common/
      },
      // 自定义底层的 Rollup 打包配置
      rollupOptions: {
        output: {
          manualChunks: {
            "mars3d-cesium": ["mars3d-cesium"]
          }
        }
      },
    },
  }
})
