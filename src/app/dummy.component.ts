import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent {  
  
  @Input()
  inputValue: string;
  
  @Output() 
  notify: EventEmitter<string> = new EventEmitter<string>(); 

  onConfirm() {
    this.notify.emit(this.inputValue);
  }
  
}
