// ANCHOR Base
import * as React from 'react';

// ANCHOR Components
import { ElectionLayout } from './base/private/ElectionLayout';
import { ElectionContent } from './content/private/ElectionContent';
import { ElectionContentArea } from './content/private/ElectionContentArea';

interface IElectionPageProps {
  children: React.ReactNode;
}

export const ElectionPage = ({ children }: IElectionPageProps) => (
  <ElectionLayout>
    <ElectionContent>
      <ElectionContentArea>
        {children}
      </ElectionContentArea>
    </ElectionContent>
  </ElectionLayout>
);
