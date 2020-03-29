export interface ICandidatePayload {
  readonly firstName: string;
  readonly lastName: string;
  readonly position: string;
  readonly imgUrl: string;
  readonly partyId: string;
}

export interface ICandidateFetchedPayload {
  id: string;
  firstName: string;
  lastName: string;
  position: string;
  imgUrl: string;
  partyId: string;
}
