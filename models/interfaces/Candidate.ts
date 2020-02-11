import { IParty } from './Party';

export interface ICandidate {
  firstName: string;
  lastName: string;
  position: string;
  party: IParty;
  image: string;
}
