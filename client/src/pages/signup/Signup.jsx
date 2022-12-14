import { Grid } from "@mui/material";

import { useContext } from "react";
import propTypes from "prop-types";
import {
  SignupStep1 as Step1,
  SignupStep2 as Step2,
  SignupStep3 as Step3,
} from "../../components/SignupExports";
import { Stepper, SignupFinal } from "../../components";
import { SignupProvider } from "../../contexts/SignupContext";
import Step5 from "../../components/SignupStep5/Step5";
import Step4 from "../../components/SignupStep4/Step4";

function RenderStep({ currentStep }) {
  switch (currentStep) {
    case 0:
      return <Step1 />;
    case 1:
      return <Step2 />;
    case 2:
      return <Step3 />;
    case 3:
      return <Step4 />;
    case 4:
      return <Step5 />;
    case 5:
      return <SignupFinal />;
    default:
      return null;
  }
}

RenderStep.propTypes = {
  currentStep: propTypes.number,
};

function Signup() {
  const { currentStep, data, setData } = useContext(SignupProvider);
  const steps = [
    "personal",
    "otp",
    "username",
    "password",
    "profilePic",
    "finish",
  ];
  return (
    <div style={{ overflow: "hidden" }}>
      <Grid
        container
        justifyContent='center'
        sx={{ marginX: "auto", marginY: { xs: "calc(10%)", md: "3rem" } }}
        maxWidth='md'
      >
        <header
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid item xs={12} xl={12} sm={12} sx={{ marginBottom: 3 }}>
            <Stepper currentStep={currentStep} steps={steps} />
          </Grid>
        </header>
        <main
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <Grid container maxWidth='xl' dispay='flex' justifyContent='center'>
            <RenderStep
              currentStep={currentStep}
              data={data}
              setData={setData}
            />
            <Grid item xs={12} display='flex' justifyContent='center' />
          </Grid>
        </main>
      </Grid>
    </div>
  );
}
export default Signup;
