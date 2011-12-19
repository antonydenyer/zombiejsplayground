Feature: Change Password on Account Page (SDDOTCOM - 340)
	In order to manage my account
	As a 7digital end consumer on the new Dotcom
	I want to have access to an account page with funky stuff on it

    Background: 
		Given I am signed in

    Scenario: Account page is available to signed in users
		Given I visit the account page
		Then I should get to the account page
