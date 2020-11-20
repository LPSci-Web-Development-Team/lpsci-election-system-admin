export interface IFetchUser {
  id: string;
}

export enum ESex {
  Male = 'male',
  Female = 'female',
}

export interface ISignUpPayload {
  readonly firstName: string;
  readonly middleName?: string;
  readonly lastName: string;
  readonly email: string;
  readonly password: string;
  readonly streetAddress: string;
  readonly barangay: string;
  readonly city: string;
  readonly phoneNumber?: string;
  readonly displayPhotoUuid?: string;
  readonly birthDate: string;
  readonly sex: ESex;
}
