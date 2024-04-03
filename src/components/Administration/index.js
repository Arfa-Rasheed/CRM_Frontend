import React, { useEffect, useRef, useState } from 'react'
import Header from '../../Layout/Header'
import SideBar from '../../Layout/Sidebar'
import { Box, Stack } from '@mui/system'
// import { Button } from '@mui/base'
import { Grid, InputAdornment, TextField } from '@mui/material'
import AllAgentsIcon from '../../assets/AllAgentsIcon.png'
import { Button } from '@mui/material'
import { MagnifyingGlass, Minus, Plus } from 'phosphor-react'
import CRMGrid from '../../shared-component/CRM-Grid.jsx'
import "./style.scss"
import profilePhoto from '../../assets/profilePhotoCRM.png'
import { useNavigate } from 'react-router-dom'
import httpClient from '../../_util/api.jsx'
import { useDispatch } from 'react-redux'
import { hideLoader, showLoader } from '../../Store/mainSlice.js'
import PageLoader from '../../Layout/FullPageLoader/FullPageLoader.jsx'
import CustomSnackbar from '../../shared-component/Snackbar/SnackBar.jsx'


const Administration = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isAdmin = JSON.parse(localStorage.getItem("isAdmin"))
  const snackbar_Ref = useRef(null);
  const [gridData, setGridData] = useState([])
  const [selectedAgentIds, setSelectedAgentIds] = useState([]);
  const gridHeader = [
    {
      field: '_id',
      isCheckbox : true,
      headerName: (
        <input
          type="checkbox"
          onChange={(e) => {
            // // Handle checkbox click for all rows
            // if (e.target.checked) {
            //   const allAgentIds = gridData.map((agent) => agent.id);
            //   setSelectedAgentIds(allAgentIds);
            // } else {
            //   setSelectedAgentIds([]);
            // }

            const isChecked = e.target.checked;
            const agentId = e.target.value; // Assuming value attribute contains the agent ID
            if (isChecked) {
                // If the checkbox is checked, add the agent ID to the selected agent IDs
                setSelectedAgentIds([agentId]);
            } else {
                // If the checkbox is unchecked, remove the agent ID from the selected agent IDs
                setSelectedAgentIds([]);
            }
          }}
          
        />
      ),
    },
    {
      field: 'img',
      headerName: "",
      isLink: true,
    },
    {
      field: 'firstName',
      headerName: "Name:",
      isLink: true
    },
    {
      field: 'level',
      headerName: "Level:",
      isLink: true,
    },
    {
      field: 'agentCode',
      headerName: "Agent Code:",
      isLink: true,
    },
    {
      field: 'agentTitle',
      headerName: "Agent Title:",
      isLink: true,
    },
    {
      field: 'agentRole',
      headerName: "Agent Role:",
      isLink: true,
    },
    {
      field: 'recruitmentDate',
      headerName: "Recruitment Date:",
      isLink: true,
    },
    {
      field: 'recruits',
      headerName: "Recruits:",
      isLink: true,
    },
    {
      field: 'commissionEarned',
      headerName: "Commision Earned:",
      isLink: true,
    },
  ]

  const handleCheckboxChange = (agentId) => {
    // Handle checkbox change and update selectedAgentIds
    console.log("agentId", agentId)
    setSelectedAgentIds((prevIds) =>
      prevIds.includes(agentId)
        ? prevIds.filter((id) => id !== agentId)
        : [...prevIds, agentId]
    );
  }

  const removeAgentHandler = async () => {
    dispatch(showLoader())
    if (selectedAgentIds.length > 0) {
      const agentIdsString = selectedAgentIds.join(',');
      const res = await httpClient.delete(`/agents/deleteAgent/${agentIdsString}`).catch((error) => {
        dispatch(hideLoader())
        console.log("error: ", error)
        snackbar_Ref.current.showMessage("error", error?.response.data.message, "", "i-chk-circle")
      })

      if (res?.status === 200) {
        dispatch(hideLoader())
        LoadgridData()
        console.log(" delted res", res);
        snackbar_Ref.current.showMessage("success", res?.data.message, "", "i-chk-circle")
      }

    }
  }

  const LoadgridData = async () => {
    dispatch(showLoader())
    const res = await httpClient.get(isAdmin ? '/agents/getApprovedAgents' : '/agents/getAllAgentsAgentView')
      .catch((error) => {
        dispatch(hideLoader())
        snackbar_Ref.current.showMessage("error", error?.response.data.message, "", "i-chk-circle")
      })
    if (res?.status === 200) {
      dispatch(hideLoader())
      setGridData(res.data)

    }
  }

  useEffect(() => {
    LoadgridData()
  }, [])

  return (
    <>
      <PageLoader />
      <Header />
      <div style={{ marginTop: '56px' }}>
        <div style={{
          display: 'flex',
          height: '92vh',
          overflowY: 'hidden'
        }}>
          <SideBar />
          <CustomSnackbar ref={snackbar_Ref} />
          {/* <Stack sx={{ width: '81.7%', marginLeft: '18%' }}>
            <Box sx={{ width: '100%', height: '19vh', display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
              <Box sx={{ width: '60%', height: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
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

                <Box sx={{ width: '56%', height: '17vh', display: 'flex', alignItems: 'flex-end', flexDirection: 'column', justifyContent: 'space-between' }}>
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
                        backgroundColor: '#003478',
                      },
                    }}
                    onClick={() => { navigate('/addAgent') }}
                  >
                    <Grid container
                      alignItems={'center'}
                      sx={{ width: '100%' }}
                    >
                      <Grid item md="9">Add Agent</Grid>
                      <Grid item md="3"><Plus size={20} weight="light" /></Grid>
                    </Grid>
                  </Button>
                  <Button
                    variant="contained"
                    disabled={selectedAgentIds.length < 1 ? true : false}
                    sx={{
                      backgroundColor: "#003478",
                      color: 'white',
                      width: '245px',
                      height: "5vh",
                      fontSize: '12px',
                      "&:hover": {
                        backgroundColor: '#003478',
                      },
                    }}
                    onClick={removeAgentHandler}
                  >
                    <Grid container
                      alignItems={'center'}
                      sx={{ width: '100%' }}
                    >
                      <Grid item md="9">Remove Agent</Grid>
                      <Grid item md="3"><Minus size={20} weight="light" /></Grid>
                    </Grid>
                  </Button>
                </Box>

              </Box>
            </Box>
            <div className='recruitsGrid'>
              <CRMGrid
                gridHeader={gridHeader}
                gridData={gridData}
                selectedAgentIds={selectedAgentIds}
                handleCheckboxChange={handleCheckboxChange}
                sx={{ width: '100%' }}
              />
            </div>

          </Stack> */}
        </div>
      </div>

    </>
  )
}

export default Administration