import { EPosition, ECandidateState } from '@payloads/candidate';
import { IStudentResult } from './student';

interface IPartyEntity {
  readonly id: string;
  readonly name: string;
  readonly color: string;
}

export interface ICandidateResult {
  readonly id: string;
  readonly position: EPosition;
  readonly voteCount: number;
  readonly state: ECandidateState;
  readonly student: IStudentResult;
  readonly party?: IPartyEntity ;
}
