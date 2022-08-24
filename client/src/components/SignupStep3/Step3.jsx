import {
  createTheme,
  Grid,
  styled,
  MenuItem,
  Select,
  selectClasses,
  inputClasses,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { SignupBtns } from "..";
import { SignupProvider } from "../../contexts/SignupContext";
import AnimateBR from "../Motions/AnimateBR";
import AnimateUtoD from "../Motions/AnimateUtoD";
import Style from "./Step3.module.css";

const theme = createTheme();
const StyledSelect = styled(Select)(() => ({
  [`&.${inputClasses.underline}:before`]: {
    border: "none",
  },
  [`&.${inputClasses.input}:focus`]: {
    border: "none",
  },
  [`&.${inputClasses.input}:hover`]: {
    border: "none",
  },
  [`&.${inputClasses.root}:hover`]: {
    border: "none",
  },
  [`&.${selectClasses.r}:hover`]: {
    border: "none",
  },
}));

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
theme.typography.h5 = {
  "@media (max-width:600px)": {
    fontSize: "1rem",
  },
  fontSize: "1.2rem",
  color: "#344258",
  fontFamily: ["Montserrat", "sans-serif"].join(","),
  lineHeight: "1.2rem",
  fontWeight: "bold",
};

function Step3() {
  const { data, setData, formErr } = useContext(SignupProvider);
  const { userName } = data;

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
            <Typography variant='h2'>
              Let&#39;s Find a username for you
            </Typography>
          </ThemeProvider>
        </AnimateUtoD>
      </Grid>
      <Grid item xs={11} sx={{ padding: "20datapx 0" }}>
        <AnimateBR>
          <div className={Style.step3Wrapper}>
            <div className={Style.childWrapper}>
              <small>
                Username is your identity here. &#160;Make it unique.
              </small>
              <div
                className={Style.formWrapper}
                style={formErr.userName && { border: "1px solid red" }}
              >
                {formErr.userName ? (
                  <label style={{ color: "red" }}>{formErr.userName}</label>
                ) : (
                  <label>Username</label>
                )}

                <div className={Style.inputWrapper}>
                  <input
                    name='userName'
                    type='text'
                    value={userName}
                    onChange={handleChange}
                    placeholder='try a username'
                  />
                </div>
              </div>
              <AnimateUtoD>
                <ThemeProvider theme={theme}>
                  <Typography sx={{ textAlign: "center" }} variant='h5'>
                    or
                  </Typography>
                </ThemeProvider>
              </AnimateUtoD>
              <div className={Style.formWrapper} style={{ padding: "0" }}>
                <div className={Style.inputWrapper}>
                  <label style={{ paddingLeft: "0.7rem" }} htmlFor=''>
                    select username
                  </label>
                  <StyledSelect
                    name='userName'
                    onChange={handleChange}
                    fullWidth
                    value={userName}
                    sx={{
                      height: "20px",
                      borderBottom: "1px solid white",
                      paddingLeft: "12px",
                      fontSize: "12px",
                    }}
                    variant='standard'
                  >
                    <MenuItem value='banana'>banana</MenuItem>
                    <MenuItem value='buhuhuh'>buh</MenuItem>
                    <MenuItem value='hihihih'>Select username</MenuItem>
                    <MenuItem value=''>Select username</MenuItem>
                    <MenuItem value={userName}>{userName}</MenuItem>
                  </StyledSelect>
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

export default Step3;
