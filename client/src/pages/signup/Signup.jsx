import React, { useState } from 'react'
import { Grid, Stepper, Step, styled, StepConnector, StepLabel, StepConnectorIcon, stepConnectorClasses, Checkbox, Button } from '@mui/material'
import { BsFillPatchCheckFill,BsCartCheckFill,BsFillBagCheckFill } from 'react-icons/bs'
import propTypes from 'prop-types'

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 4,
    left: 'calc(-50% + 3px)',
    right: 'calc(50% + 3px)',
    zIndex: '-1',
    transition: '0.5s',
    border: '1px solid black',
    borderColor: 'white',
    borderRight: '0',
    borderLeft: 'currentColor',
    borderWidth: 5

  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#5596E6',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#5596E6',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : 'transparent',
    borderTopWidth: 5,
    borderRadius: 1,
    transition: 'ease-in 0.3s'
  },
}))

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
  display: 'flex', 
  justifyContent:'center',
  height: 22,
  alignItems: 'center',
  transition: "0.5s",
  borderRadius: '50%',
  backgroundColor:'currentColor',
  ...(ownerState.active && {
    width:22,
    backgroundColor:'#5596E6',
    color: 'white',
    borderRadius: '50%',
    boxShadow: '0px 0px 5px gray'
  }),
  '& .QontoStepIcon-completedIcon': {
    color: 'white',
    backgroundColor: "#5596E6",
    zIndex: 1,
    fontSize: 22,
    border: '1px solid white',
    borderRadius: '50%',
    borderWidth: 3,
  },
  '& .QontoStepIcon-circle': {
    width: 22,
    height: 22,
    borderRadius: '50%',
    border: '2px solid #5596E6',
    color:'currentColor'
  },
  // '& .QontoStepIcon-circle': {
  //   width: 20,
  //   height: 20,
  //   borderRadius: '50%',
  //   border: '2px solid #5596E6',
  //   backgroundColor: 'currentColor',
  // },
}))

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {active?<BsFillBagCheckFill/>:completed ? (
        <BsFillPatchCheckFill className="QontoStepIcon-completedIcon" />
      ):(
        // <div style={{ transition: "ease-in-out 0.5s" }} className="QontoStepIcon-circle" />
        <BsCartCheckFill style={{ transition: "ease-in-out 0.5s" }} className="QontoStepIcon-circle" />

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
   * 
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: propTypes.bool,
};





function Signup() {
  const [values, setValues] = useState({})
  const steps = [{ value: 'personal', step: 0 }, { value: 'otp', step: 1 }, { value: 'finish', step: 2 }];
  const [currentStep, setCurrentStep] = useState(0)
  const incrementVal = () => {
    setCurrentStep(currentStep + 1)
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
