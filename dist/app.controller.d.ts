import { ChatService } from './chat.service';
export declare class AppController {
    private chatService;
    constructor(chatService: ChatService);
    messages(username: string, message: string): Promise<any[]>;
}
