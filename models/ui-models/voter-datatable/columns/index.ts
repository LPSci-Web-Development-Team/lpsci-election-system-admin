// ANCHOR Base
import {
  NumericalColumn,
  StringColumn,
  BooleanColumn,
} from 'baseui/data-table';

// ANCHOR Interface
import { TRowData } from 'models/interfaces/VoterDataTable';

export const VOTER_COLUMNS = [
  StringColumn({
    title: 'Last Name',
    maxWidth: 40,
    mapDataToValue: (data: TRowData) => data.lastName,
  }),
  StringColumn({
    title: 'First Name',
    maxWidth: 100,
    mapDataToValue: (data: TRowData) => data.firstName,
  }),
  StringColumn({
    title: 'Section',
    maxWidth: 40,
    mapDataToValue: (data: TRowData) => data.section,
  }),
  NumericalColumn({
    title: 'Grade Level',
    maxWidth: 25,
    mapDataToValue: (data: TRowData) => data.gradeLevel,
  }),
  NumericalColumn({
    title: 'Learner\'s Reference Number',
    maxWidth: 100,
    mapDataToValue: (data: TRowData) => data.lrn,
  }),
  BooleanColumn({
    title: 'Status',
    maxWidth: 10,
    mapDataToValue: (data: TRowData) => data.status,
  }),
];
