// ANCHOR Axios
import { POST } from '../axios/methods';

// ANCHOR Payloads
import { ICandidatePayload } from '../payloads/candidate';

// TODO Fix this on production
export async function addCandidate(payload: ICandidatePayload) {
  return POST('http://localhost:5000/api/candidates', payload);
}
