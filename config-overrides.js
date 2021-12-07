const { override, addWebpackAlias,addWebpackResolve,addLessLoader } = require("customize-cra")

const path=require("path");
const { extendDefaultPlugins } = require('svgo');


const rewirePostcss = require('react-app-rewire-postcss');
const px2rem = require('postcss-px2rem')

// function resolve (dir){
//     return path.join(__dirname,dir)
// } 
// 自定义配置,配置配置svg
const alter_config = () => (config, env) => {
    const oneOf_loc = config.module.rules.findIndex(n => n.oneOf)
    config.module.rules[oneOf_loc].oneOf = [    
        {
            test: /\.svg$/,
            use: [
                { 
                    loader: 'svg-sprite-loader', 
                    options: {
                    //    symbolId:'[name]'
                    } 
                },
                { loader: 'svgo-loader', options: {
                    // plugins:[
                    //     {removeAttrs: {attrs:'fill'}}
                    //   ]
                } }

                // {
                //     loader: 'svgo-loader', options: {
                //         plugins: extendDefaultPlugins([
                //             {
                //                 name: 'removeAttrs',
                //                 params: {
                //                     attrs: 'fill'
                //                 }
                //             }
                //         ])
                //     }
                // }
            ]
        },
        ...config.module.rules[oneOf_loc].oneOf
    ]

    return config;
}

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
    alter_config ()//自定义组合配置
)