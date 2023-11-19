import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'password-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})

export class InputPasswordComponent {
  @Input() inputData: any;
  @Input() placeholder: string;
  @Output() onKeyUp = new EventEmitter<string>();

  constructor() {
    this.inputData = '';
    this.placeholder = 'Enter your password';
  }

  emitOnKeyUpEvent(event: Event){
    this.onKeyUp.emit((event.target as HTMLInputElement).value);
  }
}
