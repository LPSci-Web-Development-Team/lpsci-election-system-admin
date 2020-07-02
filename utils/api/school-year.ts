// ANCHOR Payloads
import { ICreateSchoolYear } from '@payloads/school-year';

// ANCHOR Fetch
import { POST } from '../fetch/methods';

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
