const { loaderByName, addBeforeLoader } = require('@craco/craco')

module.exports = {
  overrideWebpackConfig: ({
    webpackConfig, cracoConfig, pluginOptions, context: { env, paths } 
  }) => {

    let loader = 'base64-inline-loader'

    if (pluginOptions.limit) {
      loader = `${loader}?limit=${pluginOptions.limit}`
    }

    const base64Loader = {
      test: pluginOptions.test,
      use: loader
    }
    

    addBeforeLoader(webpackConfig, loaderByName('file-loader'), base64Loader)

    return webpackConfig
  }
}