// ANCHOR React
import * as React from 'react';

// ANCHOR Models
import { PartyData } from '@scoped-models/party/PartyData';

// ANCHOR Component
import { LpsciMainPage } from '@components/page/LpsciMainPage';
import { LpsciViewPartyDataTable } from './LpsciViewPartyDataTable';

export const LpsciViewParty = React.memo(() => (
  <LpsciMainPage title="View Parties">
    <PartyData.Provider>
      <LpsciViewPartyDataTable />
    </PartyData.Provider>
  </LpsciMainPage>
));
