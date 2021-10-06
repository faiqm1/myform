import React from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import TextField from '@mui/material/TextField'
import { makeStyles } from '@mui/styles'
import { Typography } from '@mui/material'

const styles = makeStyles({
  flexContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
})
function Demographics() {
  const classes = styles()
  return (
    <div>
      <Typography variant="h5">Demographics</Typography>
      <div className={classes.flexContainer}>
        <div>
          <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
        </div>
        <div>
          <TextField id="standard-basic" label="Age" variant="standard" />
        </div>
      </div>
    </div>
  )
}

export default Demographics
