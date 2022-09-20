import {
  Button,
  createTheme,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { VscArrowLeft, VscArrowRight } from "react-icons/vsc";
import styled from "@emotion/styled";
import AnimateBR from "../Motions/AnimateBR";
import AnimateUtoD from "../Motions/AnimateUtoD";
import Style from "./FinishSignup.module.css";
import Connect from "./assets/images/Connected world-rafiki.svg";
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
theme.typography.h3 = {
  fontSize: "2rem",
  "@media (max-width:600px)": {
    fontSize: "1.8rem",
  },
  color: "#344258",
  fontFamily: ["Montserrat", "sans-serif"].join(","),
  lineHeight: "1.2rem",
  fontWeight: "400",
};
const Gobtn = styled(Button)({
  borderColor: "#e8e8e8",
  backgroundColor: "#5596e6",
  color: "#5596e6",
  "&:hover": {
    borderColor: "#e8e8e8",
    background: "#5596e6",
    color: "white",
    boxShadow: "0px 1px 5px #e8e8e8",
  },
});
const BackBtn = styled(Button)({
  borderColor: "#e8e8e8",
  backgroundColor: "white",
  textTransform: "none",
  fontSize: ".5rem",
  "&:hover": {
    boxShadow: "0px 1px 5px #e8e8e8",
  },
});

function FinishSignup() {
  const { currentStep, setCurrentStep } = useContext(SignupProvider);
  const decrement = () => {
    setCurrentStep(currentStep - 1);
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
              You&rsquo;re all set.&#160;Ready?
            </Typography>
          </ThemeProvider>
        </AnimateUtoD>
      </Grid>
      <Grid item xs={11} sx={{ padding: "20px 0" }}>
        <AnimateBR>
          <div className={Style.step2Wrapper}>
            <div className={Style.childWrapper}>
              <img
                style={{ width: "100%", height: "80%" }}
                src={Connect}
                alt=''
              />
              <Grid
                container
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: { xs: "20px", md: "30px" },
                  }}
                >
                  <ThemeProvider theme={theme}>
                    <Typography variant='h3'>Explore the future</Typography>
                  </ThemeProvider>
                </Grid>
                <Grid
                  item
                  md={12}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "30px",
                  }}
                >
                  <BackBtn
                    onClick={decrement}
                    style={{ marginRight: "10px" }}
                    variant='standard'
                  >
                    Go back &#160;
                    <VscArrowLeft />
                  </BackBtn>
                  <Gobtn variant='outlined'>
                    <VscArrowRight className={Style.nextArrow} />
                  </Gobtn>
                </Grid>
              </Grid>
            </div>
          </div>
        </AnimateBR>
      </Grid>
    </>
  );
}

export default FinishSignup;
