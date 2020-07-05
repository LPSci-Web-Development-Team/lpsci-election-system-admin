// ANCHOR React
import * as React from 'react';

// ANCHOR Next
import { useRouter } from 'next/router';

// ANCHOR Base
import { ListItem, ListItemLabel } from 'baseui/list';
import { Tag, KIND, VARIANT } from 'baseui/tag';
import { Button, SHAPE, SIZE } from 'baseui/button';
import { Show } from 'baseui/icon';

// ANCHOR Results
import { ICandidateResult } from '@api/results/candidate';

// ANCHOR Styles
import { LIST, TAG } from './styles';

interface IProps {
  data: ICandidateResult;
}

export const LpsciIndividualPartyCandidate = ({
  data,
}: IProps) => {
  const router = useRouter();

  const artwork = React.useCallback(() => (
    <Tag
      closeable={false}
      kind={KIND.primary}
      variant={VARIANT.solid}
      overrides={TAG}
    >
      {data.position}
    </Tag>
  ), [data.position]);

  const onClick = React.useCallback(() => (
    router.push(`/candidate/view/${data.id}`)
  ), [data.id, router]);

  const endEnhancer = React.useCallback(() => (
    <Button
      onClick={onClick}
      shape={SHAPE.round}
      size={SIZE.compact}
    >
      <Show />
    </Button>
  ), [onClick]);

  return (
    <ListItem
      artwork={artwork}
      overrides={LIST}
      endEnhancer={endEnhancer}
    >
      <ListItemLabel>
        {`${data.student.user.lastName}, ${data.student.user.firstName}`}
      </ListItemLabel>
    </ListItem>
  );
};
