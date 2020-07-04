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
  token, ...payload
}: ICreateSection) {
  return POST('/section', payload, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
}
