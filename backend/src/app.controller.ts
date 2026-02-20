import { Controller, Get, Post, Body} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getAllPosts() {
    return await this.appService.getPostData();
  }

  @Post()
  async sendPost(@Body() body: {name: string; content: string}) {
    return await this.appService.createPost(body.name, body.content);
  }
}