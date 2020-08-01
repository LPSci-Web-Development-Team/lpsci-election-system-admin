import { IRequireSignIn } from '@interfaces/Common';

export enum EPosition {
  President = 'president',
  VicePresident = 'vicepresident',
  Secretary = 'secretary',
  Treasurer = 'treasurer',
  Auditor = 'auditor',
  PeaceOfficer = 'peaceofficer',
  PublicInformationOfficer = 'publicinformationofficer',
  GradeSevenLevelRepresentative = 'sevenlevelrep',
  GradeEightLevelRepresentative = 'eightlevelrep',
  GradeNineLevelRepresentative = 'ninelevelrep',
  GradeTenLevelRepresentative = 'tenlevelrep',
  GradeElevenLevelRepresentative = 'elevenlevelrep',
  GradeTwelveLevelRepresentative = 'twelvelevelrep',
}

export enum ECandidateState {
  Indeterminate = 'indeterminate',
  Winner = 'winner',
  Loser = 'loser',
}

interface ICandidatePayload extends IRequireSignIn {
  position: EPosition;
}

export interface ICreateCandidate extends ICandidatePayload {
  studentId: string;
}

export interface IUpdateCandidate extends ICandidatePayload {
  candidateId: string;
}

export interface IFetchCandidateChildren extends IRequireSignIn {
  id: string;
}

export interface IFetchCandidate {
  id: string;
}
