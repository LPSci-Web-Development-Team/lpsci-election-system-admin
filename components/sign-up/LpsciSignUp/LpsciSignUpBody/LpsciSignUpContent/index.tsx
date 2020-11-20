// ANCHOR React
import React from 'react';

// ANCHOR Base
import { withStyle } from 'baseui';
import { StyledBody } from 'baseui/card';

// ANCHOR Styles
import { FORM } from './styles';

// ANCHOR Components
import { LpsciSignUpEmail } from './LpsciSignUpEmail';
import { LpsciSignUpPassword } from './LpsciSignUpPassword';
import { LpsciSignUpFirstName } from './LpsciSignUpFirstName';
import { LpsciSignUpMiddleName } from './LpsciSignUpMiddleName';
import { LpsciSignUpLastName } from './LpsciSignUpLastName';
import { LpsciSignUpStreetAddress } from './LpsciSignUpStreetAddress';
import { LpsciSignUpBarangay } from './LpsciSignUpBarangay';
import { LpsciSignUpCity } from './LpsciSignUpCity';
import { LpsciSignUpSex } from './LpsciSignUpSex';
import { LpsciSignUpBirthDate } from './LpsciSignUpBirthDate';
import { LpsciSignUpPhoneNumber } from './LpsciSignUpPhoneNumber';

const LpsciForm = withStyle(StyledBody, FORM);

export const LpsciSignUpContent = React.memo(() => (
  <LpsciForm>
    <LpsciSignUpFirstName />
    <LpsciSignUpMiddleName />
    <LpsciSignUpLastName />
    <LpsciSignUpEmail />
    <LpsciSignUpPassword />
    <LpsciSignUpSex />
    <LpsciSignUpBirthDate />
    <LpsciSignUpPhoneNumber />
    <LpsciSignUpStreetAddress />
    <LpsciSignUpBarangay />
    <LpsciSignUpCity />
  </LpsciForm>
));
