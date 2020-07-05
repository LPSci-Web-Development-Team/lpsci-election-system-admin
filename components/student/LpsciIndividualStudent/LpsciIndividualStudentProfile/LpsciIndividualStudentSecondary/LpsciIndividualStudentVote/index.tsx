// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { Block } from 'baseui/block';

// ANCHOR Models
import { StudentData } from '@scoped-models/student/StudentData';

// ANCHOR Components
import { DashboardCard } from '@components/utils/DashboardCard';

// ANCHOR Styles
// import { Empty } from '@components/utils/Empty';
import { HISTORY } from './styles';
import { LpsciIndividualStudentVoteCard } from './LpsciIndividualStudentVoteCard';

export const LpsciIndividualStudentVote = React.memo(() => {
  const data = StudentData.useSelector((state) => state.data);

  if (!data) {
    return null;
  }

  return (
    <Block overrides={HISTORY}>
      {/* TODO {data.sections && data.sections.length > 0
        ? data.sections.map((item) => (
          <DashboardCard label={`S.Y. ${item.schoolYear?.year ?? 'Unknown'}`}>
            {`Grade ${item.gradeLevel} - ${item.name}`}
          </DashboardCard>
        ))
        : <Empty align="center" label="votes casted" />} */}
      <DashboardCard>
        <LpsciIndividualStudentVoteCard data="S.Y. 2019-2020" />
      </DashboardCard>
      <DashboardCard>
        <LpsciIndividualStudentVoteCard data="S.Y. 2020-2021" />
      </DashboardCard>
    </Block>
  );
});
