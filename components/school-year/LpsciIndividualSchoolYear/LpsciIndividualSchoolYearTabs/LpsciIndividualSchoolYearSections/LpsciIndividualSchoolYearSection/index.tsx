// ANCHOR React
import React from 'react';

// ANCHOR Next
import { useRouter } from 'next/router';

// ANCHOR Base
import { ListItem, ListItemLabel } from 'baseui/list';
import { Tag, KIND, VARIANT } from 'baseui/tag';
import { Button, SHAPE, SIZE } from 'baseui/button';
import { Show } from 'baseui/icon';

// ANCHOR Hooks
import { useConstant } from '@lpsci/hooks';

// ANCHOR Results
import { ISectionResult } from '@api/results/section';

// ANCHOR Themes
import { COLORS } from '@themes/constant';

// ANCHOR Styles
import { LIST, TAG } from './styles';

interface IProps {
  data: ISectionResult;
}

type StringKV = {
  [string: string]: string;
};

export const LpsciIndividualSchoolYearSection = ({
  data,
}: IProps) => {
  const router = useRouter();

  const tagColor: StringKV = useConstant(() => ({
    grade7: COLORS.green,
    grade8: COLORS.yellow,
    grade9: COLORS.red,
    grade10: COLORS.blue,
    grade11: COLORS.black,
    grade12: COLORS.black,
  }));

  const artwork = React.useCallback(() => (
    <Tag
      closeable={false}
      kind={KIND.custom}
      color={tagColor[`grade${data.gradeLevel}`]}
      variant={VARIANT.solid}
      overrides={TAG}
    >
      {`Grade ${data.gradeLevel}`}
    </Tag>
  ), [data.gradeLevel, tagColor]);

  const onClick = React.useCallback(() => (
    router.push(`/section/view/${data.id}`)
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
