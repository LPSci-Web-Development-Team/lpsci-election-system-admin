// ANCHOR React
import * as React from 'react';

// ANCHOR Models

// ANCHOR Results
import { IPartyResult } from '@api/results/party';

// ANCHOR Component
import { LpsciMainPage } from '@components/page/LpsciMainPage';
import { LpsciIndividualPartyTabs } from './LpsciIndividualPartyTabs';

interface IProps {
  id: string;
  initialData: IPartyResult;
}

export const LpsciIndividualParty = React.memo(({
  id, initialData,
}: IProps) => (
  <LpsciMainPage
    title={`${initialData.name} Party`}
  >
    <LpsciIndividualPartyTabs id={id} />
  </LpsciMainPage>
));
