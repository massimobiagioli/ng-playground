import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FakeService } from './fake.service';

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

  constructor(private fakeService: FakeService) {
  }

  onConfirm() {
    this.notify.emit(this.inputValue + ' ' + this.fakeService.tester());
  }
  
}
