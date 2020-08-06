// ANCHOR Payloads
import {
  ICreateStudent, IFetchStudent, IUpdateStudent, IFetchStudentChildren,
} from '@payloads/student';

// ANCHOR Interfaces
import { IRequireSignIn } from '@interfaces/Common';

// ANCHOR Fetch
import {
  POST, GET, PUT,
} from '../fetch/methods';

// ANCHOR Results
import { IStudentResult } from './results/student';
import { IVoteResult } from './results/vote';

/**
 * ANCHOR: Create student
 *
 * @param param0 Params
 */
export async function createStudent({
  token, userId, ...payload
}: ICreateStudent) {
  return POST(`/student/${userId}`, payload, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
}

/**
 * ANCHOR: Update student
 *
 * @param param0 Params
 */
export async function updateStudent({
  token, id, ...payload
}: IUpdateStudent) {
  return PUT(`/student/${id}`, payload, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
}

/**
 * ANCHOR: Get all students
 *
 * @param param0 Params
 */
export async function getStudents({
  token,
}: IRequireSignIn) {
  const data = await GET('/student', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  return (await data.json()) as IStudentResult[];
}

/**
 * ANCHOR: Get student by id
 *
 * @param param0 Params
 */
export async function getStudentById({
  id,
}: IFetchStudent) {
  const data = await GET(`/student/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return (await data.json()) as IStudentResult;
}

/**
 * ANCHOR: Get all votes by student
 *
 * @param param0 Params
 */
export async function getVotesForStudent({
  id, token,
}: IFetchStudentChildren) {
  const data = await GET(`/student/${id}/votes`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  return (await data.json()) as IVoteResult[];
}
