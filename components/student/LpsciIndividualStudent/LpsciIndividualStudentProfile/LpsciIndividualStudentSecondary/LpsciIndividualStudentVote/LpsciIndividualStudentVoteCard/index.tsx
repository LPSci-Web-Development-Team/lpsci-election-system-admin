// ANCHOR React
import React from 'react';

// ANCHOR Next
import { useRouter } from 'next/router';

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
  const router = useRouter();

  const onClick = React.useCallback(async () => {
    if (data.candidate) {
      await router.push(`/candidate/view/${data.candidate.id}`);
    }
  }, [data.candidate, router]);

  if (!data.candidate) {
    return null;
  }

  // TODO Improve UI
  return (
    <Block overrides={BLOCK}>
      <ParagraphMedium overrides={CONTENT}>
        {`${data.candidate.student.user.lastName}, ${data.candidate.student.user.firstName}`}
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
