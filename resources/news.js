function News(){

    
    this.get = function(){
        //todo: add hot news view here!
        return { 
            jade :'h1 Hello #{name}',
            data: { name: 'fury' }
        };
    };
    
    this.getID = function(id){
        return createNews(id);
    };
    
    
    var createNews = function(id){
        return { id : id,
                 headline : 'testHeadline' 
                };
    };
    
}

News.prototype = require('./prototype.js');

module.exports = new News();

