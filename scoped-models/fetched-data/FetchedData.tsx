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

  // ANCHOR Fetch all candidates and order it
  const fetchedPresidents: ICandidateFetchedPayload[] = [];
  const fetchedVicePresidents: ICandidateFetchedPayload[] = [];
  const fetchedSecretaries: ICandidateFetchedPayload[] = [];
  const fetchedTreasurers: ICandidateFetchedPayload[] = [];
  const fetchedAuditors: ICandidateFetchedPayload[] = [];
  const fetchedPios: ICandidateFetchedPayload[] = [];
  const fetchedPeaceOfficers: ICandidateFetchedPayload[] = [];
  const fetched12Reps: ICandidateFetchedPayload[] = [];
  const fetched11Reps: ICandidateFetchedPayload[] = [];
  const fetched10Reps: ICandidateFetchedPayload[] = [];
  const fetched9Reps: ICandidateFetchedPayload[] = [];
  const fetched8Reps: ICandidateFetchedPayload[] = [];
  useIsomorphicEffect(() => {
    if (!hasCandidateFetched) {
      GET('/api/candidates')
        .then((res) => {
          res.data.map((item: ICandidateFetchedPayload) => (
            GET(`/api/candidates/${item.id}/voters/count`)
              .then((resCount) => {
                switch (item.position) {
                  case 'President':
                    fetchedPresidents.push({
                      id: item.id,
                      firstName: item.firstName,
                      lastName: item.lastName,
                      position: item.position,
                      imgUrl: item.imgUrl,
                      partyId: item.partyId,
                      count: resCount.data.count ,
                    });
                    break;
                  case 'Vice President':
                    fetchedVicePresidents.push({
                      id: item.id,
                      firstName: item.firstName,
                      lastName: item.lastName,
                      position: item.position,
                      imgUrl: item.imgUrl,
                      partyId: item.partyId,
                      count: resCount.data.count ,
                    });
                    break;
                  case 'Secretary':
                    fetchedSecretaries.push({
                      id: item.id,
                      firstName: item.firstName,
                      lastName: item.lastName,
                      position: item.position,
                      imgUrl: item.imgUrl,
                      partyId: item.partyId,
                      count: resCount.data.count ,
                    });
                    break;
                  case 'Treasurer':
                    fetchedTreasurers.push({
                      id: item.id,
                      firstName: item.firstName,
                      lastName: item.lastName,
                      position: item.position,
                      imgUrl: item.imgUrl,
                      partyId: item.partyId,
                      count: resCount.data.count ,
                    });
                    break;
                  case 'Auditor':
                    fetchedAuditors.push({
                      id: item.id,
                      firstName: item.firstName,
                      lastName: item.lastName,
                      position: item.position,
                      imgUrl: item.imgUrl,
                      partyId: item.partyId,
                      count: resCount.data.count ,
                    });
                    break;
                  case 'PIO':
                    fetchedPios.push({
                      id: item.id,
                      firstName: item.firstName,
                      lastName: item.lastName,
                      position: item.position,
                      imgUrl: item.imgUrl,
                      partyId: item.partyId,
                      count: resCount.data.count ,
                    });
                    break;
                  case 'Peace Officer':
                    fetchedPeaceOfficers.push({
                      id: item.id,
                      firstName: item.firstName,
                      lastName: item.lastName,
                      position: item.position,
                      imgUrl: item.imgUrl,
                      partyId: item.partyId,
                      count: resCount.data.count ,
                    });
                    break;
                  case 'Level Rep. (12)':
                    fetched12Reps.push({
                      id: item.id,
                      firstName: item.firstName,
                      lastName: item.lastName,
                      position: item.position,
                      imgUrl: item.imgUrl,
                      partyId: item.partyId,
                      count: resCount.data.count ,
                    });
                    break;
                  case 'Level Rep. (11)':
                    fetched11Reps.push({
                      id: item.id,
                      firstName: item.firstName,
                      lastName: item.lastName,
                      position: item.position,
                      imgUrl: item.imgUrl,
                      partyId: item.partyId,
                      count: resCount.data.count ,
                    });
                    break;
                  case 'Level Rep. (10)':
                    fetched10Reps.push({
                      id: item.id,
                      firstName: item.firstName,
                      lastName: item.lastName,
                      position: item.position,
                      imgUrl: item.imgUrl,
                      partyId: item.partyId,
                      count: resCount.data.count ,
                    });
                    break;
                  case 'Level Rep. (9)':
                    fetched9Reps.push({
                      id: item.id,
                      firstName: item.firstName,
                      lastName: item.lastName,
                      position: item.position,
                      imgUrl: item.imgUrl,
                      partyId: item.partyId,
                      count: resCount.data.count ,
                    });
                    break;
                  case 'Level Rep. (8)':
                    fetched8Reps.push({
                      id: item.id,
                      firstName: item.firstName,
                      lastName: item.lastName,
                      position: item.position,
                      imgUrl: item.imgUrl,
                      partyId: item.partyId,
                      count: resCount.data.count ,
                    });
                    break;
                  default:
                    break;
                }

                setFetchCandidate([
                  ...fetchedPresidents,
                  ...fetchedVicePresidents,
                  ...fetchedSecretaries,
                  ...fetchedTreasurers,
                  ...fetchedAuditors,
                  ...fetchedPios,
                  ...fetchedPeaceOfficers,
                  ...fetched12Reps,
                  ...fetched11Reps,
                  ...fetched10Reps,
                  ...fetched9Reps,
                  ...fetched8Reps,
                ]);
              })
          ));
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
