import React, { useState } from 'react'
import { Grid, Button } from '@mui/material'
import StepperComp from '../../components/Stepper/StepperComp';
import '../../components/SignupStep1/Step1.css'
import Step1 from '../../components/SignupStep1/Step1';



function Signup() {
  const [currentStep, setCurrentStep] = useState(0)
  const steps = ['personal', 'otp', 'username', 'password', 'profilePic', 'finish'];
  const incrementVal = () => {
    setCurrentStep(currentStep + 1)
  }

  return (
    <div>
      <Grid container justifyContent={'center'} sx={{ marginX: 'auto', marginY: '2rem' }} maxWidth='md'>
        <header style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center' }}>
          <Grid item xs={12} xl={12} sm={12} sx={{ marginBottom: 5 }}  >
            <StepperComp currentStep={currentStep} steps={steps} />
          </Grid>
        </header>
        <Grid item xs={12}>
          <Grid container maxWidth='xl' dispay='flex' justifyContent='center' >
            <main style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Step1 />
              <Button onClick={incrementVal}>hello</Button>
            </main>
          </Grid>
        </Grid>

      </Grid>

    </div>
  )
}

export default Signup
