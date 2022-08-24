import { createTheme, Grid, Typography, ThemeProvider } from "@mui/material";
import { useContext } from "react";
import { SignupBtns } from "..";
import { SignupProvider } from "../../contexts/SignupContext";
import AnimateBR from "../Motions/AnimateBR";
import AnimateUtoD from "../Motions/AnimateUtoD";
import Style from "./Step1.module.css";

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

function Step1() {
  const { data, setData, formErr } = useContext(SignupProvider);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
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
            <Typography variant='h2'>Tell us about you</Typography>
          </ThemeProvider>
        </AnimateUtoD>
      </Grid>
      <Grid item xs={11} sx={{ padding: "20px 0" }}>
        <AnimateBR>
          <div className={Style.step1Wrapper}>
            <div className={Style.childWrapper}>
              <div
                style={formErr.firstName && { border: "1px solid red" }}
                className={Style.formWrapper}
              >
                {typeof formErr.firstName !== "undefined" ? (
                  <label style={{ color: "red" }}>{formErr.firstName}</label>
                ) : (
                  <label>First Name</label>
                )}
                <div className={Style.inputWrapper}>
                  <input
                    value={data.firstName}
                    name='firstName'
                    type='text'
                    placeholder='Enter your first name'
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div
                className={Style.formWrapper}
                style={formErr.lastName && { border: "1px solid red" }}
              >
                {typeof formErr.lastName !== "undefined" ? (
                  <label style={{ color: "red" }}>{formErr.lastName}</label>
                ) : (
                  <label>Last Name</label>
                )}
                <div className={Style.inputWrapper}>
                  <input
                    id='lastName'
                    name='lastName'
                    type='text'
                    value={data.lastName}
                    placeholder='Enter your last name'
                    style={{}}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div
                className={Style.formWrapper}
                style={formErr.contact && { border: "1px solid red" }}
              >
                {typeof formErr.contact !== "undefined" ? (
                  <label style={{ color: "red" }}>{formErr.contact}</label>
                ) : (
                  <label>email or phone</label>
                )}
                <div className={Style.inputWrapper}>
                  <input
                    name='contact'
                    type='text'
                    placeholder='Enter your email or phone number'
                    value={data.contact}
                    onChange={handleChange}
                    style={{}}
                  />
                </div>
              </div>
              <SignupBtns />
            </div>
          </div>
        </AnimateBR>
      </Grid>
    </>
  );
}

export default Step1;
