var zombie = require('zombie')
, should = require('should')
, util = require('./util')
, fs = require('fs')
, path = require('path');


var World = function() {
    this.browser = new zombie.Browser({runScripts:true,debug:false}); 
    this.helpers = { browser: this.browser};

    load(path.join(__dirname, './helpers'),this.helpers);
};

function load(helperPath, dest) {
       var files = fs.readdirSync(helperPath),
               modulePath;

       for (var i =0; i < files.length; i++) {
            if(files[i].match(/\.swp$/)) {
                continue;
            }
               modulePath = path.join(helperPath, files[i]);
               util.mixin(require(modulePath), dest);;
       }
}
exports.World = World;
