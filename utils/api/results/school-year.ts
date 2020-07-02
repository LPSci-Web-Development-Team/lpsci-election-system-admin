import { ISectionResult } from './section';
import { IPartyResult } from './party';

export interface ISchoolYearResult {
  readonly id: string;
  readonly year: string;
  sections?: ISectionResult[];
  readonly parties?: IPartyResult[];
}
