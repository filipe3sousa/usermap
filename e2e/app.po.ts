import { browser, by, element } from 'protractor';

export class UsermapPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root a.navbar-brand')).getText();
  }
}
