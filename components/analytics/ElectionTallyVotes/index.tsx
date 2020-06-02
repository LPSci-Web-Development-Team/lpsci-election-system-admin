/* eslint-disable react-hooks/exhaustive-deps */
// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';
import { Paragraph1 } from 'baseui/typography';

// ANCHOR Utils
import { GET } from '@lpsci/utils/axios/methods';
import { ICandidateFetchedPayload } from '@lpsci/utils/payloads/candidate';

// ANCHOR Component
import { ElectionCount } from '../ElectionCount';

// ANCHOR Styles
import { BLOCK } from './styles';

export const ElectionTallyVotes = React.memo(() => {
  const [fetchedTally, setFetchedTally] = React.useState<ICandidateFetchedPayload[]>([]);
  const [hasFetched, setHasFetched] = React.useState(false);

  const temporaryFetch: ICandidateFetchedPayload[] = [];

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      if (hasFetched === false) {
        GET('/api/candidates')
          .then((response) => {
            response.data.map((item: ICandidateFetchedPayload) => (
              GET(`/api/parties/${item.partyId}`)
                .then((res) => {
                  const candidate = item;
                  candidate.partyId = res.data.name;
                  temporaryFetch.push(candidate);
                  setFetchedTally([...temporaryFetch]);
                  setHasFetched(true);
                })
            ));
          });
      }
    }, 5000);
    setHasFetched(false);
    return () => clearInterval(intervalId);
  }, [hasFetched, temporaryFetch]);

  return (
    <>
      {
        fetchedTally.map((item) => (
          <Block overrides={BLOCK} key={item.id}>
            <Paragraph1>
              {`(${item.position} of ${item.partyId}) `}
              <b>{`${item.firstName} ${item.lastName}: `}</b>
              <ElectionCount id={item.id} />
            </Paragraph1>
          </Block>
        ))
      }
    </>
  );
});
