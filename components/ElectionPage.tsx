// ANCHOR Base
import * as React from 'react';

// ANCHOR Components
import { ElectionLayout } from './base/ElectionLayout';
import { ElectionContent } from './content/ElectionContent';
import { ElectionContentArea } from './content/ElectionContentArea';
import { Sidebar } from './sidebar/Sidebar';

interface IElectionPageProps {
  children: React.ReactNode;
}

export const ElectionPage = ({ children }: IElectionPageProps) => (
  <>
    <Sidebar />
    <ElectionLayout>
      <ElectionContent>
        <ElectionContentArea>
          {children}
        </ElectionContentArea>
      </ElectionContent>
    </ElectionLayout>
  </>
);
