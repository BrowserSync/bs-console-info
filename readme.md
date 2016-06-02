## bs-console-info

> Display Access URLS in the console

Useful for quickly seeing the external urls

## Install

```shell
npm i browser-sync bs-console-info
```

## Usage

```js
var browserSync = require('browser-sync').create();

browserSync.init({
    server: 'test/fixtures',
    plugins: ['bs-console-info']
});
```
