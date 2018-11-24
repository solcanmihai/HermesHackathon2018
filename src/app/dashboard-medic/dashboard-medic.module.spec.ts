import { DashboardMedicModule } from './dashboard-medic.module';

describe('DashboardMedicModule', () => {
  let dashboardMedicModule: DashboardMedicModule;

  beforeEach(() => {
    dashboardMedicModule = new DashboardMedicModule();
  });

  it('should create an instance', () => {
    expect(dashboardMedicModule).toBeTruthy();
  });
});
