const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.plugin('copy').tap((entries) => {
      entries[0].patterns.push({
        from: path.resolve(__dirname, 'src/assets/img'),
        to: path.resolve(__dirname, 'dist/img'),
        toType: 'dir',
        noErrorOnMissing: true,
        globOptions: { ignore: ['.DS_Store'] },
      })

      return entries
    })


  },
})
