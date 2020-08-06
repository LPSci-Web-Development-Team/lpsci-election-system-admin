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
import { IStudentResult } from '@api/results/student';
import { ESex } from '@api/results/user';

// ANCHOR Themes
import { COLORS } from '@themes/constant';

// ANCHOR Styles
import { LIST, TAG } from './styles';

interface IProps {
  data: IStudentResult;
  index: number;
}

type StringKV = {
  [string: string]: string;
};

export const LpsciIndividualSectionStudent = ({
  data, index,
}: IProps) => {
  const router = useRouter();

  const tagColor: StringKV = useConstant(() => ({
    male: COLORS.blue,
    female: COLORS.yellow,
  }));

  const artwork = React.useCallback(() => (
    <Tag
      closeable={false}
      kind={KIND.custom}
      color={tagColor[data.user.sex ?? ESex.M]}
      variant={VARIANT.solid}
      overrides={TAG}
    >
      {data.user.sex === ESex.M
        ? `B${index}`
        : `G${index}`}
    </Tag>
  ), [data.user.sex, index, tagColor]);

  const onClick = React.useCallback(() => (
    router.push(`/student/view/${data.id}`)
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
        {`${data.user.lastName}, ${data.user.firstName}`}
      </ListItemLabel>
    </ListItem>
  );
};
