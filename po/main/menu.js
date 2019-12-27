'use strict';

const format = require('string-format');

class Menu {
  constructor() {   
    this.MENU_ITEM = '//a[@title="{0}"]';
  }

  get composeButton() {return $('.sidebar-btn-compose')};

  clickMenuItem(itemName) {
    const element = $(format(this.MENU_ITEM, itemName));
    return element.click();
  }

  createNewEmail() {
    this.composeButton.click();
  }
}

module.exports = Menu;