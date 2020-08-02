import { EPosition } from '@payloads/candidate';

// ANCHOR Position lookup
const POSITION = {
  president: 'President',
  vicepresident: 'Vice President',
  secretary: 'Secretary',
  treasurer: 'Treasurer',
  auditor: 'Auditor',
  peaceofficer: 'Peace Officer',
  publicinformationofficer: 'Public Information Officer',
  sevenlevelrep: 'Grade 7 Level Representative',
  eightlevelrep: 'Grade 8 Level Representative',
  ninelevelrep: 'Grade 9 Level Representative',
  tenlevelrep: 'Grade 10 Level Representative',
  elevenlevelrep: 'Grade 11 Level Representative',
  twelvelevelrep: 'Grade 12 Level Representative',
};

// ANCHOR Position Label
export const CANDIDATE_POSITION_LABEL = 'Position';

// ANCHOR Position Placeholder
export const CANDIDATE_POSITION_PLACEHOLDER = "Select candidate's position...";

// ANCHOR Position Options
export const CANDIDATE_POSITION_OPTIONS = [
  {
    label: POSITION[EPosition.President],
    id: EPosition.President,
  },
  {
    label: POSITION[EPosition.VicePresident],
    id: EPosition.VicePresident,
  },
  {
    label: POSITION[EPosition.Secretary],
    id: EPosition.Secretary,
  },
  {
    label: POSITION[EPosition.Treasurer],
    id: EPosition.Treasurer,
  },
  {
    label: POSITION[EPosition.Auditor],
    id: EPosition.Auditor,
  },
  {
    label: POSITION[EPosition.PublicInformationOfficer],
    id: EPosition.PublicInformationOfficer,
  },
  {
    label: POSITION[EPosition.PeaceOfficer],
    id: EPosition.PeaceOfficer,
  },
  {
    label: POSITION[EPosition.GradeSevenLevelRepresentative],
    id: EPosition.GradeSevenLevelRepresentative,
  },
  {
    label: POSITION[EPosition.GradeEightLevelRepresentative],
    id: EPosition.GradeEightLevelRepresentative,
  },
  {
    label: POSITION[EPosition.GradeNineLevelRepresentative],
    id: EPosition.GradeNineLevelRepresentative,
  },
  {
    label: POSITION[EPosition.GradeTenLevelRepresentative],
    id: EPosition.GradeTenLevelRepresentative,
  },
  {
    label: POSITION[EPosition.GradeElevenLevelRepresentative],
    id: EPosition.GradeElevenLevelRepresentative,
  },
  {
    label: POSITION[EPosition.GradeTwelveLevelRepresentative],
    id: EPosition.GradeTwelveLevelRepresentative,
  },
];

// ANCHOR Student Label
export const CANDIDATE_STUDENT_LABEL = 'Student';

// ANCHOR Student Placeholder
export const CANDIDATE_STUDENT_PLACEHOLDER = 'Select a student...';
