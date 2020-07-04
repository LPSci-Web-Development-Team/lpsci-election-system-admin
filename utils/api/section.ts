// ANCHOR Payloads
import { ICreateSection } from '@payloads/section';

// ANCHOR Interfaces
import { IRequireSignIn } from '@interfaces/Common';

// ANCHOR Fetch
import { POST, GET } from '../fetch/methods';

// ANCHOR Results
import { ISectionResult } from './results/section';

/**
 * ANCHOR: Create school year
 *
 * @param param0 Params
 */
export async function createSection({
  token, schoolYear, ...payload
}: ICreateSection) {
  return POST(`/section/new/school-year/${schoolYear}`, payload, {
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
export async function getSections({
  token,
}: IRequireSignIn) {
  const data = await GET('/section', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  return (await data.json()) as ISectionResult[];
}
