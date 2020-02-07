// ANCHOR Base
import * as React from 'react';

// ANCHOR Components
import { ElectionLayout } from './base/ElectionLayout';
import { ElectionContent } from './content/ElectionContent';
import { ElectionContentArea } from './content/ElectionContentArea';

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
