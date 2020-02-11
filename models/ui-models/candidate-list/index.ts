// ANCHOR Models
import { PARTIES } from 'models/ui-models/party-list';

// ANCHOR Interfaces
import { ICandidate } from '../../interfaces/Candidate';

export const CANDIDATES: ICandidate[] = [
  {
    firstName: 'Prince Neil Cedrick',
    lastName: 'Castro',
    position: 'President',
    party: PARTIES[0],
  },
  {
    firstName: 'Cedrick',
    lastName: 'Castro',
    position: 'President',
    party: PARTIES[1],
  },
  {
    firstName: 'Prince Neil Cedrick',
    lastName: 'Castro',
    position: 'Vice President',
    party: PARTIES[0],
  },
  {
    firstName: 'Cedrick',
    lastName: 'Castro',
    position: 'Vice President',
    party: PARTIES[1],
  },
];
