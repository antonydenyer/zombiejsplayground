var zombie = require("zombie");
var assert = require("assert");

// Load the page from localhost
var browser = new zombie.Browser({ debug: false });

browser.visit("http://www.7digital.systest/b/signin", function (e, browser, status) {
        // Fill email, password and submit form
        browser.
        fill("#email", "antony.denyer@7digital.com").
        fill("#password", "7digital").
        pressButton("#signin", function(e, browser, status) {
            // Form submitted, new page loaded.
            //assert.equal(status, 200);
            assert.equal(browser.text("title"), "7digital.com - Home of MP3 | High quality MP3 downloads | 7digital United Kingdom");
            });
        browser.dump();

        });
