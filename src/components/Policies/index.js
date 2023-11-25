import React from 'react'
import Header from '../../Layout/Header'
import SideBar from '../../Layout/Sidebar'
import { Box, Button, Grid, InputAdornment, TextField } from '@mui/material'
// import SearchIcon from '@material-ui/icons/Search';
import './style.scss'
import { MagnifyingGlass, Plus } from 'phosphor-react'
import CRMGrid from '../../shared-component/CRMGrid'


const Policies = () => {
  return (
    <div>
      <Header />
      <div style={{ marginTop: '65px' }}>
        <div style={{
          display: 'flex',
          height: '91.6vh',
        }}>
          <SideBar />
          <Box sx={{ width: '100%', height: '11vh', border: '2px solid red', display: 'flex', alignItems: 'flex-end', flexDirection: 'column', justifyContent: 'space-between' }}>
            <TextField id="outlined-basic" placeholder="Search" variant="outlined" sx={{ width: '245px', height: '5vh' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MagnifyingGlass size={16} weight="light" />

                  </InputAdornment>
                ),
              }} />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#003478",
                color: 'white',
                width: '245px',
                height: "5vh",
                fontSize: '12px',
                // padding: '3px',
                "&:hover": {
                  backgroundColor: '#F08613',
                },
              }}
            // onClick={() => { navigate('/adpost') }}
            >
              <Grid container
                alignItems={'center'}
                sx={{ width: '100%' }}
              >
                <Grid item md="9"> New Policy</Grid>
                <Grid item md="3"><Plus size={20} weight="light" /></Grid>
              </Grid>
            </Button>
          </Box>
          <CRMGrid />
        </div>
      </div>
    </div>
  )
}

export default Policies