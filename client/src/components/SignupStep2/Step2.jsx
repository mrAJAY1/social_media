import { useContext } from "react";
import {
  createTheme,
  Grid,
  Link,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { SignupBtns } from "..";
import AnimateBR from "../Motions/AnimateBR";
import AnimateUtoD from "../Motions/AnimateUtoD";
import Style from "./Step2.module.css";
import { SignupProvider } from "../../contexts/SignupContext";

const theme = createTheme();
theme.typography.h2 = {
  "@media (max-width:600px)": {
    fontSize: "1.5rem",
  },
  color: "#344258",
  fontFamily: ["Montserrat", "sans-serif"].join(","),
  lineHeight: "1.2rem",
  fontWeight: "400",
  transform: "scale(1,0.9)",
};
function Step2() {
  const { localOtp, setLocalOtp, formErr } = useContext(SignupProvider);

  const handleChange = (e) => {
    setLocalOtp(e.target.value);
  };

  return (
    <>
      <Grid
        item
        xs={12}
        sx={{ marginTop: { xs: 2, md: 10 } }}
        justifyContent='center'
        display='flex'
      >
        <AnimateUtoD>
          <ThemeProvider theme={theme}>
            <Typography variant='h2'>Let&#39;s Verify</Typography>
          </ThemeProvider>
        </AnimateUtoD>
      </Grid>
      <Grid item xs={11} sx={{ padding: "20px 0" }}>
        <AnimateBR>
          <div className={Style.step2Wrapper}>
            <div className={Style.childWrapper}>
              <small>An OTP has been sent to your email/phone</small>
              <div
                style={formErr.otp && { border: "1px solid red" }}
                className={Style.formWrapper}
              >
                {typeof formErr.otp !== "undefined" ? (
                  <label style={{ color: "red" }}>{formErr.otp}</label>
                ) : (
                  <label>OTP</label>
                )}
                <div className={Style.inputWrapper}>
                  <input
                    name='otp'
                    value={localOtp}
                    type='text'
                    placeholder='Enter the OTP'
                    style={{}}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={Style.resendLink}>
                <small>Didn&rsquo;t get one ? </small>
                <Link to='/'>Resend OTP</Link>
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
