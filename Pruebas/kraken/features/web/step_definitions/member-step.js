const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;
const { assert } = require('assertthat');
const util = require('util');
const fsp = require('fs').promises;
const {By} = require('webdriver');


When('I click on member list with selector {kraken-string}', async function (link) {
    let element = await this.driver.$(link);
    return await element.click();
});

When('I click on New Member with selector {string}', async function (link) {
    let element = await this.driver.$(link);
    return await element.click();
});

When('I expect to enter to Ghost Members section {kraken-string}', async function (url) {
    let element = await this.driver.getUrl()
    assert.that(element).is.equalTo(url);
});

When('I enter member Name {kraken-string} into selector {kraken-string}', async function (name, field) {
    let element = await this.driver.$(field);
    return await element.setValue(name);
});

When('I enter member email {kraken-string} from provider {kraken-string} into selector {kraken-string}', async function (email, provider,  field) {
    let element = await this.driver.$(field);
    return await element.setValue(email+provider);
});

When('I enter member note {kraken-string} into selector {kraken-string}', async function (note, field) {
    let element = await this.driver.$(field);
    return await element.setValue(note);
});

When('I push Save member button with selector {kraken-string}', async function (button) {
    let element = await this.driver.$(button);
    return await element.click();
});

Then('I go to Ghost Members section {kraken-string}', async function (url) {
    let element = await this.driver.url(url);
    return element;
});

Then('I validate the last created member {kraken-string}', async function (link) {
    //let element = await this.driver.$(link);
    //return await element.click();
    return 'Pending'
});

Then('I looking for error {kraken-string} on selector {kraken-string}', async function (errorMessage, selector) {
    let element = await this.driver.$(selector);
    let element2 = await element.getText();
    assert.that(element2).is.equalTo(errorMessage);
    //return element2;
});

Then('I expect to be in the new member section yet {kraken-string}', async function (url) {
    let element = await this.driver.getUrl()
    assert.that(element).is.equalTo(url);
});

When('I enter member Name {kraken-string} 50 times into selector {kraken-string}', async function (name, field) {
    let element = await this.driver.$(field);
    return await element.setValue(name.repeat(50));    
});

Then('I looking for last created member on members list', async function () {
    // Write code here that turns the phrase above into concrete actions
    
    let element = await this.driver.$("/html/body/div[2]/div/main/section/section/div/table/tbody/tr[1]/a[1]/div/div/p");
    return await element.click();
});

When('I push delete member button with selector {kraken-string}', async function (button) {
    let element = await this.driver.$(button);
    return await element.click();
});


When('I push setting member button with selector {kraken-string}', async function (button) {
    let element = await this.driver.$(button);
    return await element.click();
    //return 'Pending'
});

When('I confirm delete member operation on button with selector {kraken-string}', async function (button) {
    let element = await this.driver.$(button);
    return await element.click();
    //return 'Pending'
});

When('I cancel delete member operation on button with selector {kraken-string}', async function (button) {
    let element = await this.driver.$(button);
    return await element.click();
    //return 'Pending'
});

When('I expect the member name {kraken-string} is loaded into selector {kraken-string}', async function (name, field) {
    let element = await this.driver.$(field);
    let element2 = await element.getValue();
    assert.that(element2).is.equalTo(name);
});


When('I filter by member on member list section using email {kraken-string} and provider {kraken-string} into selector {kraken-string}', async function (name, provider,  field) {
    let element = await this.driver.$(field);
    return await element.setValue(name+provider);   
});






