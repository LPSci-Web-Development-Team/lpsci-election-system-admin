// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { H1 } from 'baseui/typography';

// ANCHOR Scoped Models
import { FetchedData } from '@lpsci/scoped-models/fetched-data/FetchedData';

// ANCHOR Model
import { IParty } from 'models/interfaces/Party';

// ANCHOR Utils
import { GET } from '@lpsci/utils/axios/methods';

// ANCHOR Styles
import { HEADING } from './styles';

export const ElectionCandidateHeading = React.memo(() => {
  const setFetchParty = FetchedData.useSelector((state) => state.setFetchParty);

  // ANCHOR Fetch all parties
  React.useEffect(() => {
    const fetchedParties: IParty[] = [];
    // TODO Fix this on production
    GET('/api/parties')
      .then((response) => {
        response.data.forEach((item: any) => {
          fetchedParties.push({
            id: item.id,
            name: item.name,
            color: item.hexColor,
          });
          setFetchParty([...fetchedParties]);
        });
      });
  }, [setFetchParty]);

  return (
    <H1 overrides={HEADING}>
      Registered Candidates
    </H1>
  );
});
