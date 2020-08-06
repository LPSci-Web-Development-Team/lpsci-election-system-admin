import { EPosition, ECandidateState } from '@payloads/candidate';
import { IStudentResult } from './student';

export interface ISchoolYear {
  readonly id: string;
  readonly year: string;
}

interface IPartyEntity {
  readonly id: string;
  readonly name: string;
  readonly color: string;
  readonly schoolYear?: ISchoolYear
}

export interface ICandidateResult {
  readonly id: string;
  readonly position: EPosition;
  readonly voteCount: number;
  readonly state: ECandidateState;
  readonly student: IStudentResult;
  readonly party?: IPartyEntity ;
}
