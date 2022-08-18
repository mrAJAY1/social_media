import React, { useState } from 'react'

import { Grid, Stepper, Step, StepLabel, Button } from '@mui/material'
import StepperComp from '../../components/Stepper/StepperComp';




function Signup() {
  const [values, setValues] = useState({})
  const [currentStep, setCurrentStep] = useState(0)
  const steps = ['personal','otp','username','password','profilePic','finish'];
  const incrementVal = () => {
    setCurrentStep(currentStep + 1)
  }

  return (
    <div>
      <Grid container justifyContent={'center'} sx={{ marginX: 'auto', marginY: '2rem' }} maxWidth='md'>
        <header style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center' }}>
          <Grid item xs={12} xl={10} sm={12} sx={{marginBottom:5}}  >
            <StepperComp currentStep={currentStep} steps={steps} />
          </Grid>
        </header>
        <Grid item xs={12}><Button fullWidth variant='contained' onClick={incrementVal}>Increment</Button>
        </Grid>
      </Grid>

    </div>
  )
}

export default Signup
