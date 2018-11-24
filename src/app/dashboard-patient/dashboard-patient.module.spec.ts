import { DashboardPatientModule } from './dashboard-patient.module';

describe('DashboardPatientModule', () => {
  let dashboardPatientModule: DashboardPatientModule;

  beforeEach(() => {
    dashboardPatientModule = new DashboardPatientModule();
  });

  it('should create an instance', () => {
    expect(dashboardPatientModule).toBeTruthy();
  });
});
