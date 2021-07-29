import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent {
  currentDate = new Date();
  @Input() prompt = '';
  @Output() onMessage = new EventEmitter();
  inputMessage = '';

  onMessageChanged() {
    this.onMessage.emit(this.inputMessage);
  }
}
