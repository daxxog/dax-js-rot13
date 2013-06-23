/* DaxJsRot13
 * daXXog's javascript rot13
 * (c) 2013 David (daXXog) Volm ><> + + + <><
 * Released under Apache License, Version 2.0:
 * http://www.apache.org/licenses/LICENSE-2.0.html  
 */

/* UMD LOADER: https://github.com/umdjs/umd/blob/master/returnExports.js */
(function (root, factory) {
    if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(factory);
    } else {
        // Browser globals (root is window)
        root.rot13 = factory();
  }
}(this, function() {
    return (function() {
        var header = '(function(s){return (s=(s)?s:this).split("").map(function(c){switch(c){',
            footer = 'default: return c;}}).join("");});',
            fx = header,
            f, b, r;
        
        b = function(i, u) { //build case function
            return 'case "'+String.fromCharCode(i)+'":return "'+String.fromCharCode(u)+'";';
        };
        
        r = function(s) { //rotate function
            var cat = '',
                e = s + 26;
            
            for(var i = s; i<(e); i++) {
                var i13 = i + 13,
                    u = i13;
                
                if(i13 >= e) {
                    u = i - 13;
                }
                
                cat += b(i, u);
            }
            
            return cat;
        };
        
        fx += r(65); //ACII uppercase
        fx += r(97); //ACII lowercase
        fx += footer; //add footer boilerplate
        
        f = eval(fx); //save the function
        
        return f; //return the function
    })();
}));
