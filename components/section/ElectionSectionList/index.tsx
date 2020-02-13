/* eslint-disable no-mixed-operators */
// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { styled } from 'baseui';
import { Tag, VARIANT, KIND } from 'baseui/tag';
import { ListItem, ListItemLabel } from 'baseui/list';
import { Block } from 'baseui/block';
import { Paragraph1 } from 'baseui/typography';

// ANCHOR Utils
import { GET } from '@lpsci/utils/axios/methods';

// ANCHOR Scoped Models
import { FetchedData } from '@lpsci/scoped-models/fetched-data/FetchedData';

// ANCHOR Models
import { IClassroomSection } from 'models/interfaces/Section';

// ANCHOR Components
import { ElectionSectionListButton } from '../ElectionSectionListButton';
import { ElectionSectionListHead } from '../ElectionSectionListHead';

// ANCHOR Styles
import {
  TAG, CONTAINER, SECTION_NAME, LIST_ITEM,
} from './styles';

const ListContainer = styled('ul', {
  width: '100%',
  marginTop: '30px',
  paddingLeft: 0,
  paddingRight: 0,
});

export const ElectionSectionList = React.memo(() => {
  const [fetchSection, setFetchSection] = FetchedData.useSelector((state) => [
    state.fetchSection, state.setFetchSection,
  ]);
  // ANCHOR Fetch all parties
  React.useEffect(() => {
    const fetchedSections: IClassroomSection[] = [];
    // TODO Fix this on production
    GET('/api/sections')
      .then((response) => {
        response.data.forEach((item: any) => {
          fetchedSections.push({
            id: item.id,
            name: item.name,
            gradeLevel: item.gradeLevel,
          });
          setFetchSection([...fetchedSections]);
        });
      });
  }, [setFetchSection]);

  return (
    <ListContainer>
      <ElectionSectionListHead />
      {
        fetchSection.map(({ id, name, gradeLevel }) => (
          <Block key={id} overrides={LIST_ITEM}>
            <ListItem
              artwork={() => (
                <Tag
                  overrides={TAG}
                  closeable={false}
                  variant={
                    gradeLevel === 12
                      ? VARIANT.outlined
                      : VARIANT.solid
                  }
                  kind={
                    gradeLevel === 11 || gradeLevel === 12
                      ? KIND.primary
                      : KIND.custom
                  }
                  color={
                    gradeLevel === 7 && '#4BB462'
                    || gradeLevel === 8 && '#FFD600'
                    || gradeLevel === 9 && '#EE3D48'
                    || gradeLevel === 10 && '#1EC9E8'
                    || 'black'
                  }
                >
                  {gradeLevel}
                </Tag>
              )}
              endEnhancer={() => (
                <ElectionSectionListButton name={name} gradeLevel={gradeLevel} />
              )}
            >
              <ListItemLabel>
                <Block overrides={CONTAINER}>
                  <Paragraph1 overrides={SECTION_NAME}>
                    {name.toUpperCase()}
                  </Paragraph1>
                </Block>
              </ListItemLabel>
            </ListItem>
          </Block>
        ))
      }
    </ListContainer>
  );
});
