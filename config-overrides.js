const { override, addWebpackAlias,addWebpackResolve,addLessLoader } = require("customize-cra")

const path=require("path");

module.exports=override(
    // 配置扩展名(省略扩展名)
    addWebpackResolve({
        extensions:[".js",".json",".jsx"]
       }
    ),
    // 配置别名
    addWebpackAlias({
        "@":path.resolve(__dirname,"src")
    }),
    // 配置less
    addLessLoader({
        // javascriptEnabled: true,
        lessOptions:{
            localIndentName:'[local]--[hash:base64:5]'
        }
    })
)