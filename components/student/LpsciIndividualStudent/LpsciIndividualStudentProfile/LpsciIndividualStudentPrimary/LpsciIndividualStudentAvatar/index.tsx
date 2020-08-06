// ANCHOR React
import React from 'react';

// ANCHOR Base
import { Avatar } from 'baseui/avatar';

// ANCHOR Styles
import { StudentData } from '@scoped-models/student/StudentData';
import { useAvatar } from '@firebase/hooks/useAvatar';
import { AVATAR } from './styles';

export const LpsciIndividualStudentAvatar = React.memo(() => {
  const [src, alt] = StudentData.useSelectors((state) => [
    state.data.user.displayPhotoUuid,
    `${state.data.user.firstName} ${state.data.user.lastName}`,
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
