// ANCHOR React
import * as React from 'react';

// ANCHOR Models
import { CreatePartyForm } from '@scoped-models/party/CreatePartyForm';

// ANCHOR Results
import { IPartyResult } from '@api/results/party';

// ANCHOR Component
import { LpsciMainPage } from '@components/page/LpsciMainPage';
import { LpsciCreatePartyForm } from './LpsciCreatePartyForm';

interface IProps {
  id?: string;
  initialData?: IPartyResult;
}

export const LpsciCreateParty = React.memo(({
  id, initialData,
}: IProps) => (
  <LpsciMainPage
    title={`${initialData
      ? (`Update ${initialData.name} Party`)
      : 'Create a Party'}`}
  >
    <CreatePartyForm.Provider
      id={id}
      initialData={initialData}
    >
      <LpsciCreatePartyForm />
    </CreatePartyForm.Provider>
  </LpsciMainPage>
));
