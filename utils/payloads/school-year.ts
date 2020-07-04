import { IRequireSignIn } from '@interfaces/Common';

export interface IFetchSchoolYear {
  id: string;
}

export interface IFetchSchoolYearChildren extends IRequireSignIn {
  id: string;
}

export interface ICreateSchoolYear extends IRequireSignIn {
  year: string;
}
