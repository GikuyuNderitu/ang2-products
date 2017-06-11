import { Ang2ProductsPage } from './app.po';

describe('ang2-products App', () => {
  let page: Ang2ProductsPage;

  beforeEach(() => {
    page = new Ang2ProductsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
