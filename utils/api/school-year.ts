// ANCHOR Interfaces
import { IRequireSignIn } from '@interfaces/Common';

// ANCHOR Payloads
import { ICreateSchoolYear } from '@payloads/school-year';

// ANCHOR Fetch
import { POST, GET } from '../fetch/methods';

// ANCHOR Results
import { ISchoolYearResult } from './results/school-year';

/**
 * ANCHOR: Create school year
 *
 * @param param0 Params
 */
export async function createSchoolYear({
  token, ...payload
}: ICreateSchoolYear) {
  return POST('/school-year', payload, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
}

/**
 * ANCHOR: Get all school years
 *
 * @param param0 Params
 */
export async function getSchoolYears({
  token,
}: IRequireSignIn) {
  const data = await GET('/school-year', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  return (await data.json()) as ISchoolYearResult[];
}
