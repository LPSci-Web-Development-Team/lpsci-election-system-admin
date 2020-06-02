// ANCHOR Axios
import { GET, PATCH } from '../axios/methods';

// ANCHOR Payloads
import { IResetVoterPasswordPayload } from '../payloads/voter';

export async function getVotersFromLastName(lastName: string) {
  return GET(`/api/voters/?filter[where][lastName][like]=${lastName}%`, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}

export async function resetVoterPassword(userId: string, payload: IResetVoterPasswordPayload) {
  return PATCH(`/api/voters/${userId}`, payload, {
    headers: {
      Authorization: `${process.env.TEMPORARY_ACCESS_TOKEN}`,
    },
  });
}
