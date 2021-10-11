import './App.css'
import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Form from 'components/Form'
import PropTypes from 'prop-types'

function App() {
    return (
        <React.Fragment>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Place your Order here!
                    </Typography>
                </Toolbar>
            </AppBar>
            <Form />
        </React.Fragment>
    )
}

export default App
