import { createTheme, Grid, Typography } from '@mui/material'
import { ThemeProvider } from '@mui/system'
import React, { useRef } from 'react'
import AnimateBR from '../Motions/AnimateBR';
import AnimateUtoD from '../Motions/AnimateUtoD';
const theme = createTheme();
theme.typography.h2 = {
    '@media (max-width:600px)': {
        fontSize: '1.5rem'
    },
    color: '#344258',
    fontFamily: [
        'Montserrat', 'sans-serif'
    ].join(','),
    lineHeight: '1.2rem',
    fontWeight: "400",
    transform: "scale(1,0.9)",
}

function Step1() {
    const containerRef = useRef(null)
    return (
        <>

            <Grid item xs={12} sx={{ marginTop: { xs: 2, md: 10 } }} justifyContent='center' display='flex' >
                <AnimateUtoD>
                    <ThemeProvider theme={theme}>
                        <Typography variant='h2'>
                            Tell us about you
                        </Typography>

                    </ThemeProvider>
                </AnimateUtoD>


            </Grid>

            <Grid item xs={12} sx={{ padding: "20px 0" }}>
                <AnimateBR>
                    <div className='step1Wrapper'>
                        <div className='childWrapper' >
                            <div className='formWrapper'>
                                <label>First Name</label>
                                <div className='inputWrapper' >
                                    <input type="text" placeholder='Enter your first name' style={{}} />
                                </div>
                            </div>
                            <div className='formWrapper'>
                                <label>Last Name</label>
                                <div className='inputWrapper' >
                                    <input type="text" placeholder='Enter your last name' style={{}} />
                                </div>
                            </div>
                            <div className='formWrapper'>
                                <label>Email</label>
                                <div className='inputWrapper' >
                                    <input type="text" placeholder='Enter your email' style={{}} />
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimateBR>
            </Grid>
        </>

    )
}

export default Step1
