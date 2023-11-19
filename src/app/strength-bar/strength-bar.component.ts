import { Component, Input } from '@angular/core';

@Component({
  selector: 'strength-bar',
  templateUrl: './strength-bar.component.html',
  styleUrls: ['./strength-bar.component.css']
})
export class StrengthBarComponent {
 @Input() strongOfPassword: string = "gray";
}
