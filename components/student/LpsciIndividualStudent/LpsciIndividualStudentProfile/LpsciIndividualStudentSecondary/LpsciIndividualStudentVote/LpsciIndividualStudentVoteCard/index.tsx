// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';
import { Show } from 'baseui/icon';
import { ParagraphMedium } from 'baseui/typography';
import {
  Button, SHAPE, SIZE, KIND,
} from 'baseui/button';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
  ROLE,
} from 'baseui/modal';

// ANCHOR Result
import { IVoteResult } from '@api/results/vote';

// ANCHOR Hooks
import { useToggle } from '@lpsci/hooks';

// ANCHOR Styles
import { CONTENT, BLOCK } from './styles';

interface IProps {
  data: IVoteResult;
}

export const LpsciIndividualStudentVoteCard = ({
  data,
}: IProps) => {
  const { state, show, hide } = useToggle(false);

  return (
    <Block overrides={BLOCK}>
      <ParagraphMedium overrides={CONTENT}>
        {data.candidate.party?.schoolYear ?? 'Unknown'}
      </ParagraphMedium>
      <Button
        onClick={show}
        shape={SHAPE.round}
        size={SIZE.compact}
      >
        <Show />
      </Button>
      <Modal
        onClose={hide}
        closeable
        isOpen={state}
        animate
        autoFocus
        size={SIZE.default}
        role={ROLE.dialog}
      >
        <ModalHeader>Hello world</ModalHeader>
        <ModalBody>
          Proin ut dui sed metus pharetra hend rerit vel non
          mi. Nulla ornare faucibus ex, non facilisis nisl.
          Maecenas aliquet mauris ut tempus.
        </ModalBody>
        <ModalFooter>
          <ModalButton kind={KIND.tertiary}>
            Cancel
          </ModalButton>
          <ModalButton>Okay</ModalButton>
        </ModalFooter>
      </Modal>
    </Block>
  );
};
