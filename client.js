require.config({
    paths: {
        module: 'module'
    }
});
require(['module'], function (module1) {
    console.log(module1())
});