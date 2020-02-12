// ANCHOR Axios
import { POST } from '../axios/methods';

// ANCHOR Payloads
import { ISectionPayload } from '../payloads/section';

// TODO Fix this on production
export async function addSection(payload: ISectionPayload) {
  return POST('http://localhost:5000/api/sections', payload);
}
