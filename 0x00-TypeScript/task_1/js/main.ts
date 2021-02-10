interface Teacher {
  readonly firstName: string;
  readonly lastNname: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}
