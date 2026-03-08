export class Student {
  constructor(
    public name: string = '',
    public phone: string = '',
    public email: string = '',
    public province: string = '',
    public district: string = '',
  ) {}
}
export interface Student {
  name: string;
  phone: string;
  email: string;
  province: string;
  district: string;
  gender: string;
  language: string;
}
