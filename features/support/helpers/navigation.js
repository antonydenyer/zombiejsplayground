var util = require('util');
var should = require('should');

module.exports = {
    signIn: function signIn(username, password, callback) {
        this.browser.clickLink("#signin-link", function(e, browser,status) {
                browser
                    .fill("#email",username)
                    .fill("#password",password) 
                    .pressButton("#signin", callback);
            });
    },
    visitRelease : function visitRelease(release,artist,callback){   
        this.visit('/artist/' + artist + '/release/' + release,callback);
    },
    page : function(path){
        return "http://www.7digital.com/b/" + path;
    },
    visit : function(url, callback) {
        if(url.indexOf("http") == -1){
            this.browser.visit(this.page(url), callback);
        }
        else{
            this.browser.visit(url, callback);
        }
    },
    urlShouldContain: function(text) {
		this.browser.location.pathname.should.include(text);
    }

};
