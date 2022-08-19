import React from 'react';
import {
  createTheme,
  Grid,
  Link,
  ThemeProvider,
  Typography,
} from '@mui/material';
import { SignupBtns } from '..';
import AnimateBR from '../Motions/AnimateBR';
import AnimateUtoD from '../Motions/AnimateUtoD';
import Style from './Step2.module.css';

const theme = createTheme();
theme.typography.h2 = {
  '@media (max-width:600px)': {
    fontSize: '1.5rem',
  },
  color: '#344258',
  fontFamily: ['Montserrat', 'sans-serif'].join(','),
  lineHeight: '1.2rem',
  fontWeight: '400',
  transform: 'scale(1,0.9)',
};
function Step2() {
  return (
    <>
      <Grid
        item
        xs={12}
        sx={{ marginTop: { xs: 2, md: 10 } }}
        justifyContent="center"
        display="flex"
      >
        <AnimateUtoD>
          <ThemeProvider theme={theme}>
            <Typography variant="h2">Let's Verify</Typography>
          </ThemeProvider>
        </AnimateUtoD>
      </Grid>
      <Grid item xs={11} sx={{ padding: '20px 0' }}>
        <AnimateBR>
          <div className={Style.step2Wrapper}>
            <div className={Style.childWrapper}>
              <small>An OTP has been sent to your email/phone</small>
              <div className={Style.formWrapper}>
                <label>OTP</label>
                <div className={Style.inputWrapper}>
                  <input
                    name="otp"
                    type="text"
                    placeholder="Enter the OTP"
                    style={{}}
                  />
                </div>
              </div>
              <div className={Style.resendLink}>
                <small>Didn&rsquo;t get one ? </small>
                <Link>Resend OTP</Link>
              </div>
              <SignupBtns />
            </div>
          </div>
        </AnimateBR>
      </Grid>
    </>
  );
}

export default Step2;
