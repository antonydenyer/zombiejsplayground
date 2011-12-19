Feature: sign in
	In order to access my account details and music
	As a 7digital end consumer
	I want to be able to sign in to my account

	Background: 
		Given I am not signed in

	Scenario: Sign in is possible with valid details
		Given I am signed in
		Then I should see the text "Your Account" in the status bar

	Scenario: Sign in is not possible when user does not supply an email address
		Given I Sign In Without specifying an email
		Then I should not be signed in
		And I should see the validation message "Please enter a valid email address"

	Scenario: Sign in is not possible when user does not supply a password
		Given I Sign In Without specifying a password
		Then I should not be signed in
		And I should see the validation message "Please enter a password"

	Scenario: Remember me is checked by default
		When I am on the sign in page
		Then "Keep my signed in" should be checked

	Scenario: Sign in is not possible when sign in details are incorrect
		When I sign in with invalid credentials
		Then I should see an error message stating "Incorrect email or password"

	Scenario: Sign in returns user to previous page following sign in 
		Given I visit the release page for "The-Ecstatic" by "Mos-Def"
		And I am signed in
		Then I should be returned to the release page for "The-Ecstatic" by "Mos-Def"



