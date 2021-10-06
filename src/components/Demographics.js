import React from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import TextField from '@mui/material/TextField'
import { makeStyles } from '@mui/styles'

const styles = makeStyles({
  flexContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '650px',
  },
})
function Demographics() {
  const classes = styles()
  return (
    <div>
      <h2>Demographics</h2>
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
          <TextField id="standard-basic" label="Age" variant="standard" />
        </div>
      </div>
    </div>
  )
}

export default Demographics
