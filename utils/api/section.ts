// ANCHOR Payloads
import { ICreateSection } from '@payloads/section';

// ANCHOR Fetch
import { POST } from '../fetch/methods';

// ANCHOR Results

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
