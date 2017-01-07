import { VertxAngularFrontendTrialPage } from './app.po';

describe('vertx-angular-frontend-trial App', function() {
  let page: VertxAngularFrontendTrialPage;

  beforeEach(() => {
    page = new VertxAngularFrontendTrialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
