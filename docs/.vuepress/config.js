module.exports = {
    lang: "zh-CN",
    title: '贤牛',  // 文档标题，左上角显示
    description: '贤牛后台管理文档',
    base: '/xianniu-docs/', // 这里写你的仓库名称
    head: [
        ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `/jyjwebdocs/favicon.ico` }]
    ], //这里配置你的网页头部信息等

    markdown: {
        lineNumbers: true,
        extendMarkdown: md => {
            // 使用更多的 markdown-it 插件!
            md.use(require('markdown-it'))
            md.use(require('markdown-it-footnote'))
        }
    },
    // plugins: ['demo-container'],
    plugins: [
    ],
    // plugins: {
    //     'demo-container': {
    //         component: 'CustomDemoBlock',
    //         locales: [
    //             {
    //                 "lang": "zh-CN",
    //                 "custom-demo-block": {
    //                     "hide-text": "隐藏代码",
    //                     "show-text": "显示代码",
    //                     "copy-text": "复制代码",
    //                     "copy-success": "复制成功"
    //                 }
    //             },
    //         ]
    //     }
    // },
    chainWebpack: (config, isServer) => {
        if (!isServer) {
            config.module
                .rule('scss')
                .test(/\.scss$/)
                .oneOf('normal')
                .use('sass')
                .loader('sass-loader')
                .end()
                .end()
        }
    },
    themeConfig: {

        /**
         * 设置侧边栏最大深度
         * 一般是以单个md文件中的 # ## ### #### 这几个标题文字为锚点自动生成导航
         * **/
        sidebarDepth: 2,
        // 设置侧边栏内容
        sidebar: [
            {
                title: '介绍',
                path: '/',

            },
            {
                title: '脚手架',
                path: '/cli/',
            },
            {
                title: '组件',
                path: '/comps/',
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    { title: 'xn-table', path: '/comps/table' }
                ]
            },

        ]
    }
}