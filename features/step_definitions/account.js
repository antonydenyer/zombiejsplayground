var accountSteps = function() {
	this.World = require("../support/world.js").World; // overwrite default World constructor
	this.Given(/^I visit the account page$/, function(callback) {
		this.helpers.visit('account', callback);
	});

	this.Then(/^I should get to the account page$/, function(callback) {
		this.helpers.urlShouldContain('account');
		callback();
	});

	this.When(/^I am signed in$/, function(callback) {
		this.helpers.signIn("commercial-devteam+test@7digital.com", "test", callback);
	});

};

module.exports = accountSteps;

