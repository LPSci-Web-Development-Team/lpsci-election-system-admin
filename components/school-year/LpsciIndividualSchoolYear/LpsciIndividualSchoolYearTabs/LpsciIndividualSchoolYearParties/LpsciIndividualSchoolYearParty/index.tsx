// ANCHOR React
import React from 'react';

// ANCHOR Next
import { useRouter } from 'next/router';

// ANCHOR Base
import { ListItem, ListItemLabel } from 'baseui/list';
import { Tag, KIND, VARIANT } from 'baseui/tag';
import { Button, SHAPE, SIZE } from 'baseui/button';
import { Show } from 'baseui/icon';

// ANCHOR Results
import { IPartyResult } from '@api/results/party';

// ANCHOR Styles
import { LIST, TAG } from './styles';

interface IProps {
  data: IPartyResult;
}

export const LpsciIndividualSchoolYearParty = ({
  data,
}: IProps) => {
  const router = useRouter();

  const artwork = React.useCallback(() => (
    <Tag
      closeable={false}
      kind={KIND.custom}
      color={data.color}
      variant={VARIANT.solid}
      overrides={TAG}
    >
      {data.color}
    </Tag>
  ), [data.color]);

  const onClick = React.useCallback(() => (
    router.push(`/party/view/${data.id}`)
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
      <ListItemLabel>{data.name}</ListItemLabel>
    </ListItem>
  );
};
