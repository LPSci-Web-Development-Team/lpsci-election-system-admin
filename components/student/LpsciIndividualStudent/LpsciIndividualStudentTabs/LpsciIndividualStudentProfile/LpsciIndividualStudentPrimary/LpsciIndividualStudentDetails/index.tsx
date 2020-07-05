// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';
import { LabelSmall, LabelLarge } from 'baseui/typography';

// ANCHOR React Icon
import { ic_cake } from 'react-icons-kit/md/ic_cake';
import { mars } from 'react-icons-kit/fa/mars';
import { venus } from 'react-icons-kit/fa/venus';

// ANCHOR Models
import { StudentData } from '@scoped-models/student/StudentData';

// ANCHOR Components
import { Divider } from '@components/utils/Divider';
import { ESex } from '@api/results/user';
import { LpsciIndividualStudentIcon } from './LpsciIndividualStudentDetailsIcon';

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

  const birthDay = new Date(birthDate).toDateString();

  return (
    <Block>
      <LabelLarge>
        {`${firstName}${middleName ? ` ${middleName.charAt(0)}.` : ''} ${lastName}`}
      </LabelLarge>
      <LabelSmall overrides={LRN}>
        {`Learner Ref No: ${data.learnerReferenceNumber}`}
      </LabelSmall>
      <Divider />
      <LpsciIndividualStudentIcon
        icon={ic_cake}
        label={birthDay}
      />
      <LpsciIndividualStudentIcon
        icon={sex === ESex.M ? mars : venus}
        label={sex}
      />
    </Block>
  );
});
