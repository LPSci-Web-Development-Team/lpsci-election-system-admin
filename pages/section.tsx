/* eslint-disable import/no-default-export */
// ANCHOR React
import * as React from 'react';

// ANCHOR Components
import { GlobalProvider } from '@lpsci/components/GlobalProvider';
import { ElectionAppHead } from '@lpsci/components/head/ElectionAppHead/ElectionAppHead';
import { ElectionPage } from '@lpsci/components/ElectionPrivatePage';
import { ElectionSection } from '@lpsci/components/section/ElectionSection';

export default React.memo(() => (
  <GlobalProvider>
    <ElectionAppHead title="SSG Election Admin" description="Election Admin App" />
    <ElectionPage>
      <ElectionSection />
    </ElectionPage>
  </GlobalProvider>
));