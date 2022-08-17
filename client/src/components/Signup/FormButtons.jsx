import React from 'react'
import { Button, Grid } from '@mui/material'

function FormButtons({ previousStep, nextStep, lastStep, currentStep, totalSteps }) {
    const handleBack = () => {
        previousStep();
    }
    const handleNext = () => {
        nextStep();
    }
    
    return (
        <Grid sx={{justifyContent: 'flex-end' } } >
            { currentStep > 1 && (
                <Grid item >
                    <Button variant='contained'
                        onClick={handleBack}
                        sx={{
                            textTransform: 'none',
                            m: 0.5, backgroundColor: 'transparent', color: '#001', borderColor: '#001', borderRadius: '25%', '&:hover': {
                                background: 'white'
                            }
                        }}
                    >
                        Back
                    </Button>
                </Grid>

            )}
            {currentStep < totalSteps && (
                <Grid item adjust={"end"}>
                    <Button variant='contained'
                        onClick={handleNext}
                        sx={{
                            textTransform: 'none',
                            m: 0.5, backgroundColor: 'transparent', color: '#001', borderColor: '#001', borderRadius: '25%', '&:hover': {
                                background: 'white'
                            }
                        }}
                    >
                        Next
                    </Button></Grid>

            )}
            {currentStep === totalSteps && (
                <Grid item adjust={"end"}>
                    <Button variant='contained'
                        // onClick={handleFinish}
                        onClick={handleNext}
                        sx={{
                            textTransform: 'none',
                            m: 0.5, backgroundColor: 'transparent', color: '#001', borderColor: '#001', borderRadius: '25%', '&:hover': {
                                background: 'white'
                            }
                        }}
                    >
                        Next
                    </Button></Grid>

            )}

        </ Grid >


            )
}

            export default FormButtons
