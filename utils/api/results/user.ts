export enum ESex {
  M = 'male',
  F = 'female',
}

export interface IUserResult {
  readonly id: string;
  readonly firstName: string;
  readonly middleName?: string;
  readonly lastName: string;
  readonly birthDate: Date;
  readonly sex: ESex;
  readonly email: string;
  readonly displayPhotoUuid?: string;
  readonly phoneNumber?: string;
  readonly streetAddress: string;
  readonly barangay: string;
  readonly city: string;
}
