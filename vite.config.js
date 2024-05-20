import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import scss from 'sass';
import { nodePolyfills } from "vite-plugin-node-polyfills";
import postcsspxtoviewport from 'postcss-px-to-viewport' // px-to-vw
// 时间戳
const timeStamp = new Date().getTime();

export default defineConfig(({ mode })=>{
  const env = loadEnv(mode, process.cwd());
	let fileName = 'dist'
	fileName = env.VITE_APP_NAME
  return {
    plugins: [vue(),nodePolyfills()],
    build:{
      outDir: fileName,
      assetsDir:'static',
      rollupOptions: {
        output: {
          chunkFileNames: `static/js/[name].[hash]${timeStamp}.js`,
          entryFileNames: `static/js/[name].[hash]${timeStamp}.js`,
          assetFileNames: `static/[ext]/[name].[hash]${timeStamp}.[ext]`,
        },
      }
    },
    
    css: {
      postcss: {
        plugins: [
          postcsspxtoviewport({
            // 要转化的单位
            unitToConvert: 'px',
            // UI设计稿的大小
            viewportWidth: 750,
            // 转换后的精度
            unitPrecision: 6,
            // 转换后的单位
            viewportUnit: 'vw',
            // 字体转换后的单位
            fontViewportUnit: 'vw',
            // 能转换的属性，*表示所有属性，!border表示border不转
            propList: ['*'],
            // 指定不转换为视窗单位的类名，
            selectorBlackList: ['ignore-'],
            // 最小转换的值，小于等于1不转
            minPixelValue: 1,
            // 是否在媒体查询的css代码中也进行转换，默认false
            mediaQuery: false,
            // 是否转换后直接更换属性值
            replace: true,
            // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
            exclude: [],
            // 包含那些文件或者特定文件
            include: [],
            // 是否处理横屏情况
            landscape: false
          }),
        ]
      },
      preprocessorOptions: {
        scss: {
          additionalData: `@use "./src/config/scss/config.scss" as *;`,
          implementation: scss,
        },
      },
    },
    
    server: {
      port:7449,
      host: '0.0.0.0',
      open: true,
      proxy: {
        '/api': {
          target: "",
          ws: false,
          changeOrigin: true,
          rewrite: (path)=>path.replace(/^\/api/,'') 
        }
      },
    }
  }

})