import { EquipmentRentalAppPage } from './app.po';

describe('equipment-rental-app App', function() {
  let page: EquipmentRentalAppPage;

  beforeEach(() => {
    page = new EquipmentRentalAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
