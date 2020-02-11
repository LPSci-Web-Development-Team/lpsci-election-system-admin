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
    image: '/img/global-president.jpg',
  },
  {
    firstName: 'Cedrick',
    lastName: 'Castro',
    position: 'President',
    party: PARTIES[1],
    image: '/img/siklab-president.jpg',
  },
  {
    firstName: 'Prince Neil Cedrick',
    lastName: 'Castro',
    position: 'Vice President',
    party: PARTIES[0],
    image: '/img/global-vicepresident.jpg',
  },
  {
    firstName: 'Cedrick',
    lastName: 'Castro',
    position: 'Vice President',
    party: PARTIES[1],
    image: '/img/siklab-vicepresident.jpg',
  },
];
