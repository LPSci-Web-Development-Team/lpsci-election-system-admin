import { IRequireSignIn } from '@interfaces/Common';

export enum EGrade {
  Seven = '7',
  Eight = '8',
  Nine = '9',
  Ten = '10',
  Eleven = '11',
  Twelve = '12',
}

interface ISectionPayload extends IRequireSignIn {
  name: string;
  gradeLevel: EGrade;
  adviser: string;
}

export interface ICreateSection extends ISectionPayload {
  schoolYear: string;
}

export interface IUpdateSection extends ISectionPayload {
  id: string;
}

export interface IFetchSectionChildren extends IRequireSignIn {
  id: string;
}

export interface IFetchSection {
  id: string;
}
