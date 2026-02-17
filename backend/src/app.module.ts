import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppmoduleModule } from './appmodule/appmodule.module';

@Module({
  imports: [AppmoduleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
