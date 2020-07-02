export interface IPartyResult {
  readonly id: string;
  readonly name: string;
  readonly color: string;
  readonly candidates?: IFetchCandidatePayload[];
}
