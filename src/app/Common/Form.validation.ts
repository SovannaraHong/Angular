import { AbstractControl } from '@angular/forms';

export function usernameValidate(control: AbstractControl): { [key: string]: any } | null {
  const forbidden = /admin/.test(control.value);
  return forbidden ? { forbiddenName: control.value } : null;
}
