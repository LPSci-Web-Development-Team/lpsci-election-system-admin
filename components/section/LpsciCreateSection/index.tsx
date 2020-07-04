// ANCHOR React
import * as React from 'react';

// ANCHOR Models
import { CreateSectionForm } from '@scoped-models/section/CreateSectionForm';

// ANCHOR Component
import { LpsciMainPage } from '@components/page/LpsciMainPage';
import { LpsciCreateSectionForm } from './LpsciCreateSectionForm';

export const LpsciCreateSection = React.memo(() => (
  <LpsciMainPage title="Create Section">
    <CreateSectionForm.Provider>
      <LpsciCreateSectionForm />
    </CreateSectionForm.Provider>
  </LpsciMainPage>
));
