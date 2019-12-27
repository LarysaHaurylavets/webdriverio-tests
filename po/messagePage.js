'use strict';

class MessagePage {

  get message() {return $('.composer.animate.composer-container')}
  get subjectField() {return $('//input[@ng-model="message.Subject"]')}
  get recipientField() {return $('//form[@data-emails="message.ToList"]//input')}
  get sendButton() {return $('.btnSendMessage-btn-action')}
  get closeButton() {return $('.composer-action-close')}

  clickSendButton() {
    this.sendButton.click();
  }

  clickCloseButton() {
    this.closeButton.click();
  }

}

module.exports = MessagePage;