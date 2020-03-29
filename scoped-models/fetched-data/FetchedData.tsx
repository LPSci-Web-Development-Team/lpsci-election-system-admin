/* eslint-disable no-console */
// ANCHOR React
import * as React from 'react';

// ANCHOR Hooks
import { useIsomorphicEffect } from '@lpsci/utils/hooks/useIsomorphicEffect';

// ANCHOR Model
import createModel from '@lxsmnsyc/react-scoped-model';

// ANCHOR Axios
import { GET } from '@lpsci/utils/axios/methods';

// ANCHOR Interface
import { IClassroomSection } from 'models/interfaces/Section';
import { IRow } from 'models/interfaces/VoterDataTable';
import { IPartyFetchedPayload } from '@lpsci/utils/payloads/party';
import { ICandidateFetchedPayload } from '@lpsci/utils/payloads/candidate';

export const FetchedData = createModel(() => {
  const [fetchVoter, setFetchVoter] = React.useState<IRow[]>([]);
  const [fetchParty, setFetchParty] = React.useState<IPartyFetchedPayload[]>([]);
  const [fetchCandidate, setFetchCandidate] = React.useState<ICandidateFetchedPayload[]>([]);
  const [fetchSection, setFetchSection] = React.useState<IClassroomSection[]>([]);

  const [hasPartyFetched, setHasPartyFetched] = React.useState<boolean>(false);
  const [hasCandidateFetched, setHasCandidateFetched] = React.useState<boolean>(false);

  // ANCHOR Fetch all parties
  const fetchedParties: IPartyFetchedPayload[] = [];
  useIsomorphicEffect(() => {
    if (!hasPartyFetched) {
      GET('/api/parties')
        .then((res) => {
          res.data.map((item: IPartyFetchedPayload) => (
            fetchedParties.push({
              id: item.id,
              name: item.name,
              hexColor: item.hexColor,
            })
          ));
          setFetchParty([...fetchedParties]);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setHasPartyFetched(false);
        });
    }
  }, []);

  // ANCHOR Fetch all candidates
  const fetchedCandidates: ICandidateFetchedPayload[] = [];
  useIsomorphicEffect(() => {
    if (!hasCandidateFetched) {
      GET('/api/candidates')
        .then((res) => {
          res.data.map((item: ICandidateFetchedPayload) => (
            fetchedCandidates.push({
              id: item.id,
              firstName: item.firstName,
              lastName: item.lastName,
              position: item.position,
              imgUrl: item.imgUrl,
              partyId: item.partyId,
            })
          ));
          setFetchCandidate([...fetchedCandidates]);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setHasCandidateFetched(false);
        });
    }
  }, []);

  return {
    fetchVoter,
    setFetchVoter,
    fetchParty,
    setFetchParty,
    fetchCandidate,
    setFetchCandidate,
    fetchSection,
    setFetchSection,
  };
});
