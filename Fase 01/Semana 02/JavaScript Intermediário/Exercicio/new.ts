var p = 5; 
function func() {

    var p = 9;
    
    
    function decl() { console.log(p);
    
    }
    
    var expr = function() { console.log(p);
    
    };
    
    var cons = new Function('\tconsole.log(p);');
    
    
    decl();
    
    expr();
    
    cons();
    
}
    
    func();