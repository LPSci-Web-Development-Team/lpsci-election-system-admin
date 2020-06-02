export interface ICandidate {
  id: string;
  firstName: string;
  lastName: string;
  position: EPosition;
  party: string;
  image: string;
  count?: number;
}

export enum EPosition {
  President = 'President',
  VicePresident = 'Vice President',
  Secretary = 'Secretary',
  Treasurer = 'Treasurer',
  Auditor = 'Auditor',
  PeaceOfficer = 'Peace Officer',
  PublicInformationOfficer = 'PIO',
  GradeEightLevelRepresentative = 'Level Rep. (8)',
  GradeNineLevelRepresentative = 'Level Rep. (9)',
  GradeTenLevelRepresentative = 'Level Rep. (10)',
  GradeElevenLevelRepresentative = 'Level Rep. (11)',
  GradeTwelveLevelRepresentative = 'Level Rep. (12)',
}
