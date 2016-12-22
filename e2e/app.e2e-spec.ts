import { AngularReviewDbPage } from './app.po';

describe('angular-review-db App', function() {
  let page: AngularReviewDbPage;

  beforeEach(() => {
    page = new AngularReviewDbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
