const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
const path = require('path')
// const WorkboxWebpackPlugin = require('workbox-webpack-plugin')

module.exports = {
  output: {
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      favicon: 'src/assets/logo.png'
    }),
    new WebpackPwaManifestPlugin({
      name: 'Dizce',
      shortname: 'Dizce',
      description: 'Dizce is a company that allows you to get access to content and markets of languages that you do not have mastered',
      orientation: 'portrait',
      display: 'standalone',
      scope: '/',
      theme_color: '#456BD9',
      background_color: '#fff',
      start_url: '/',
      icons: [
        {
          src: path.resolve('src/assets/logo.png'),
          sizes: [96, 128, 192, 256, 384, 512]
        }
      ]
    })
    // new WorkboxWebpackPlugin.GenerateSW(
    //   {
    //     cleanupOutdatedCaches: true
    //   }
    // )
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node-modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: false
            }
          }
        ]
      }
    ]
  }
}
