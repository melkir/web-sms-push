import { WebPushSmsPage } from './app.po';

describe('web-push-sms App', function() {
  let page: WebPushSmsPage;

  beforeEach(() => {
    page = new WebPushSmsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
