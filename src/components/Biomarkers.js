import React from 'react'
import { Biomarkersstyles } from './Biomarkers.styles'
import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DateTimePicker from '@mui/lab/DateTimePicker'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button'

function Biomarkers() {
  const classes = Biomarkersstyles()
  const [value, setValue] = React.useState(new Date())
  const [pct, setPct] = React.useState('PCR')

  const handlePctChange = (e) => {
    setPct(e.target.value)
  }
  console.log(pct)

  return (
    <React.Fragment>
      <div>
        <Typography variant="h5">Biomarkers</Typography>
        <div className={classes.flexContainer}>
          <table>
            <tr>
              <th>Parameter</th>
              <th>Collection Time</th>
              <th>Result Time</th>
            </tr>

            <tr className={classes.tableheadingspace}>
              <td>
                <TextField
                  id="standard-basic"
                  label="PCT"
                  variant="standard"
                  onChange={handlePctChange}
                />
              </td>
              <td>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    label="DateTimePicker"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue)
                    }}
                  />
                </LocalizationProvider>
              </td>
              <td>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    label="DateTimePicker"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue)
                    }}
                  />
                </LocalizationProvider>
              </td>
            </tr>
          </table>
        </div>
        <Button variant="outlined">Submit</Button>
      </div>
    </React.Fragment>
  )
}

export default Biomarkers
