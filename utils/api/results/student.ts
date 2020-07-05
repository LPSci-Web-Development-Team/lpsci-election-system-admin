import { EGrade } from '@payloads/section';
import { IUserResult } from './user';

export interface ISchoolYear {
  readonly id: string;
  readonly year: string;
}

export interface ISection {
  readonly id: string;
  readonly name: string;
  readonly gradeLevel: EGrade;
  readonly adviser: string;
  readonly schoolYear?: ISchoolYear;
}

export interface IStudentCurrentResult {
  readonly currentAdviser?: string;
  readonly currentGradeLevel?: EGrade;
  readonly currentSection?: string;
}

export interface IStudentResult extends IStudentCurrentResult {
  readonly id: string;
  readonly learnerReferenceNumber: string;
  readonly user: IUserResult;
  readonly sections?: ISection[];
}
