import { NgAccordionPage } from './app.po';

describe('ng-accordion App', () => {
  let page: NgAccordionPage;

  beforeEach(() => {
    page = new NgAccordionPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
