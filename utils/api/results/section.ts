import { EGrade } from '@payloads/section';
import { IStudentResult } from './student';

export interface ISectionResult {
  readonly id: string;
  readonly name: string;
  readonly gradeLevel: EGrade;
  readonly adviser: string;
  readonly students?: IStudentResult[];
}
