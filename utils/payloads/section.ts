import { IRequireSignIn } from '@interfaces/Common';

export enum EGrade {
  Seven = '7',
  Eight = '8',
  Nine = '9',
  Ten = '10',
  Eleven = '11',
  Twelve = '12',
}

export interface ICreateSection extends IRequireSignIn {
  name: string;
  gradeLevel: EGrade;
  adviser: string;
  schoolYear: string;
}

export interface IFetchSectionChildren extends IRequireSignIn {
  id: string;
}

export interface IFetchSection {
  id: string;
}
