/* eslint-disable react-hooks/exhaustive-deps */
// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';
import { Paragraph1 } from 'baseui/typography';

// ANCHOR Utils
import { GET } from '@lpsci/utils/axios/methods';

// ANCHOR Component
import { ElectionCount } from '../ElectionCount';

// ANCHOR Styles
import { BLOCK } from './styles';

export const ElectionTallyVotes = React.memo(() => {
  const [fetchedTally, setFetchedTally] = React.useState<any>([]);
  const [hasFetched, setHasFetched] = React.useState(false);

  const temporaryFetch: any = [];

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      if (hasFetched === false) {
        GET('/api/candidates')
          .then((response) => {
            response.data.map((item: any) => (
              temporaryFetch.push(item)
            ));
            setFetchedTally([...temporaryFetch]);
            setHasFetched(true);
          });
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [hasFetched, temporaryFetch]);

  return (
    <>
      {
        fetchedTally.map((item: { id: string; firstName: any; lastName: any; position: any }) => (
          <Block overrides={BLOCK}>
            <Paragraph1 key={item.id}>
              {`(${item.position}) `}
              <b>{`${item.firstName} ${item.lastName}: `}</b>
              <ElectionCount id={item.id} />
            </Paragraph1>
          </Block>
        ))
      }
    </>
  );
});
