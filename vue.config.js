// 接口代理
module.exports = {
    devServer: {
        proxy: {
            // http://localhost:8080/api/song-search
            // 识别以/api开头的url
            // 相当于请求http://m.jxsjs.com/api/song-search
            '/api': {
                target: '',
                // 代理请求时修改请求头中的host值为target
                changeOrigin: true
            }
        }
    }
}