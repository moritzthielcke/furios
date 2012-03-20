module.exports = {
    req: null,
    res: null,
    
    bind : function(){
        console.log('binding:');
        console.log(this);
    },
    
    inject : function(req,res){
        this.req = req;
        this.res = res;
    }
    
    /*declare forbidden controller functions (interface)
    get : function(){
       console.log('getter not defined');
       console.log(this);
    },
    post : function(){
       //forbidden?
    }*/
};
