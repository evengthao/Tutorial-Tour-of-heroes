export class TourofheroesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('tourofheroes-app h1')).getText();
  }
}
