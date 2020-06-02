// ANCHOR React
import * as React from 'react';

// ANCHOR Model
import createModel from '@lxsmnsyc/react-scoped-model';

// ANCHOR Hooks
import { useConstant } from '@lpsci/utils/hooks/useConstant';

export const ForgotSearch = createModel(() => {
  const [search, setSearch] = React.useState('');
  const [value, setValue] = React.useState([]);

  const handler = useConstant(() => ({
    search: (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
    },
  }));


  return {
    handler,
    search,
    setSearch,
    value,
    setValue,
  };
});
