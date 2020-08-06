// ANCHOR Payloads
import { IFetchUser } from '@payloads/user';

// ANCHOR Interfaces
import { IRequireSignIn } from '@interfaces/Common';

// ANCHOR Fetch
import { GET } from '../fetch/methods';

// ANCHOR Results
import { IUserResult } from './results/user';

/**
 * ANCHOR: Get all users
 *
 * @param param0 Params
 */
export async function getUsers({
  token,
}: IRequireSignIn) {
  const data = await GET('/user', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  return (await data.json()) as IUserResult[];
}

/**
 * ANCHOR: Get user by id
 *
 * @param param0 Params
 */
export async function getUserById({
  id,
}: IFetchUser) {
  const data = await GET(`/user/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return (await data.json()) as IUserResult;
}
