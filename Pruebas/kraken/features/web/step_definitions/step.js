const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;
const { assert } = require('assertthat');
const util = require('util');
const fsp = require('fs').promises;
const fs2 = require('fs');
const {By} = require('webdriver');

function takeScreenshot(driver, path, file){
        validate_dir(path);
        let file2=path + "/"+ file+".jpg";
        return driver.takeScreenshot().then(image => fsp.writeFile(file2, image, 'base64'));
    }

function validate_dir(dir)
{
        if (fs2.existsSync(dir)) {
            //this.driver.writeSignal('Directory exists!');
       
    } else {
        //this.driver.writeSignal('Directory does not exist!');
        create_dir(dir);
    }
 }
    
function create_dir(dir2)
{
        fs2.mkdirSync(dir2, { recursive: true });
}

    
Given('I go to {kraken-string}', async function (url) {
           // Write code here that turns the phrase above into concrete actions
            let element = await this.driver.url(url);
          return element;
         });


//When('I enter email {kraken-string}', async function (email) {
When('I enter email {kraken-string} into selector {kraken-string}', async function (email, field) {
	// Write code here that turns the phrase above into concrete actions
	  let element = await this.driver.$(field);
          return await element.setValue(email);
         });

When('I enter password {kraken-string} into selector {kraken-string}', async function (pass, field) {
	// Write code here that turns the phrase above into concrete actions
	  let element = await this.driver.$(field);
          return await element.setValue(pass);
         });

 When('I push login button with selector {kraken-string}', async function (button) {
           // Write code here that turns the phrase above into concrete actions
           let element = await this.driver.$(button);
            return await element.click();
         });


 When('I take screenshot of step {kraken-string} and scenario {kraken-string} and feature {kraken-string} and version {kraken-string}', async function (step, scenario, feature, version) {
           let full_path = "./reports/screenshots/" + version + "/"+feature+"/"+scenario;
           let filename= "Paso_" + step;
           takeScreenshot(this.driver, full_path, filename);
         });


When ('I expect to enter to Ghost home page {kraken-string}', async function (url) {
           // Write code here that turns the phrase above into concrete actions
        let element = await this.driver.getUrl()
        assert.that(element).is.equalTo(url);
});


When('I click on Tags list with selector {kraken-string}', async function (link) {
           // Write code here that turns the phrase above into concrete actions
            let element = await this.driver.$(link);
        //let element = await this.driver.$("a[href='#/tags/']");
       // let element = await this.driver.$("a[contains(text(),'Tags')]");
            return await element.click();
         });

When('I expect to enter to Ghost Tags section {kraken-string}', async function (url) {
           // Write code here that turns the phrase above into concrete actions
           takeScreenshot(this.driver, 'screenshot.png');
            let element = await this.driver.getUrl()
            assert.that(element).is.equalTo(url);
         });

 When('I click on New Tag with selector {kraken-string}', async function (link) {
           // Write code here that turns the phrase above into concrete actions
            let element = await this.driver.$(link);
            return await element.click();
         });


 When('I enter Tag Name {kraken-string} into selector {kraken-string}', async function (name, field) {
           // Write code here that turns the phrase above into concrete actions
           let element = await this.driver.$(field);
           return await element.setValue(name);
         });

 When('I enter Tag Color {kraken-string} into selector {kraken-string}', async function (color, field) {
           // Write code here that turns the phrase above into concrete actions
           let element = await this.driver.$(field);
           return await element.setValue(color);
         });

 When('I enter Tag Slug {kraken-string} into selector {kraken-string}', async function (slug, field) {
           // Write code here that turns the phrase above into concrete actions
           let element = await this.driver.$(field);
           return await element.setValue(slug);
         });
         
 When('I enter Tag Description {kraken-string} into selector {kraken-string}', async function (description, field) {
           // Write code here that turns the phrase above into concrete actions
           let element = await this.driver.$(field);
           return await element.setValue(description);
         });

When('I push Save button with selector {kraken-string}', async function (button) {
           // Write code here that turns the phrase above into concrete actions
            let element = await this.driver.$(button);
            return await element.click();
         });

Then('I go to Ghost Tags section {kraken-string}', async function (url) {
           // Write code here that turns the phrase above into concrete actions
           let element = await this.driver.url(url);
          return element;
         });
         
Then('I expect to stay in Ghost Tags section {kraken-string}', async function (url) {
           // Write code here that turns the phrase above into concrete actions
            let element = await this.driver.getUrl()
            assert.that(element).is.equalTo(url);
         });


