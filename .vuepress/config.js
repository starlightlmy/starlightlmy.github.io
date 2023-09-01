module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    themeConfig: {
        series: {
          '/vuepress-theme-reco/': [ 'introduce', 'usage' ]
        },
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' },
        ]
    }
}