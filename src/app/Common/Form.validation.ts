import { ValueEqualityFn } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';

// export function usernameValidate(control: AbstractControl): { [key: string]: any } | null {
//   const forbidden = /admin/.test(control.value);
//   return forbidden ? { forbiddenName: control.value } : null;
// }
export function usernameValidate(pattern: RegExp): ValidatorFn {
  const validator: ValidatorFn = (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.value) return null;
    const forbidden = pattern.test(control.value);
    return forbidden ? { forbiddenName: control.value } : null;
  };
  return validator;
}

export function forbiddenWordValidate(pattern: string[]): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value?.toLowerCase();
    if (!value) return null;
    const foundWord = pattern.find((word) => value.includes(word.toLowerCase()));
    return foundWord ? { foundingWord: { word: foundWord } } : null;
  };
}
