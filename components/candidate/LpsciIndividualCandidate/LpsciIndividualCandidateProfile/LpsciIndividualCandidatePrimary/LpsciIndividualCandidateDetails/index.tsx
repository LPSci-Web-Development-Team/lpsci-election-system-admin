// ANCHOR React
import React from 'react';

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
import { CandidateData } from '@scoped-models/candidate/CandidateData';

// ANCHOR API
import { ESex } from '@api/results/user';

// ANCHOR Components
import { Divider } from '@components/utils/Divider';
import { LpsciIndividualCandidateIcon } from './LpsciIndividualCandidateDetailsIcon';

// ANCHOR Styles
import { LRN, NAME } from './styles';

export const LpsciIndividualCandidateDetails = React.memo(() => {
  const data = CandidateData.useSelector((state) => state.data);

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
  } = data.student.user;

  const birthDay = new Date(birthDate).toDateString();

  return (
    <Block>
      <LabelLarge overrides={NAME}>
        {`${firstName}${middleName ? ` ${middleName.charAt(0)}.` : ''} ${lastName}`}
      </LabelLarge>
      <LabelSmall overrides={LRN}>
        {`Learner Ref No: ${data.student.learnerReferenceNumber}`}
      </LabelSmall>
      <Divider />
      <LpsciIndividualCandidateIcon
        icon={ic_cake}
        label={birthDay}
      />
      <LpsciIndividualCandidateIcon
        icon={sex === ESex.M ? mars : venus}
        label={sex}
      />
      <LpsciIndividualCandidateIcon
        icon={ic_place}
        label={`${barangay}, ${city}`}
      />
      <Divider />
      <LabelMedium marginBottom="8px">Contacts</LabelMedium>
      <LpsciIndividualCandidateIcon
        icon={ic_email}
        label={email}
      />
      {phoneNumber && (
        <LpsciIndividualCandidateIcon
          icon={ic_phone}
          label={phoneNumber}
        />
      )}
    </Block>
  );
});
