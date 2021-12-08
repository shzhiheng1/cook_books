const { override, addWebpackAlias,addWebpackResolve,addLessLoader,addWebpackModuleRule } = require("customize-cra")

const path=require("path");


const rewirePostcss = require('react-app-rewire-postcss');
const px2rem = require('postcss-px2rem')



module.exports=override(
     //按需加载
    //  fixBabelImports('import', {
    //     libraryName: 'antd-mobile',
    //     style: 'css',
    // }),
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
    }),
    // 配置rem
    (config,env)=>{
        // 重写postcss
        rewirePostcss(config,{
            plugins: () => [
                require('postcss-flexbugs-fixes'),
                require('postcss-preset-env')({
                    autoprefixer: {
                        flexbox: 'no-2009',
                    },
                    stage: 3,
                }),
               //关键:设置px2rem
                px2rem({
                    remUnit: 37.5,
                    exclude:/node-modules/
                })
            ],
        });
        return config
    },
    // 配置svg
    addWebpackModuleRule({
        test:/\.svg$/,
        include: [path.resolve(__dirname, "src/assets/images/svg")],
        use: [
            {
                loader: 'svg-sprite-loader',
                options: {symbolId: "icon-[name]"}
            },
            {
                loader:'svgo-loader',
                options:{
                    plugins:[
                        {
                            name:'removeAttrs',
                            params:{
                                attrs:'fill'
                            }
                        }
                    ]
                }
            }
        ]
    })
)