import React, { useState } from 'react'
import { Grid, Stepper, Step, styled, StepConnector, StepLabel, StepConnectorIcon, stepConnectorClasses, Checkbox, Button } from '@mui/material'
import {  BsFillPatchCheckFill } from 'react-icons/bs'
import propTypes from 'prop-types'

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
    transition:'0.5s'

  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : 'orange',
    borderTopWidth: 3,
    borderRadius: 1,
  },
}))

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
  display: 'flex',
  height: 22,
  alignItems: 'center',
  ...(ownerState.active && {
    color: '#784af4',
  }),
  '& .QontoStepIcon-completedIcon': {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
  '& .QontoStepIcon-circle': {
    width: 10,
    height: 10,
    borderRadius: '50%',
    border:'1px solid #784af4',
    backgroundColor: 'currentColor',
  },
}))

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <BsFillPatchCheckFill className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: propTypes.bool,
  className: propTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: propTypes.bool,
};





function Signup() {
  const [values, setValues] = useState({})
  const steps = [{value:'personal',step:0}, {value:'otp',step:1}, {value:'finish',step:2}];
  const [currentStep,setCurrentStep] = useState(0)
  const incrementVal =() =>{
    setCurrentStep(currentStep+1)
  }

  return (
    <div>
      <Grid container justifyContent={'center'} sx={{ marginX: 'auto', marginY: '2rem' }} maxWidth='md'>
        <header style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center' }}>
          <Grid item xs={10} xl={10} sm={10}  >
            <Stepper alternativeLabel activeStep={currentStep} connector={<QontoConnector />}>
                <Step >
                  <StepLabel StepIconComponent={QontoStepIcon}>bamnan</StepLabel>
                </Step>
                <Step >
                  <StepLabel StepIconComponent={QontoStepIcon}>bamnan</StepLabel>
                </Step>
                <Step >
                  <StepLabel StepIconComponent={QontoStepIcon}>bamnan</StepLabel>
                </Step>
            </Stepper>
          </Grid>
        </header>
        <Grid item xs={12}><Button fullWidth variant='contained' onClick={incrementVal}>Increment</Button>
        </Grid>
      </Grid>

    </div>
  )
}

export default Signup
