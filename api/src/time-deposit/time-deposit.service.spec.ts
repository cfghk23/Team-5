import { Test, TestingModule } from '@nestjs/testing';
import { TimeDepositService } from './time-deposit.service';

describe('TimeDepositService', () => {
  let service: TimeDepositService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TimeDepositService],
    }).compile();

    service = module.get<TimeDepositService>(TimeDepositService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
