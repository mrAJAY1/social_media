import { Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import { FormContainer, TextFieldElement } from 'react-hook-form-mui'

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import '../sampleSignup/style.module.css'

function SampleSignup() {
    const initialValues = { name: '', password: '', phone: '', email: '' };
    const [dob, setValue] = useState(null);
    const [formValue, setFormValues] = useState(initialValues);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormValues({ ...formValue, [name]: value });
    }
    return (
        <div>
            <Grid container sx={{ height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
                <Grid item xs={10} md={4} xl={3}>
                    <FormContainer
                        defaultValues={{ name: '' }}
                        onSuccess={data => console.log(data)}
                    >
                        <TextFieldElement sx={{ margin: 5 }} name="fullname" label="fullname" fullWidth size='small' required />

                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Enter date of birth"
                                name='dob'
                                value={dob}
                                onChange={handleChange}
                                renderInput={(params) => <TextField {...params} required fullWidth variant='standard' sx={{ margin: 5 }} inputMode='text' />}
                            />
                        </LocalizationProvider>
                        <TextFieldElement sx={{ margin: 5 }} name="username" label="username" fullWidth inputMode='numeric' size='small' required />
                        <TextFieldElement sx={{ margin: 5 }} name="phone" label="phone" fullWidth size='small' required />
                        <TextFieldElement sx={{ margin: 5 }} name="password" label="password" fullWidth size='small' required />


                    </FormContainer>
                </Grid>

            </Grid>

        </div>
    )
}

export default SampleSignup

