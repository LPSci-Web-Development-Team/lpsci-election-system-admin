import { IRequireSignIn } from '@interfaces/Common';

interface IStudentPayload extends IRequireSignIn {
  learnerReferenceNumber: string;
}

export interface ICreateStudent extends IStudentPayload {
  userId: string;
}

export interface IUpdateStudent extends IStudentPayload {
  id: string;
}

export interface IFetchStudentChildren extends IRequireSignIn {
  id: string;
}

export interface IFetchStudent {
  id: string;
}
