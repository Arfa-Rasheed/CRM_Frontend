import React, { useEffect, useState } from 'react'
import Header from '../../Layout/Header'
import SideBar from '../../Layout/Sidebar'
import { Box, Button, Grid, InputAdornment, TextField } from '@mui/material'
// import SearchIcon from '@material-ui/icons/Search';
import './style.scss'
import { MagnifyingGlass, Plus } from 'phosphor-react'
import CRMGrid from '../../shared-component/CRM-Grid.jsx'
import { Stack } from '@mui/system'
import httpClient from '../../_util/api.jsx'
import AddNewPolicy_Admin from './AddNewPolicy_Admin.jsx'
import { useNavigate } from 'react-router-dom'
// import CRMGrid from '../../shared-component'


const Policies = () => {
  const [newPolicyClicked, setNewPolicyClicked] = useState(false);
  const isAdmin = localStorage.getItem("isAdmin")
  const navigate = useNavigate()
  const [gridData, setGridData] = useState([])


  const gridHeader = [
    {
      field: 'policySubmissionDate',
      headerName: "Policy Submission Date:",
      width: '20%',
    },
    {
      field: 'policyCarrier',
      headerName: "Policy Carrier:",
      width: '20%',
    },
    {
      field: 'policyType',
      headerName: "Policy Type:",
      width: '20%',
    },
    {
      field: 'policyNumber',
      headerName: "Policy Number:",
      width: '20%',
    },
    {
      field: 'agentFirstName',
      headerName: "Writing Agent First Name:",
      width: '20%',
    },
    {
      field: 'agentLastName',
      headerName: "Writing Agent Last Name:",
      width: '20%',
    },
    {
      field: 'agentCarrierNumber',
      headerName: "Agent Carrier Number",
      width: '20%',
    },

    {
      field: 'agentCode',
      headerName: "Agent Code:",
      width: '20%',
    },
    {
      field: 'contractLevel',
      headerName: "Contract Level:",
      width: '20%',
    },
    {
      field: 'policyPremium',
      headerName: "Policy Premium:",
      width: '20%',
    },
  ]

  const adminGridHeader = [
    {
      field: 'policySubmissionDate',
      headerName: "Policy Submission Date:",
      width: '20%',
    },
    {
      field: 'policyCarrier',
      headerName: "Policy Carrier:",
      width: '20%',
    },
    {
      field: 'policyType',
      headerName: "Policy Type:",
      width: '20%',
    },
    {
      field: 'policyNumber',
      headerName: "Policy Number:",
      width: '20%',
    },
    {
      field: 'agentCarrierNumber',
      headerName: "Agent Carrier Number",
      width: '20%',
    },
    {
      field: 'writtingAgentName',
      headerName: "Writting Agent Name",
      width: '20%',
    },
    {
      field: 'agentCode',
      headerName: "Agent Code",
      width: '20%',
    },
    {
      field: 'contractLevel',
      headerName: "P.Contract Level",
      width: '20%',
    },
    {
      field: 'policyValue',
      headerName: "Policy Value",
      width: '20%',
    },
    {
      field: 'advPayment',
      headerName: "Adv. Payment",
      width: '20%',
    },
    {
      field: 'balance',
      headerName: "Balance",
      width: '20%',
    },
    {
      field: 'agencyCommission',
      headerName: "Agency Commission",
      width: '20%',
    },
  ]

  const addNewPolicyHandler =()=>{
    if(isAdmin){
      navigate('/addNewPolicy_admin')
    }
    else{
      navigate("/addNewPolicy_agent")
    }
  }

  const LoadGridData = async () => {
    const res = await httpClient.get('policies/getAllPolicies').catch((error) => { })

    if (res?.status === 200) {
      console.log("Res", res);
      setGridData(res.data)
    }
  }


  useEffect(() => {
    LoadGridData()
  }, [])

  return (
    <div>
      <Header />
      <div style={{ marginTop: '59px' }}>
        <div style={{
          display: 'flex',
          height: '91.6vh',
          overflowY:'hidden'
        }}>
          <SideBar />
          <Stack sx={{ width: '81.8%' }}>
            <Box sx={{ width: '100%', height: '12vh', marginTop: '20px', display: 'flex', alignItems: 'flex-end', flexDirection: 'column', justifyContent: 'space-between' }}>
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
                  backgroundColor: newPolicyClicked ? '#F08613' : "#003478",
                  color: 'white',
                  width: '245px',
                  height: "5vh",
                  fontSize: '12px',
                  "&:hover": {
                    backgroundColor: '#F08613',
                  },
                }}
                // onClick={() => setNewPolicyClicked(true)}
                onClick={addNewPolicyHandler}
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
            {/* {
              // isAdmin && newPolicyClicked ? (
              //     <AddNewPolicy_Admin/>
              // ):
                newPolicyClicked ? (
            <Stack alignItems={'center'} justifyContent={'center'} sx={{ width: '100%', height: "105vh", marginTop: '10px' }}>
              <Stack alignItems={'center'} sx={{ width: '96%', height: '94%', backgroundColor: '#F2F2F2', borderRadius: '20px' }}>
                <Stack alignItems={'center'} justifyContent={'center'} sx={{ width: '81%', height: '100%' }}>
                  <Stack flexDirection={'row'} justifyContent={'space-between'} flexWrap={'wrap'} sx={{ width: '100%', height: '59%' }}>
                    <TextField label="Policy Submission Date:" variant="filled" sx={{ width: '30%' }} />
                    <TextField label="Policy Carrier:" variant="filled" sx={{ width: '30%' }} />
                    <TextField label="Policy Type:" variant="filled" sx={{ width: '30%' }} />
                    <TextField label="Policy Number:" variant="filled" sx={{ width: '30%' }} />
                    <TextField label="Agaent Carrier Number:" variant="filled" sx={{ width: '30%' }} />
                    <TextField label="Writting Agent First Name:" variant="filled" sx={{ width: '30%' }} />
                    <TextField label="Writing Agent Last Name" variant="filled" sx={{ width: '30%' }} />
                    <TextField label="Agent Code:" variant="filled" sx={{ width: '30%' }} />
                    <TextField label="Contract Level:" variant="filled" sx={{ width: '30%' }} />
                    <TextField label="Policy Premium:" variant="filled" sx={{ width: '30%' }} />
                  </Stack>
                  <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'} sx={{ width: '90%', height: '13vh' }}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#F08613",
                        color: 'white',
                        width: '186px',
                        height: "5vh",
                        fontSize: '12px',
                        "&:hover": {
                          backgroundColor: '#F08613',
                        },
                      }}
                    // onClick={() => setNewPolicyClicked(true)}
                    >
                      Save
                    </Button>

                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#003478",
                        color: 'white',
                        width: '186px',
                        height: "5vh",
                        fontSize: '12px',
                        "&:hover": {
                          backgroundColor: '#003478',
                        },
                      }}
                    // onClick={() => setNewPolicyClicked(true)}
                    >
                      Close
                    </Button>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            ) : ( */}
            <CRMGrid
              gridHeader={isAdmin ? adminGridHeader : gridHeader}
              gridData={gridData}
              sx={{ marginTop: '10px', borderTopLeftRadius: '64px', borderTopRightRadius: '64px' }}
            />
            {/* )
            } */}
          </Stack>
        </div>
      </div>
    </div>
  )
}

export default Policies