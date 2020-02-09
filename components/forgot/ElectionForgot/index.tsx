// ANCHOR React
import * as React from 'react';

// ANCHOR Components
import { ForgotModal } from '@lpsci/components/forgot-modal/ForgotModal';
import { ElectionForgotHeading } from '../ElectionForgotHeading';
import { ElectionForgotSearch } from '../ElectionForgotSearch';
import { ElectionForgotList } from '../ElectionForgotList';

export const ElectionForgot = React.memo(() => (
  <>
    <ElectionForgotHeading />
    <ElectionForgotSearch />
    <ElectionForgotList />
    <ForgotModal />
  </>
));