Then('I looking for tag {kraken-string} on tags list', async function (tag) {
           // Write code here that turns the phrase above into concrete actions
           let tag_aux =tag.toLowerCase();
           let tag2= `a[href='#/tags/${tag_aux}/']`;
           let element = await this.driver.$(tag2);
           return element;
            //assert.that(element.href).is.equalTo(tag);
         });
         
When('I do not enter Tag Name', function () {
           // Write code here that turns the phrase above into concrete actions
           return true;
         });


Then('I expect for error {kraken-string} on selector {kraken-string}', async function (string, selector) {
           let elements = await this.driver.$$("p[class='response']");
           let element2 = await elements[1].getText();
           assert.that(element2).is.equalTo(string);
           
           //return element2;
         });

When('I click on Pages list with selector {kraken-string}', async function (link) {
           // Write code here that turns the phrase above into concrete actions
            let element = await this.driver.$(link);
            return await element.click();
         });


When('I expect to enter to Ghost Pages section {kraken-string}', async function (url) {
           // Write code here that turns the phrase above into concrete actions
           //takeScreenshot(this.driver, 'screenshot.png');
            let element = await this.driver.getUrl()
            assert.that(element).is.equalTo(url);
         });
         
When('I click on New Page with selector {kraken-string}', async function (link) {
           // Write code here that turns the phrase above into concrete actions
            let element = await this.driver.$(link);
            return await element.click();
         });
         
 When('I enter Page Title {kraken-string} into selector {kraken-string}', async function (title, field) {
           // Write code here that turns the phrase above into concrete actions
           let element = await this.driver.$(field);
           return await element.setValue(title);
         });
         
 When('I enter Page content {kraken-string} {kraken-string} {kraken-string} into selector {kraken-string}', async function (string1, string2, string3, field) {
           // Write code here that turns the phrase above into concrete actions
           let content = string1 + " " + string2 + " " + string3;
            let element = await this.driver.$(field);
           return await element.setValue(content);
         });

Then('I click on Pages with selector {kraken-string}', async function (link) {
           // Write code here that turns the phrase above into concrete actions
            let element = await this.driver.$(link);
            return await element.click();
         });
         
Then('I expect to stay in Ghost Pages section {kraken-string}', async function (url) {
           // Write code here that turns the phrase above into concrete actions
            let element = await this.driver.getUrl()
            assert.that(element).is.equalTo(url);
         });
         
Then('I looking for page {kraken-string} on pages list into selectors {kraken-string}', async function (page, selector ) {
           let elements = await this.driver.$$(selector);
            for(var i=0;i < elements.length; i++)
            {
                let element2 = await elements[i].getText();
                //await this.driver.writeSignal(page);
                if(element2.toString().trim() === page.toString().trim())
                    assert.that(element2).is.equalTo(page)
            }
         });
         
When('I click on Publish with selector {kraken-string}', async function (link) {
           // Write code here that turns the phrase above into concrete actions
            let element = await this.driver.$(link);
            return await element.click();
         });
         
Then('I go to published page in {kraken-string} {kraken-string}', async function (url, page) {
           // Write code here that turns the phrase above into concrete actions
           let url2 = url + ""+  page.toLowerCase() + "/";
            let element = await this.driver.url(url2);
          return element;
         });
         
Then('I expect to stay on published page {kraken-string} {kraken-string}', async function (url, page) {
           // Write code here that turns the phrase above into concrete actions
           let url2 = url + "" +  page.toLowerCase() + "/";
            let element = await this.driver.getUrl();
            assert.that(element).is.equalTo(url2);
         });
         
 Then('I push Publish button with selector {kraken-string}', async function (button) {
           // Write code here that turns the phrase above into concrete actions
           let element = await this.driver.$(button);
            return await element.click();
         });
         
         
When ('I expect to enter to Create your Account screen {kraken-string}', async function (url) {
           // Write code here that turns the phrase above into concrete actions
        let element = await this.driver.getUrl()
        assert.that(element).is.equalTo(url);
});


When('I enter Site title {kraken-string} into selector {kraken-string}', async function (title, field) {
	// Write code here that turns the phrase above into concrete actions
	  let element = await this.driver.$(field);
          return await element.setValue(title);
         });

When('I enter Full Name {kraken-string} into selector {kraken-string}', async function (name, field) {
	// Write code here that turns the phrase above into concrete actions
	  let element = await this.driver.$(field);
          return await element.setValue(name);
         });

When('I click on Create your Account with selector {kraken-string}', async function (link) {
           // Write code here that turns the phrase above into concrete actions
            let element = await this.driver.$(link);
            return await element.click();
         });

Then('I click on Skip option with selector {kraken-string}', async function (link) {
           // Write code here that turns the phrase above into concrete actions
            let element = await this.driver.$(link);
            return await element.click();
         });
         
         

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
