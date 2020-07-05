import { EGrade } from '@payloads/section';
import { IUserResult } from './user';

export interface IStudentCurrentResult {
  readonly currentAdviser?: string;
  readonly currentGradeLevel?: EGrade;
  readonly currentSection?: string;
}

export interface IStudentResult extends IStudentCurrentResult {
  readonly id: string;
  readonly learnerReferenceNumber: string;
  readonly user: IUserResult;
}
