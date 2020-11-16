const { Given, When, Then, And } = require('cucumber');
const chai = require('chai');

Given(/^I'm on the Automation Practise landing page$/, function () {
    //browser.url('http://automationpractice.com/index.php');
   browser.url('http://automationpractice.com/index.php?controller=search');
    browser.maximizeWindow();

    
});

When(/^I click \"([^\"]*)\" link$/, function (link) {
   
    const btn = $(`//a[contains(text(),'${link}')]`)
    btn.click();
  });

  When(/^I enter the email address \"([^\"]*)\"$/, function (emailid) {

   browser.pause(6000);
    const emailid_create = $("//input[@id='email_create']");
    emailid_create.setValue(emailid);
   

  });

  When(/^I click \"([^\"]*)\" button$/, function (value) {
   // const button =   $("//button[contains(., 'Create an account')]");
    const button =   $(`//button[contains(., '${value}')]`);
    button.click();
    browser.pause(6000);

  });

  When(/^I select \"([^\"]*)\" title$/, function (mr) {
    const gender = $("//input[@id='id_gender1']");
    gender.click();

  });

  When(/^I enter first name \"([^\"]*)\"$/, function (name) {
   const firstname = $('#customer_firstname');
   firstname.setValue(name);
  });

  When(/^I enter last name \"([^\"]*)\"$/, function (name) {
    const lastname = $('#customer_lastname');
    lastname.setValue(name);
   
   });

   When(/^I enter emailid \"([^\"]*)\"$/, function (name) {
    const emailid = $('#email');
    emailid.setValue(name);
   });

   When(/^I enter password \"([^\"]*)\"$/, function (name) {
    const password = $('#passwd');
    password.setValue(name);
  });

  When(/^I enter date \"([^\"]*)\"$/, function (date) {
   const datebox = $('#days');
   datebox.selectByAttribute('value',date);
    //browser.pause(6000)

  });

  When(/^I enter month \"([^\"]*)\"$/, function (date) {
    const datebox = $('#months');
    datebox.selectByAttribute('value','3');

   // datebox.selectByVisibleText(date);
 
   });

   When(/^I enter year \"([^\"]*)\"$/, function (date) {
    const datebox = $('#years');
    datebox.selectByAttribute('value',date);
 
   });

   
   When(/^I enter address \"([^\"]*)\"$/, function (value) {
    const address = $('#address1');
    address.setValue(value);
 
   });

   When(/^I enter city \"([^\"]*)\"$/, function (value) {
    const city = $('#city');
    city.setValue(value);
   });

   When(/^I enter state \"([^\"]*)\"$/, function (value) {
        const statebox = $('#id_state');
        statebox.selectByAttribute('value','3');
     
       });

       When(/^I enter postcode \"([^\"]*)\"$/, function (value) {
        const postcode = $('#postcode');
        postcode.setValue(value);
       });

       When(/^I enter country \"([^\"]*)\"$/, function (value) {
        const countrybox = $('#id_country');
        countrybox.selectByAttribute('value','21');
      });
      When(/^I enter mobilephone \"([^\"]*)\"$/, function (value) {
        const mobilephone = $('#phone_mobile');
        mobilephone.setValue(value);
      });

     Then(/^I Validate \"([^\"]*)\" on the landing screen$/, function (value) {
       // const name = $("//a[@title='View my customer account']/span").getText();
        const name = $(".account>span").getText();
        

        chai.assert.equal(value,name);
      });

      When(/^I search a product \"([^\"]*)\"$/, function (value) {
        const searchbox = $('#search_query_top');
        searchbox.setValue(value);
      });

      When(/^I move to \"([^\"]*)\" button$/, function (value) {
        const elem = $(`//span[contains(., '${value}')]`);
        elem.scrollIntoView();
        elem.moveTo();
      // $("//span[contains(., 'In stock')]").moveTo();
       browser.pause(6000)

      });


      When(/^I click the \"([^\"]*)\" button$/, function (value) {
        const button =   $(`//span[contains(., '${value}')]`);
        button.click();
        browser.pause(6000);
      });

      When(/^I navigate by clicking \"([^\"]*)\" button$/, function (valule) {
        const button =   $(".cart_navigation > .button-medium");
        button.click();
    });

      When(/^I agree TC$/, function () {
        browser.pause(4000);
        const checkbox = $("//input[@name='cgv']");
      
        checkbox.click();
       
      });

  Then(/^I Validate \"([^\"]*)\" on the payments page$/, function (value) {
    const name = $(".cart_description>.product-name>a").getText();
        

    chai.assert.equal(value,name);
      });

     
    
    