const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;
const { assert } = require('assertthat');
const util = require('util');
const fsp = require('fs').promises;
const {By} = require('webdriver');


When('I click on tag list with selector {kraken-string}', async function (link) {
    let element = await this.driver.$(link);
    return await element.click();
});


When('I expect to enter to Ghost tags section {kraken-string}', async function (url) {
    let element = await this.driver.getUrl()
    assert.that(element).is.equalTo(url);
});

When('I enter internal tag Name {kraken-string} into selector {kraken-string}', async function (name, field) {
    let element = await this.driver.$(field);
    return await element.setValue('#'+name);
});

When('I push Save tag button with selector {kraken-string}', async function (button) {
    let element = await this.driver.$(button);
    return await element.click();
});


Then('I looking for created internal tag {kraken-string} on tags list', async function (tag) {
    let tag_aux =tag.toLowerCase();
    let tag2= `a[href='#/tags/hash-${tag_aux}/']`;
    let element = await this.driver.$(tag2);
    return element;
});

Then('I go to Ghost internal Tags section {kraken-string}', async function (url) {
    // Write code here that turns the phrase above into concrete actions
    let element = await this.driver.url(url+"?type=internal");
    return element;
});
