/* eslint-disable no-mixed-operators */
// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Tag, VARIANT, KIND } from 'baseui/tag';

// ANCHOR Utils
import { GET } from '@lpsci/utils/axios/methods';

// ANCHOR Models
import { IParty } from 'models/interfaces/Party';

// ANCHOR Styles
import { TAG } from './styles';

interface ICandidateTagProps {
  id: string;
}

export const ElectionCandidatePartyTag = React.memo(({ id }: ICandidateTagProps) => {
  const [party, setParty] = React.useState<IParty>({
    id: '123',
    name: 'THIRD',
    hexColor: '#F2f2f2',
  });

  React.useEffect(() => {
    // TODO Fix this on production
    GET(`/api/parties/${id}`)
      .then((response) => {
        setParty({
          id: response.data.id,
          name: response.data.name,
          hexColor: response.data.hexColor,
        });
      });
  }, [id]);

  return (
    <Tag
      overrides={TAG}
      closeable={false}
      variant={VARIANT.solid}
      kind={KIND.custom}
      color={party && party.hexColor}
    >
      {party && party.name}
    </Tag>

  );
});
