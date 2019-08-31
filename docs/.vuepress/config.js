const path = require('path')
module.exports = {
    base: '/augmi-ui/',
    title: 'Augmi UI',
    description: '一个好用的UI框架',
    themeConfig: {
        nav:[
            {text:'主页',link:'/'},
            {text:'Star',link:'https://github.com/angmieee/augmi-ui'},
            {text:'Github',link:'https://github.com/angmieee'}
        ],
        sidebar: [
            {
                title: '入门',
                collapsable: false,
                children: [
                    '/install/',
                    '/get-started/',
                ]
            },
            {
                title: '组件',
                collapsable: false,
                children: [
                    '/components/button',
                    '/components/input',
                    '/components/grid',
                    '/components/layout',
                    '/components/toast',
                    '/components/popover',
                    '/components/tabs',
                    '/components/collapse'

                ]
            },

        ]
    },
    scss:{
        includePaths: [path.join(__dirname, '../../styles')]
    }


}