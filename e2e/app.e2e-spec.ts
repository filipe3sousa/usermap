import { UsermapPage } from './app.po';

describe('usermap App', () => {
  let page: UsermapPage;

  beforeEach(() => {
    page = new UsermapPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
