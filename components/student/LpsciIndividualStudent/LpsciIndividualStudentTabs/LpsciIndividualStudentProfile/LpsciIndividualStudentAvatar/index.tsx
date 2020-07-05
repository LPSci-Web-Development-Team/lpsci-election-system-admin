// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';
import { Avatar } from 'baseui/avatar';

// ANCHOR Styles
import { StudentData } from '@scoped-models/student/StudentData';
import { useAvatar } from '@firebase/hooks/useAvatar';
import { BLOCK, AVATAR } from './styles';

export const LpsciIndividualStudentAvatar = React.memo(() => {
  const [src, alt] = StudentData.useSelectors((state) => [
    state.data.user.displayPhotoUuid,
    `${state.data.user.firstName} ${state.data.user.lastName}`,
  ]);

  const avatar = useAvatar(alt);

  return (
    <Block overrides={BLOCK}>
      <Avatar
        overrides={AVATAR}
        name={alt}
        size="scale1400"
        src={src ?? avatar}
      />
    </Block>
  );
});
