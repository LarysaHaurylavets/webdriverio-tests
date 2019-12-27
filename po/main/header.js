'use strict';

class Header {
  // constructor() {
  //   this.userAccoutIcon = $('.navigationUser');
  //   this.logout = $('.navigationUser-logout');
  // }

  get userAccountIcon() {return $('.navigationUser')}
  get logoutButton() {return $('.navigationUser-logout')}

  logout() {    
    this.userAccountIcon.click();
    this.logoutButton.click();
  }
}

module.exports = Header;