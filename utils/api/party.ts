// ANCHOR Payloads
import {
  ICreateParty, IFetchParty, IFetchPartyChildren, IUpdateParty,
} from '@payloads/party';

// ANCHOR Interfaces
import { IRequireSignIn } from '@interfaces/Common';

// ANCHOR Fetch
import {
  POST, GET, DELETE, PUT,
} from '../fetch/methods';

// ANCHOR Results
import { IPartyResult } from './results/party';
import { ICandidateResult } from './results/candidate';

/**
 * ANCHOR: Create party
 *
 * @param param0 Params
 */
export async function createParty({
  token, schoolYear, ...payload
}: ICreateParty) {
  return POST(`/party/new/school-year/${schoolYear}`, payload, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
}

/**
 * ANCHOR: Update party
 *
 * @param param0 Params
 */
export async function updateParty({
  token, id, ...payload
}: IUpdateParty) {
  return PUT(`/party/${id}`, payload, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
}

/**
 * ANCHOR: Get all parties
 *
 * @param param0 Params
 */
export async function getParties({
  token,
}: IRequireSignIn) {
  const data = await GET('/party', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  return (await data.json()) as IPartyResult[];
}

/**
 * ANCHOR: Get all candidates for party
 *
 * @param param0 Params
 */
export async function getCandidatesForParty({
  id, token,
}: IFetchPartyChildren) {
  const data = await GET(`/party/${id}/candidates`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  return (await data.json()) as ICandidateResult[];
}

/**
 * ANCHOR: Get party by id
 *
 * @param param0 Params
 */
export async function getPartyById({
  id,
}: IFetchParty) {
  const data = await GET(`/party/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return (await data.json()) as IPartyResult;
}

/**
 * ANCHOR: Delete party by id
 *
 * @param param0 Params
 */
export async function deletePartyById({
  id, token,
}: IFetchPartyChildren) {
  await DELETE(`/party/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
}
