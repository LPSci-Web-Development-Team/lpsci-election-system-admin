/* eslint-disable import/no-default-export */
// ANCHOR React
import * as React from 'react';

// ANCHOR Components
import { GlobalProvider } from '@lpsci/components/GlobalProvider';
import { ElectionAppHead } from '@lpsci/components/head/ElectionAppHead/ElectionAppHead';
import { ElectionPage } from '@lpsci/components/ElectionPage';

// ANCHOR Base
import { Paragraph1 } from 'baseui/typography';

export default React.memo(() => (
  <GlobalProvider>
    <ElectionAppHead title="SSG Election" description="Election Admin App" />
    <ElectionPage>
      <Paragraph1>
        Test Page
      </Paragraph1>
    </ElectionPage>
  </GlobalProvider>
));
