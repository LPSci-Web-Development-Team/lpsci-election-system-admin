// ANCHOR Payloads
import {
  ICreateCandidate, IFetchCandidate, IFetchCandidateChildren,
} from '@payloads/candidate';

// ANCHOR Interfaces
import { IRequireSignIn } from '@interfaces/Common';

// ANCHOR Fetch
import {
  POST, GET, DELETE, PUT,
} from '../fetch/methods';

// ANCHOR Results
import { ICandidateResult } from './results/candidate';

/**
 * ANCHOR: Create candidate
 *
 * @param param0 Params
 */
export async function createCandidate({
  token, studentId, ...payload
}: ICreateCandidate) {
  return POST(`/candidate/new/student/${studentId}`, payload, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
}

/**
 * ANCHOR: Get all candidates
 *
 * @param param0 Params
 */
export async function getCandidates({
  token,
}: IRequireSignIn) {
  const data = await GET('/candidate', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  return (await data.json()) as ICandidateResult[];
}

/**
 * ANCHOR: Get all votes for candidate
 *
 * @param param0 Params
 */
export async function getVotesForCandidate({
  id, token,
}: IFetchCandidateChildren) {
  const data = await GET(`/candidate/${id}/votes`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  return (await data.json()) as ICandidateResult[];
}

/**
 * ANCHOR: Get candidate by id
 *
 * @param param0 Params
 */
export async function getCandidateById({
  id,
}: IFetchCandidate) {
  const data = await GET(`/candidate/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return (await data.json()) as ICandidateResult;
}

/**
 * ANCHOR: Delete candidate by id
 *
 * @param param0 Params
 */
export async function deleteCandidateById({
  id, token,
}: IFetchCandidateChildren) {
  await DELETE(`/candidate/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
}
