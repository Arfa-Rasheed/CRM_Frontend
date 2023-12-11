import React from 'react'
import Header from '../../Layout/Header'
import SideBar from '../../Layout/Sidebar'
import { Box, Stack } from '@mui/system'
// import { Button } from '@mui/base'
import { Grid, InputAdornment, TextField } from '@mui/material'
import AllAgentsIcon from '../../assets/AllAgentsIcon.png'
import { Button } from '@mui/material'
import { MagnifyingGlass, Plus } from 'phosphor-react'
import CRMGrid from '../../shared-component/CRM-Grid.jsx'
import "./style.scss"
import profilePhoto from '../../assets/profilePhotoCRM.png'

const Recruits = () => {
  
  const gridHeader=[
    {
      field:'profilePhoto',
      headerName:""
    },
    {
      field: 'name',
      headerName: "Name:",
    },
    {
      field: 'level',
      headerName: "Level:",
    },
    {
      field: 'agentCode',
      headerName: "Agent Code:",
    },
    {
      field: 'agentTitle',
      headerName: "Agent Title:",
    },
    {
      field: 'agentRole',
      headerName: "Agent Role:",
    },
    {
      field: 'recruitmentDate',
      headerName: "Recruitment Date:",
    },
    {
      field: 'recruits',
      headerName: "Recruits:",
    },
    {
      field: 'commisionEarned',
      headerName: "Commision Earned:",
    },
  ]

  const grid_data=[
     {
      img:'../../assets/profilePhotoCRM.png',
      name:'Mia Quan',
      level:0.7,
      agentCode:'M79790',
      agentTitle:'',
      agentRole:"",
      recruitmentDate:"23/3/2023",
      recruits:5,
      commisionEarned:"$3,46,357" 
     },
     {
      img:'../../assets/profilePhotoCRM.png',
      name:'Mia Quan',
      level:0.7,
      agentCode:'M79790',
      agentTitle:'',
      agentRole:"",
      recruitmentDate:"23/3/2023",
      recruits:5,
      commisionEarned:"$3,46,357" 
     },
     {
      img:'../../assets/profilePhotoCRM.png',
      name:'Mia Quan',
      level:0.7,
      agentCode:'M79790',
      agentTitle:'',
      agentRole:"",
      recruitmentDate:"23/3/2023",
      recruits:5,
      commisionEarned:"$3,46,357" 
     },
     {
      img:'../../assets/profilePhotoCRM.png',
      name:'Mia Quan',
      level:0.7,
      agentCode:'M79790',
      agentTitle:'',
      agentRole:"",
      recruitmentDate:"23/3/2023",
      recruits:5,
      commisionEarned:"$3,46,357" 
     },
     
     
  ]
  
  return (
    <>
      <Header />
      <div style={{ marginTop: '56px' }}>
        <div style={{
          display: 'flex',
          height: '92vh',
        }}>
          <SideBar />
          <Stack sx={{ width: '81.7%'}}>
            <Box sx={{ width: '100%', height: '19vh', display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
              <Box sx={{ width: '60%', height: '100%' , display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                <Box sx={{ height: '12vh' }}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#F08613',
                      color: 'white',
                      width: '245px',
                      height: "5vh",
                      fontSize: '12px',
                      "&:hover": {
                        backgroundColor: '#F08613',
                      },
                    }}
                  // onClick={() => setNewPolicyClicked(true)}
                  >
                    <Grid container
                      alignItems={'center'}
                      sx={{ width: '100%' }}
                    >
                      <Grid item md="3"><img src={AllAgentsIcon} /></Grid>
                      <Grid item md="9"> All Agents</Grid>

                    </Grid>
                  </Button>
                </Box>

                <Box sx={{ width: '56%', height: '12vh', display: 'flex', alignItems: 'flex-end', flexDirection: 'column', justifyContent: 'space-between' }}>
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
                      "&:hover": {
                        backgroundColor: '#F08613',
                      },
                    }}
                  // onClick={() => setNewPolicyClicked(true)}
                  >
                    <Grid container
                      alignItems={'center'}
                      sx={{ width: '100%' }}
                    >
                      <Grid item md="9">Add new</Grid>
                      <Grid item md="3"><Plus size={20} weight="light" /></Grid>
                    </Grid>
                  </Button>
                </Box>

              </Box>
            </Box>
            <div className='recruitsGrid'>
            <CRMGrid
              gridHeader={gridHeader}
              gridData={grid_data}
              sx={{width:'100%' }}
            />
            </div>

          </Stack>
        </div>
      </div>

    </>
  )
}

export default Recruits