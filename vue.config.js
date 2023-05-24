const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  // devServer的配置
  devServer: {
    // 自定义端口
    port: 8100,
    // 自动打开浏览器
    open: false,
    // 用于配置反向代理
    // proxy: {
    //   // 代理请求， 匹配所有以/api开头的请求
    //   '/': {
    //     // 目标服务器，所有以/api开头的请求接口代理到目标服务器
    //     target: 'http://showstart:8000',
    //     // 重写路径，此时用于匹配反向代理的/api可以替换为空
    //     // pathRewrite: { '/': '' },
    //     // 如果代理到HTTPS服务器需要设置secure为true，默认为false
    //     secure: true
    //   }
    // }
  }
}