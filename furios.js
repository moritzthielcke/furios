var furios = function(port){
    var express = require('express');
    var server =  express.createServer();
    var jade = require('jade');


    this.addView = function(path, template, fn){
        console.log('bind to this path'+path);
        server.get(path, function(req, res){
            console.log('wtf?');
            /*if(fn)
                res.render(template, fn());
            else
                res.render(template);*/
        });        
        return this;
    };


    this.bindResource = function(path, srcFile){
        delete require.cache['./resources/'+srcFile];    
        var controller = require('./resources/'+srcFile);
        if(controller.get){
            console.log('GET /REST'+path+' => resources/'+srcFile+'.get()');
            server.get('/REST'+path, function(req,res){
                    controller = Object.create(controller); //is this required??:)
                    controller.inject(req,res);
                    var getResult = controller.get();
                    /*if(getResult.jade && getResult.data){
                        var render = jade.compile(getResult.jade); //@todo cache?
                        res.send(render(getResult.data));
                    }
                    else{*/
                    res.send(getResult); //just return that
                    //}
            });
        }
        return this;
    };
    
    this.run = function(){
        server.configure(function(){
            server.use(express.static(__dirname + '/public'));      
        });
        server.listen(port);
        console.log('server started');
    };
};

var myViewController = function(){
    return { hello : 'world'};
}

new furios(process.env.C9_PORT)
    .bindResource('/hello','helloworld.js')
    .bindResource('/news', 'news.js')
    .addView('/test\\.html', 'test.jade', myViewController)
    .run();
