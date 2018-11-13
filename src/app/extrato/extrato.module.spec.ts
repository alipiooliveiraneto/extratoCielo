import { ExtratoModule } from './extrato.module';

describe('ExtratoModule', () => {
  let extratoModule: ExtratoModule;

  beforeEach(() => {
    extratoModule = new ExtratoModule();
  });

  it('should create an instance', () => {
    expect(extratoModule).toBeTruthy();
  });
});
