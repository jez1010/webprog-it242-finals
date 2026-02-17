import { Test, TestingModule } from '@nestjs/testing';
import { AppmoduleService } from './appmodule.service';

describe('AppmoduleService', () => {
  let service: AppmoduleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppmoduleService],
    }).compile();

    service = module.get<AppmoduleService>(AppmoduleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
