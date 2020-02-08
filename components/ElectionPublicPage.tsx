// ANCHOR Base
import * as React from 'react';

// ANCHOR Components
import { ElectionLayout } from './base/public/ElectionLayout';
import { ElectionContent } from './content/public/ElectionContent';
import { ElectionContentArea } from './content/public/ElectionContentArea';

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
