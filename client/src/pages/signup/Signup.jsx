import React, { useState } from 'react'
import { Grid, Button, Box } from '@mui/material'
import StepperComp from '../../components/Stepper/StepperComp';
import Step1 from '../../components/SignupStep1/Step1';
import Step2 from '../../components/SignupStep2/Step2';
import Step3 from '../../components/SignupStep3/Step3';
import FinishSignup from '../../components/SignupFinish/FinishSignup';
import { useContext } from 'react';
import { SignupProvider } from '../../contexts/SignupContext';

function Signup() {
  const { currentStep } = useContext(SignupProvider)
  const steps = ['personal', 'otp', 'username', 'password', 'profilePic', 'finish'];
  return (

    <div style={{ overflow: "hidden" }}>
      <Grid container justifyContent={'center'} sx={{ marginX: 'auto', marginY: { xs: 'calc(10%)', md: '3rem' } }} maxWidth='md'>
        <header style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center' }}>
          <Grid item xs={12} xl={12} sm={12} sx={{ marginBottom: 3 }}  >
            <StepperComp currentStep={currentStep} steps={steps} />
          </Grid>
        </header>
        <main style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', overflow: "hidden" }}>
          <Grid container maxWidth='xl' dispay='flex' justifyContent='center' >
            {currentStep === 0 ? <Step1 /> : currentStep === 1 ? <Step2 /> : currentStep === 2 ? <Step3 /> : currentStep === 3 ? <Step1 /> : currentStep === 4 ? <Step2 /> : currentStep === 5 ? <FinishSignup /> : ''}
            <Grid item xs={12} display='flex' justifyContent='center'>
            </Grid>
          </Grid>
        </main>
      </Grid>

    </div>
  )
}

export default Signup
