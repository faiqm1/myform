import './App.css'
import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Grid from '@mui/material/Grid'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Demographics from './components/Demographics'
import Biomarkers from './components/Biomarkers'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  marginTop: theme.spacing(3),
  height: 150,
  textAlign: 'left',
  color: theme.palette.text.secondary,
  display: 'flex',
}))

function App() {
  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Place your Order here!
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Box>
          <Grid container spacing={4}>
            <Grid item xs={8}>
              <Item>
                <Demographics />
              </Item>
            </Grid>
            <Grid item xs={4} direction="column">
              <Item>Result</Item>
            </Grid>
            <Grid item xs={8}>
              <Item>
                <Biomarkers />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  )
}

export default App
