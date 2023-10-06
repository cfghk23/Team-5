import { Test, TestingModule } from '@nestjs/testing';
import { TimeDepositController } from './time-deposit.controller';

describe('TimeDepositController', () => {
  let controller: TimeDepositController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TimeDepositController],
    }).compile();

    controller = module.get<TimeDepositController>(TimeDepositController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
