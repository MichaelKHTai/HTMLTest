import require;
var moduleName = 'module';
module1 = require([moduleName], function(fooModule){
    // do something with fooModule
})
console.log(module1());  // prints: "this is module1! and this is module2!"