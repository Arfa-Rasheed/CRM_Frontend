import React, { useEffect, useState } from 'react'
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
import { useNavigate } from 'react-router-dom'
import httpClient from '../../_util/api.jsx'

const Agents = () => {
  const navigate = useNavigate()
  const [gridData,setGridData] = useState([])
  
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



  const LoadgridData=async()=>{
    const res =await httpClient.get('/agents/getAllAgents')

    if(res?.status === 200)
    {
      setGridData(res.data)
    }
  }

  useEffect(()=>{
    LoadgridData()
  },[])
  
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
                  onClick={()=>{navigate('/addAgent')}}
                  >
                    <Grid container
                      alignItems={'center'}
                      sx={{ width: '100%' }}
                    >
                      <Grid item md="9">Add Agent</Grid>
                      <Grid item md="3"><Plus size={20} weight="light" /></Grid>
                    </Grid>
                  </Button>
                </Box>

              </Box>
            </Box>
            <div className='recruitsGrid'>
            <CRMGrid
              gridHeader={gridHeader}
              gridData={gridData}
              sx={{width:'100%' }}
            />
            </div>

          </Stack>
        </div>
      </div>

    </>
  )
}

export default Agents