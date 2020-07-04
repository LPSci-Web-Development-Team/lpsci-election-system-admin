import { IRequireSignIn } from '@interfaces/Common';

interface IPartyPayload extends IRequireSignIn {
  name: string;
  color: string
}

export interface ICreateParty extends IPartyPayload {
  schoolYear: string;
}

export interface IUpdateParty extends IPartyPayload {
  id: string;
}

export interface IFetchPartyChildren extends IRequireSignIn {
  id: string;
}

export interface IFetchParty {
  id: string;
}
