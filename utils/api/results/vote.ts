import { ICandidateResult } from '@api/results/candidate';
import { IStudentResult } from '@api/results/student';

export interface IVoteResult {
  readonly id: string;
  readonly createdAt: Date;
  readonly student: IStudentResult;
  readonly candidate?: ICandidateResult;
}
