// ANCHOR Axios
import { POST } from '../axios/methods';

// ANCHOR Payloads
import { IPartyPayload } from '../payloads/party';

// TODO Fix this on production
export async function addParty(payload: IPartyPayload) {
  return POST('http://192.168.1.8:5000/api/parties', payload);
}
