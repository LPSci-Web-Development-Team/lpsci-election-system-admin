// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';
import { LabelSmall, LabelLarge, LabelMedium } from 'baseui/typography';

// ANCHOR React Icon
import { ic_cake } from 'react-icons-kit/md/ic_cake';
import { mars } from 'react-icons-kit/fa/mars';
import { venus } from 'react-icons-kit/fa/venus';
import { ic_place } from 'react-icons-kit/md/ic_place';
import { ic_email } from 'react-icons-kit/md/ic_email';
import { ic_phone } from 'react-icons-kit/md/ic_phone';

// ANCHOR Models
import { StudentData } from '@scoped-models/student/StudentData';

// ANCHOR API
import { ESex } from '@api/results/user';

// ANCHOR Components
import { Divider } from '@components/utils/Divider';
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
    barangay,
    city,
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
      <LpsciIndividualStudentIcon
        icon={ic_place}
        label={`${barangay}, ${city}`}
      />
      <Divider />
      <LabelMedium marginBottom="8px">Contacts</LabelMedium>
      <LpsciIndividualStudentIcon
        icon={ic_email}
        label={email}
      />
      {phoneNumber && (
        <LpsciIndividualStudentIcon
          icon={ic_phone}
          label={phoneNumber}
        />
      )}
    </Block>
  );
});
