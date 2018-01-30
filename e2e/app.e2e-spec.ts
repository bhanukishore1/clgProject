import { ClgProjectPage } from './app.po';

describe('clg-project App', () => {
  let page: ClgProjectPage;

  beforeEach(() => {
    page = new ClgProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
