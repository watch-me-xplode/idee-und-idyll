import { IdeeUndIdyllPage } from './app.po';

describe('idee-und-idyll App', function() {
  let page: IdeeUndIdyllPage;

  beforeEach(() => {
    page = new IdeeUndIdyllPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
