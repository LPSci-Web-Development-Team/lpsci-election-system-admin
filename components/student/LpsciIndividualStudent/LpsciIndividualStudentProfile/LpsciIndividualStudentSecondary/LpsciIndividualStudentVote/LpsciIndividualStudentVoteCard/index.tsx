// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';
import { Show } from 'baseui/icon';
import { ParagraphMedium } from 'baseui/typography';
import { Button, SHAPE, SIZE } from 'baseui/button';

// ANCHOR Styles
import { CONTENT, BLOCK } from './styles';

interface IProps {
  data: any;
}

export const LpsciIndividualStudentVoteCard = ({
  data,
}: IProps) => {
  const onClick = React.useCallback(() => {
    //
  }, []);

  return (
    <Block overrides={BLOCK}>
      <ParagraphMedium overrides={CONTENT}>
        {data}
      </ParagraphMedium>
      <Button
        onClick={onClick}
        shape={SHAPE.round}
        size={SIZE.compact}
      >
        <Show />
      </Button>
    </Block>
  );
};
