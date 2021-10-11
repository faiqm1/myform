import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Demographics from 'components/Demographics'
import Biomarkers from 'components/Biomarkers'

import Item from 'components/Item'

function Form() {
  return (
    <>
      <Container>
        <Box>
          <Grid container spacing={4}>
            <Grid item xs={8}>
              <Item>
                <Demographics />
              </Item>
              <Item>
                <Biomarkers />
              </Item>
            </Grid>
            <Grid item xs={4} direction="column">
              <Item>Result</Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  )
}

export default Form
