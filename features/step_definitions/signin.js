var signInSteps = function() {
	this.World = require("../support/world.js").World; // overwrite default World constructor

	this.Given(/^I am not signed in$/, function(callback) {
		this.helpers.visit('signout', callback);
	});

	this.Given(/^I am signed in$/, function(callback) {
		this.helpers.signIn("commercial-devteam+test@7digital.com", "test", callback);
	});

	this.Then(/^I should see the text "([^"]*)" in the status bar$/, function(text, callback) {
		this.browser.text("#user-navigation").should.include(text);
		callback();
	});

	this.Then(/^I should not be signed in$/, function(callback) {
		this.browser.text("#user-navigation").should.not.include("Your Account");
		callback();
	});

	this.Then(/^I should see the validation message "([^"]*)"$/, function(message, callback) {
		this.browser.text(".validation-msg").should.include(message);
		callback();
	});

	this.Given(/^I Sign In Without specifying an email$/, function(callback) {
		this.helpers.signIn("", "test", callback);
	});

	this.Given(/^I Sign In Without specifying a password$/, function(callback) {
		this.helpers.signIn("valid@email.com", "", callback);
	});

	this.When(/^I am on the sign in page$/, function(callback) {
		this.helpers.visit('signin', callback);
	});

	this.Then(/^"([^"]*)" should be checked$/, function(text, callback) {
		var checkbox = this.browser.query(".checkbox");
		checkbox.value.should.equal('true');
		callback();
	});

	this.When(/^I sign in with invalid credentials$/, function(callback) {
		this.helpers.signIn("invalid@email.com", "test", callback);
	});

	this.Then(/^I should see an error message stating "([^"]*)"$/, function(message, callback) {
		this.helpers.browser.text('.error').should.include(message);
		callback();
	});

	this.Given(/^I visit the release page for "([^"]*)" by "([^"]*)"$/, function(release, artist, callback) {
		this.helpers.visitRelease(release, artist, callback);
	});

	this.Then(/^I should be returned to the release page for "([^"]*)" by "([^"]*)"$/, function(release, artist, callback) {
        this.helpers.urlShouldContain(release);
        this.helpers.urlShouldContain(artist);
		callback();
	});

};

module.exports = signInSteps;

