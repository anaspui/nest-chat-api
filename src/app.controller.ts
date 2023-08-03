import { Body, Controller, Post, Get, Options} from '@nestjs/common';
import { ChatService } from './chat.service';

@Controller('api')
export class AppController {
  constructor(private chatService: ChatService) {}

  @Post('messages')
  async messages(@Body() username: string, @Body() message: string) {
    this.chatService.trigger('chat', 'message', { username, message });
    return [];
  }
   @Options('messages')
  async Omessages(@Body() username: string, @Body() message: string) {
    this.chatService.trigger('chat', 'message', { username, message });
    return [];
  }
  @Get('hello')
  hello(){
    return 'Hello World!';
  }
}
