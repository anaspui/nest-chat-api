import { Injectable } from '@nestjs/common';
import * as Pusher from 'pusher';
@Injectable()
export class ChatService {
  pusher: Pusher;
  constructor() {
    this.pusher = new Pusher({
      appId: '1645274',
      key: '61181dbaa3d4a796d582',
      secret: '05c34f1705187b294ec2',
      cluster: 'ap1',
      useTLS: true,
    });
  }
  async trigger(channel: string, event: string, data: any) {
    await this.pusher.trigger(channel, event, data);
  }
}
