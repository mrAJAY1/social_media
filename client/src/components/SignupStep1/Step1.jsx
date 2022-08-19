import { createTheme, Grid, Typography } from '@mui/material'
import { ThemeProvider } from '@mui/system'
import AnimateBR from '../Motions/AnimateBR';
import AnimateUtoD from '../Motions/AnimateUtoD';
import SignupBtns from '../StepperBTN.jsx/SignupBtns';
import Style from './Step1.module.css'

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
            <Grid item xs={11} sx={{ padding: "20px 0" }}>
                <AnimateBR>
                    <div className={Style.step1Wrapper}>
                        <div className={Style.childWrapper} >
                            <div className={Style.formWrapper}>
                                <label>First Name</label>
                                <div className={Style.inputWrapper} >
                                    <input name='firstName' type="text" placeholder='Enter your first name' style={{}} />
                                </div>
                            </div>
                            <div className={Style.formWrapper}>
                                <label>Last Name</label>
                                <div className={Style.inputWrapper} >
                                    <input name='lastName' type="text" placeholder='Enter your last name' style={{}} />
                                </div>
                            </div>
                            <div className={Style.formWrapper}>
                                <label>Email</label>
                                <div className={Style.inputWrapper} >
                                    <input name='email' type="text" placeholder='Enter your email' style={{}} />
                                </div>
                                
                            </div>
                            <SignupBtns/>
                        </div>
                    </div>
                </AnimateBR>
            </Grid>
        </>

    )
}

export default Step1
