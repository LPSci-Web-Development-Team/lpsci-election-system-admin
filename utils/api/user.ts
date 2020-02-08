// ANCHOR Axios
import { POST } from '../axios/methods';

// ANCHOR Payloads
import { ISignInPayload } from '../payloads/user';

export async function signinUser(payload: ISignInPayload) {
  return POST('/api/user/signin', payload);
}
