import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FakeService } from './fake.service';
import { MessageService } from './message.service';

@Component({
  selector: 'dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css'],
  providers: [ FakeService ]
})
export class DummyComponent {  
  
  @Input()
  inputValue: string;
  
  @Output() 
  notify: EventEmitter<string> = new EventEmitter<string>(); 

  constructor(private fakeService: FakeService, private messageService: MessageService) {
  }

  onConfirm() {
    let msg = this.inputValue + ' ' + this.fakeService.tester();
    this.notify.emit(msg);
    this.messageService.sendMessage(`messaggio inviato dal componente: ${msg}`);
  }
  
}
