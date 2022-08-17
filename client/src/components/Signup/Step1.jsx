import { Grid, TextField } from '@mui/material';
import React, { useState } from 'react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useEffect } from 'react';
function Step1() {
  const [dob, setValue] = useState(null);
  useEffect(() => {
    console.log(dob)
  }, [dob]);
  return (
    <Grid container rowSpacing={3} sx={{ padding: 0, marginBottom: '20px', justifyContent: 'center', overflow: 'hidden' }}>
      <Grid item xs={10} md={8} sx={{ margin: '0 auto' }}>
        <TextField fullWidth variant='standard' mode='signup' type="text" />
      </Grid>
      <Grid md={8} sx={{ margin: '0 auto' }} item xs={10}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Enter date of birth"
            name='dob'
            value={dob}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} fullWidth variant='standard' inputMode='text' />}
          />
        </LocalizationProvider>
      </Grid>

    </Grid>
  )
}

export default Step1;
