// ANCHOR React
import React from 'react';

// ANCHOR Base
import { Avatar } from 'baseui/avatar';

// ANCHOR Styles
import { CandidateData } from '@scoped-models/candidate/CandidateData';
import { useAvatar } from '@firebase/hooks/useAvatar';
import { AVATAR } from './styles';

export const LpsciIndividualCandidateAvatar = React.memo(() => {
  const [src, alt] = CandidateData.useSelectors((state) => [
    state.data.student.user.displayPhotoUuid,
    `${state.data.student.user.firstName} ${state.data.student.user.lastName}`,
  ]);

  const avatar = useAvatar(alt);

  return (
    <Avatar
      overrides={AVATAR}
      name={alt}
      size="240px"
      src={src ?? avatar}
    />
  );
});
