import { UsermapPage } from './app.po';

describe('usermap App', () => {
  let page: UsermapPage;

  beforeEach(() => {
    page = new UsermapPage();
  });

  it('should display application name on the top navbar', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('UserMap Application');
  });
});
