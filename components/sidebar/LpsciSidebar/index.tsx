// ANCHOR React
import * as React from 'react';

interface IProps {
  hideInitial?: boolean;
  useDrawer?: boolean;
}

export const LpsciSidebar = React.memo(({ hideInitial, useDrawer }: IProps) => {
  // TODO Add navbar
  return <>`${hideInitial} ${useDrawer}`</>;
})