// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';
import { Show } from 'baseui/icon';
import { ParagraphMedium } from 'baseui/typography';
import { Button, SHAPE, SIZE } from 'baseui/button';

// ANCHOR Result
import { IVoteResult } from '@api/results/vote';

// ANCHOR Styles
import { CONTENT, BLOCK } from './styles';

interface IProps {
  data: IVoteResult;
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
        {data.candidate.party?.schoolYear ?? 'Unknown'}
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
