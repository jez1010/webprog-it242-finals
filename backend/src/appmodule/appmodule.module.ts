import { Module } from '@nestjs/common';
import { AppmoduleController } from './appmodule.controller';
import { AppmoduleService } from './appmodule.service';

@Module({
  controllers: [AppmoduleController],
  providers: [AppmoduleService]
})
export class AppmoduleModule {}
