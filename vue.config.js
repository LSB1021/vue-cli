const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,  //关闭语法检查
  //开启代理服务器（方式一）
  /* devServer:{
    // 开启代理服务器的8080只是被监听的，不会冲突
    proxy:'http://localhost:5000'  //此处地址为发送请求地址  //不能配置多个代理，如果根目录有相应文件会冲突
    } */

  //开启代理服务器（方式二）
  /* devServer:{
    proxy:{
      '/lsb':{  //请求前缀
        target:'http://localhost:5000',
        pathRewrite:{'^/lsb':''},  //正则表达式^/lsb匹配所有/lsb并转换为空转发给5000
        // ws:true,   //用于支持websocket //不写默认值为true
        // changeOrigin:true  不写默认值为true  用于控制请求头中的host值
      },
      '/demo':{  //请求前缀
        target:'http://localhost:5001',
        pathRewrite:{'^/demo':''},  //正则表达式^/lsb匹配所有/lsb并转换为空转发给5000
        // ws:true,   //用于支持websocket //不写默认值为true
        // changeOrigin:true  不写默认值为true  用于控制请求头中的host值
      },
    }
  } */
})
