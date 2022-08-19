import styled from '@emotion/styled'
import { Button, Grid } from '@mui/material'
import React, { useContext } from 'react'
import { SignupProvider } from '../../contexts/SignupContext'
const ForwardBtn = styled(Button)(() => ({
  minWidth: '90px',
  fontSize: '0.8rem',
  marginLeft: '10px',
  background: "#fff",
  boxShadow: 'none',
  border: '1px solid #dbdbdb',
  borderRadius: '0.65rem',
  padding: 'calc(0.5em - 1px) 1em',
  lineHeight: '1',
  fontWeight: '500',
  color: '#363636',
  textTransform: 'none',
  '&:hover': {
    color: 'white',
    borderColor: '#5596e6',
    background: '#5596e6',
    boxShadow: '0 14px 26px -12px rgb(85 150 230 / 42%), 0 4px 23px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(85 150 230 / 20%) !important',
  }

}))
const BackWardBtn = styled(Button)(() => ({
  minWidth: '90px',
  fontSize: '0.8rem',
  marginLeft: '10px',
  background: "#fff",
  boxShadow: 'none',
  border: '1px solid #dbdbdb',
  borderRadius: '0.65rem',
  padding: 'calc(0.5em - 1px) 1em',
  lineHeight: '1',
  fontWeight: '500',
  color: '#363636',
  textTransform: 'none',
  '&:hover': {
    background: 'white',
    borderColor: "#b5b5b5",
    boxShadow: 'none'
  }

}))

function SignupBtns() {
  const { currentStep, setCurrentStep } = useContext(SignupProvider)
  const incrementVal = () => {
    setCurrentStep(currentStep + 1)
  }
  const decrementVal = () => {
    setCurrentStep(currentStep - 1)
  }
  return (
    <Grid display={'flex'} justifyContent={'end'} item xs={12}>
      {currentStep > 0 && <BackWardBtn onClick={decrementVal} variant={'contained'}>Back</BackWardBtn>}
      {currentStep<5 && <ForwardBtn onClick={incrementVal} variant={'contained'}>Next</ForwardBtn>}
    </Grid>
  )
}

export default SignupBtns
