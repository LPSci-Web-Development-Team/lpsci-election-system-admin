// ANCHOR React
import * as React from 'react';

// ANCHOR Components
import { RemoveAllSectionsModal } from '@lpsci/components/section-modal/RemoveAllSectionModal';
import { AddSectionsModal } from '@lpsci/components/section-modal/AddSectionModal';
import { ElectionSectionHeading } from '../ElectionSectionHeading';
import { ElectionSectionList } from '../ElectionSectionList';
import { ElectionSectionHeadButton } from '../ElectionSectionHeadButton';

export const ElectionSection = React.memo(() => (
  <>
    <ElectionSectionHeading />
    <ElectionSectionHeadButton />
    <ElectionSectionList />
    <AddSectionsModal />
    <RemoveAllSectionsModal />
  </>
));
