var browserSync = require('browser-sync').create();

browserSync.init({
    server: 'test/fixtures',
    plugins: [require('./')]
});
