import { EGrade } from '@payloads/section';

// ANCHOR Section Name Label
export const SECTION_NAME_LABEL = 'Section Name';

// ANCHOR Section Name Placeholder
export const SECTION_NAME_PLACEHOLDER = 'Faraday';

// ANCHOR Grade Level Label
export const SECTION_GRADE_LEVEL_LABEL = 'Grade Level';

// ANCHOR Grade Level Placeholder
export const SECTION_GRADE_LEVEL_PLACEHOLDER = 'Select a grade level';

// ANCHOR Grade Level Options
export const SECTION_GRADE_LEVEL_OPTIONS = [
  { label: `Grade ${EGrade.Seven}`, id: EGrade.Seven },
  { label: `Grade ${EGrade.Eight}`, id: EGrade.Eight },
  { label: `Grade ${EGrade.Nine}`, id: EGrade.Nine },
  { label: `Grade ${EGrade.Ten}`, id: EGrade.Ten },
  { label: `Grade ${EGrade.Eleven}`, id: EGrade.Eleven },
  { label: `Grade ${EGrade.Twelve}`, id: EGrade.Twelve },
];

// ANCHOR Adviser Label
export const SECTION_ADVISER_LABEL = 'Adviser';

// ANCHOR Adviser Placeholder
export const SECTION_ADVISER_PLACEHOLDER = 'Juan C. Dela Cruz';
