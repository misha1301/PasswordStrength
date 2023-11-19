import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css']
})
export class PasswordStrengthComponent {
  password: string = '';
  passwordStrength = '';

  @Output() passwordCheck = new EventEmitter<string>();
  @Output() passwordData = new EventEmitter<string>();

  emitPasswordCheckEvent(pwd: string) {
    this.password = pwd;
    this.passwordStrength = this.getPasswordStrength();

    this.passwordCheck.emit(this.passwordStrength);
    this.passwordData.emit(this.password);
  }

  getPasswordStrength(): string {
    if (this.password.length === 0) {
      return 'none';
    } else if (this.password.length < 8) {
      return 'low';
    } else if (/[a-zA-Z]/.test(this.password) && /[0-9]/.test(this.password) && /[!@#$%^&*(),.?":{}|<>]/.test(this.password)) {
      return 'strong';
    } else if ((/[a-zA-Z]/.test(this.password) && /[0-9]/.test(this.password)) ||
      (/[a-zA-Z]/.test(this.password) && /[!@#$%^&*(),.?":{}|<>]/.test(this.password)) ||
      (/[0-9]/.test(this.password) && /[!@#$%^&*(),.?":{}|<>]/.test(this.password))) {
      return 'medium';
    } else {
      return 'easy';
    }
  }
}
