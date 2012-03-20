function helloWorld(){

    this.get = function(){
        return { hello: 'world' };
    };

}

helloWorld.prototype = require('./prototype.js');  

module.exports = new helloWorld();

