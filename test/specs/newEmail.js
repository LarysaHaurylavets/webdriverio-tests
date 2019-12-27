'use strict';

const loginPage = require('../../po/loginPage'),
  menuPage = require('../../po/main/menu'),
  messagePage = require('../../po/messagePage'),
  draftPage = require('../../po/draftsPage'),
  headerPage = require('../../po/main/header'),
  creds = require('../../data/creds'),
  emails = require('../../data/email');

const login = new loginPage(),
  menu = new menuPage(),
  message = new messagePage(),
  header = new headerPage(),
  drafts = new draftPage();


describe('Create new email', () => {
  it('should new email was saved into draft', () => {
    login.openLoginPage()  
    login.userName.setValue(creds.user)
    login.password.setValue(creds.password)
    login.submitClick() 
    header.userAccountIcon.waitForDisplayed(5000);
    menu.createNewEmail();
    message.message.waitForDisplayed(3000);
    message.recipientField.setValue(emails.email)
    message.subjectField.setValue(emails.subject)
    message.clickCloseButton();
    drafts.conversations.waitForDisplayed(3000)    
  })

  it('should new email was send', () => {
    login.openLoginPage()  
    login.userName.setValue(creds.user)
    login.password.setValue(creds.password)
    login.submitClick() 
    header.userAccountIcon.waitForDisplayed(5000);
    menu.createNewEmail();
    message.message.waitForDisplayed(3000);
    message.recipientField.setValue(emails.email)
    message.subjectField.setValue(emails.subject)
    message.clickCloseButton();
    drafts.conversations.waitForDisplayed(3000) 
    // menu.clickMenuItem('Drafts')    
    // drafts.openConversation();
    // message.message.waitForDisplayed(3000);
    // message.clickSendButton()
    // browser.pause(5000)    
    // menu.clickMenuItem('Sent')    
    
  })
})