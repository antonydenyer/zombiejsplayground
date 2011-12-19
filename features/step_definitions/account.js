var accountSteps = function() {
	this.World = require("../support/world.js").World; 
	this.Given(/^I visit the account page$/, function(callback) {
		this.helpers.visit('account', callback);
	});

	this.Then(/^I should get to the account page$/, function(callback) {
		this.helpers.urlShouldContain('account');
		callback();
	});

};

module.exports = accountSteps;

