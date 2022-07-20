import { Component } from '@angular/core';
import { ChatService } from './services/chat.service';
import { WebsocketService } from './services/websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'app';

  constructor(
    public wsService: WebsocketService
  ) { }
    /*
  ngOnInit() {
    this.chatService.sendMessage('Hola desde Angular');
  }
  */
}