var Encore = require('@symfony/webpack-encore');

Encore
    /* Установим путь куда будет осуществляться сборка */
    .setOutputPath('web/build/')
    /* Укажем web путь до каталога web/build */
    .setPublicPath('/build')
    /* Каждый раз перед сборкой будем очищать каталог /build */
    .cleanupOutputBeforeBuild()
    // will output as web/build/app.js
    /* --- Добавим основной JavaScript в сборку --- */
    .addEntry('client-bundle', ['babel-polyfill', 'whatwg-fetch', './client/js/startup/registration.js'])
    // will output as web/build/app.css
    /* Добавим наш главный файл ресурсов в сборку */
    .addStyleEntry('stylesheets/client-bundle', './client/less/main.less')
    /* Включим поддержку less файлов */
    .enableLessLoader()
    .enablePostCssLoader((options) => {
        options.config = {
            path: 'config/postcss.config.js'
        };
    })
    .enableSourceMaps(!Encore.isProduction());

// export the final configuration
module.exports = Encore.getWebpackConfig();

// compile
//  ./node_modules/.bin/encore dev
// watch diffs
//  ./node_modules/.bin/encore dev --watch
// compile production
//  ./node_modules/.bin/encore production