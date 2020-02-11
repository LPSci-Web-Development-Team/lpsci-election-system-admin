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
    id: '',
    name: '',
    color: '',
  });

  React.useEffect(() => {
    // TODO Fix this on production
    GET(`http://192.168.1.8:5000/api/parties/${id}`)
      .then((response) => {
        setParty({
          id: response.data.id,
          name: response.data.name,
          color: response.data.hexColor,
        });
      });
  }, [id]);

  return (
    <Tag
      overrides={TAG}
      closeable={false}
      variant={VARIANT.solid}
      kind={KIND.custom}
      color={party && party.color}
    >
      {party && party.name}
    </Tag>

  );
});
