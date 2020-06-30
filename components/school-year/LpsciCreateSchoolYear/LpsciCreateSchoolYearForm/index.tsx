// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import { styled } from 'baseui';

// ANCHOR Component
import { LpsciCreateSchoolYearStartYear } from './LpsciCreateSchoolYearStartYear';
import { LpsciCreateSchoolYearEndYear } from './LpsciCreateSchoolYearEndYear';
import { LpsciCreateSchoolYearButton } from './LpsciCreateSchoolYearButton';

// ANCHOR Styles
import { FORM } from './styles';

const LpsciForm = styled('form', FORM);

export const LpsciCreateSchoolYearForm = React.memo(() => (
  <LpsciForm>
    <LpsciCreateSchoolYearStartYear />
    <LpsciCreateSchoolYearEndYear />
    <LpsciCreateSchoolYearButton />
  </LpsciForm>
));
