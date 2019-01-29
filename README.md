# Craco Base64 Inline Loader

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

This is a [craco](https://github.com/sharegate/craco) plugin that makes it easy to use the webpack [base64-inline-loader](https://github.com/monolithed/base64-inline-loader) with [create-react-app](https://facebook.github.io/create-react-app/) version >= 2.

## Installation

```bash
$ yarn add -D craco-base64-inline-loader

# OR

$ npm install craco-base64-inline-loader --save-dev
```

## Basic Usage

`craco-base64-inline-loader` expect a `test` option containing your regex selector.

Here is a simple `craco.config.js` example to convert every font types to base64:

```js
const base64Loader = require('craco-base64-inline-loader')

module.exports = {
  webpack: {
    plugins: [
     { plugin: base64Loader,
       options: {
         test: /\.(ttf|eot|otf|svg|woff(2)?)$/i ,
         limit: 1000 // <-- Optional
         }
     }
  ]
}
```
