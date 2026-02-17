import { Test, TestingModule } from '@nestjs/testing';
import { AppmoduleController } from './appmodule.controller';

describe('AppmoduleController', () => {
  let controller: AppmoduleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppmoduleController],
    }).compile();

    controller = module.get<AppmoduleController>(AppmoduleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
