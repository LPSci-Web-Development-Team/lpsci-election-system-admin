// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';

// ANCHOR Models
import { StudentData } from '@scoped-models/student/StudentData';
import { LabelSmall, LabelLarge } from 'baseui/typography';

// ANCHOR Styles
import { LRN } from './styles';

export const LpsciIndividualStudentDetails = React.memo(() => {
  const data = StudentData.useSelector((state) => state.data);

  const {
    firstName,
    middleName,
    lastName,
    birthDate,
    sex,
    email,
    phoneNumber,
  } = data.user;

  return (
    <Block>
      <LabelLarge>
        {`${firstName}${middleName ? ` ${middleName.charAt(0)}.` : ''} ${lastName}`}
      </LabelLarge>
      <LabelSmall overrides={LRN}>
        {`Learner Ref No: ${data.learnerReferenceNumber}`}
      </LabelSmall>
    </Block>
  );
});
