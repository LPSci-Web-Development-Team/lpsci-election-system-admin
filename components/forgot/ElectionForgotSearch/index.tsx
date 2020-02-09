// ANCHOR  React
import * as React from 'react';

// ANCHOR Base
import { Input } from 'baseui/input';
import { Search } from 'baseui/icon';

// ANCHOR Hooks
import { useConstant } from '@lpsci/utils/hooks/useConstant';

// ANCHOR Scoped Models
import { ForgotSearch } from '@lpsci/scoped-models/forgot-search/ForgotSearch';

// ANCHOR Styles
import { SEARCH } from './styles';

export const ElectionForgotSearch = React.memo(() => {
  const searchHandler = ForgotSearch.useSelector((state) => state.handler.search);

  const SearchIcon = useConstant(() => (<Search size="18px" />));

  return (
    <Input
      startEnhancer={SearchIcon}
      onChange={searchHandler}
      placeholder="Search for last name..."
      overrides={SEARCH}
    />
  );
});
