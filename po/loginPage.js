'use strict';

class LoginPage {

  constructor(){
    this.url = 'https://mail.protonmail.com/login';    
  };

  get userName() {return $('input#username')}
  get password() {return $('input#password')}
  get submitButton() {return $('form#pm_login #login_btn')}

  openLoginPage() {
    browser.url(this.url);
  }

  submitClick() {
    this.submitButton.click();
  }
  
}

module.exports = LoginPage;