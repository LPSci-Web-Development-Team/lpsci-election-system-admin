// ANCHOR React
import * as React from 'react';

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

export const LpsciIndividualCandidateVoteCard = ({
  data,
}: IProps) => {
  const router = useRouter();

  const onClick = React.useCallback(async () => {
    if (data.student) {
      await router.push(`/student/view/${data.student.id}`);
    }
  }, [data.student, router]);

  if (!data.student) {
    return null;
  }

  // TODO Improve UI
  return (
    <Block overrides={BLOCK}>
      <ParagraphMedium overrides={CONTENT}>
        {`${data.student.user.lastName}, ${data.student.user.firstName}`}
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
