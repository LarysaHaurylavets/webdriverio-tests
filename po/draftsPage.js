'use strict';

class DraftsPage {
  constructor() {
    this.url = '/drafts';
  }

  get conversations() {return $('[ng-repeat="conversation in conversations track by conversation.ID"]')}

  openConversation(){
    this.conversations.click();
  }
}

module.exports = DraftsPage;