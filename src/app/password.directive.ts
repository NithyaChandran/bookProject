import { Directive , Input} from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
@Directive({
  selector: '[appPassword]'
})
export class PasswordDirective {
  password!: string
  @Input() set appPassword(confirmPass: string) {
    this.password = confirmPass;
  }
  
  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    return this.createMatchPasswordValidator()(control);
  }

  createMatchPasswordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const confirmValue = control.value;
      return confirmValue !== this.password ? { match: true } : null;
    }
  }

}
