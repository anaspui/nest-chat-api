import { Body, Controller, Post, Get, Options } from "@nestjs/common";
import { ChatService } from "./chat.service";

@Controller()
export class AppController {
  constructor(private chatService: ChatService) {}
  @Get("")
  hell() {
    return "Hello World!";
  }
  @Post("api/messages")
  async messages(@Body() username: string, @Body() message: string) {
    this.chatService.trigger("chat", "message", { username, message });
    return [];
  }
  @Get("api/hello")
  hello() {
    return "Hello World!";
  }
}
