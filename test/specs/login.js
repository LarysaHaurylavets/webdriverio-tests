'use strict';

const loginPage = require('../../po/loginPage'),
  headerPage = require('../../po/main/header'),  
  creds = require('../../data/creds');
  

let login = new loginPage(),
  header = new headerPage();

describe('Login into accout', () => {
  it('should allow access with correct creds and log out was performed succefully', () => {   
    login.openLoginPage()  
    login.userName.setValue(creds.user)
    login.password.setValue(creds.password)
    login.submitClick()    
    header.userAccountIcon.waitForDisplayed(5000);
    browser.getUrl().should.be.equal('https://mail.protonmail.com/inbox')   
    header.logout()
    browser.getUrl().should.be.equal('https://mail.protonmail.com/login') 
  })
})