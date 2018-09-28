module.exports = {
  mode: 'production',
  bail: true,
  entry: './index.js',
  output: {
    filename: 'webpacked.js'
  },
  module: {
    strictExportPresence: false,
    rules: [
      {
        loader: require.resolve('file-loader'),
        exclude: [/\.(js|jsx)$/],
        options: {
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
    ],
  }
};
