import React, { useEffect, useRef, useState } from 'react'
import Header from '../../Layout/Header'
import SideBar from '../../Layout/Sidebar'
import { Box, Button, Grid, InputAdornment, TextField } from '@mui/material'
// import SearchIcon from '@material-ui/icons/Search';
import './style.scss'
import { MagnifyingGlass, Plus } from 'phosphor-react'
import CRMGrid from '../../shared-component/CRM-Grid.jsx'
import { Stack } from '@mui/system'
import httpClient from '../../_util/api.jsx'
import AddNewPolicy_Admin from './ApprovePolicy.jsx'
import { useNavigate } from 'react-router-dom'
import CustomizedSnackbars from '../../shared-component/Snackbar/SnackBar.jsx'
import { useDispatch } from 'react-redux'
import { hideLoader, showLoader } from '../../Store/mainSlice.js'
// import CRMGrid from '../../shared-component'


const Policies = () => {
  const [newPolicyClicked, setNewPolicyClicked] = useState(false);
  const isAdmin = JSON.parse(localStorage.getItem("isAdmin"))
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [gridData, setGridData] = useState([])
  const snackbar_Ref = useRef(null);


  const gridHeader = [
    {
      field: 'policySubmissionDate',
      headerName: "Date:",
      width: '20%',
      isLink: true,

    },
    {
      field: 'policyCarrier',
      headerName: "Policy Carrier:",
      width: '20%',
      isLink: true,
    },
    {
      field: 'policyType',
      headerName: "Policy Type:",
      width: '20%',
      isLink: true,
    },
    {
      field: 'policyNumber',
      headerName: "Policy Number:",
      width: '20%',
      isLink: true,
    },
    {
      field: 'overwrittingAgentFirstName1',
      headerName: "OW1 Name:",
      width: '20%',
      isLink: true,
    },
    {
      field: 'overwrittingAgentFirstName2',
      headerName: "OW2 Name:",
      width: '20%',
      isLink: true,
    },
    {
      field: 'agentCarrierNumber',
      headerName: "Agent Carrier Number",
      width: '20%',
      isLink: true,
    },

    {
      field: 'agentCode',
      headerName: "Agent Code:",
      width: '20%',
      isLink: true,
    },
    {
      field: 'contractLevel',
      headerName: "Contract Level:",
      width: '20%',
      isLink: true,
    },
    {
      field: 'policyValue',
      headerName: "Policy Premium:",
      width: '20%',
      isLink: true,
    },

  ]

  const adminGridHeader = [
    {
      field: 'policySubmissionDate',
      headerName: "Date:",
      width: '20%',
      isLink: true
    },
    {
      field: 'policyCarrier',
      headerName: "Policy Carrier:",
      width: '20%',
      isLink: true
    },
    {
      field: 'policyType',
      headerName: "Policy Type:",
      width: '20%',
      isLink: true
    },
    {
      field: 'policyNumber',
      headerName: "Policy Number:",
      width: '20%',
      isLink: true
    },
    {
      field: 'agentCarrierNumber',
      headerName: "Agent Carrier Number",
      width: '20%',
      isLink: true
    },
    {
      field: 'overwrittingAgentFirstName1',
      headerName: "Writting Agent Name",
      width: '20%',
      isLink: true
    },
    {
      field: 'agentCode',
      headerName: "Agent Code",
      width: '20%',
      isLink: true
    },
    {
      field: 'contractLevel',
      headerName: "Contract Level",
      width: '20%',
      isLink: true
    },
    {
      field: 'policyValue',
      headerName: "Policy Value",
      width: '20%',
      isLink: true
    },
    {
      field: 'advPayment',
      headerName: "Adv. Payment",
      width: '20%',
      isLink: true
    },
    {
      field: 'balance',
      headerName: "Balance",
      width: '20%',
      isLink: true
    },
    {
      field: 'agencyCommission',
      headerName: "Agency Commission",
      width: '20%',
      isLink: true
    },
    {
      field: 'paidAgencyCommission',
      headerName: 'Paid Agency Commission',
      isProgressBar: true,
    }
  ]


  const addNewPolicyHandler = () => {
    navigate("/addNewPolicy_agent")
  }

  const LoadGridData = async () => {
    dispatch(showLoader())
    const res = await httpClient.get(isAdmin ? 'policies/getAllPolicies' : 'policies/getAllPoliciesAgentView')
      .catch((error) => {
        dispatch(hideLoader())
        snackbar_Ref.current.showMessage("error", error?.response.data.message, "", "i-chk-circle");
      })

    if (res?.status === 200) {
      dispatch(hideLoader())
      setGridData(res.data)
    }
  }



  useEffect(() => {
    console.log("isAdmin", isAdmin);
    console.log("baseURL:", isAdmin ? "/approvePolicy/" : "/addNewPolicy_agent");
    console.log("display:", isAdmin ? "none" : "flex");
    LoadGridData()
  }, [])

  return (
    <div>
      <Header />
      <div style={{ marginTop: '59px' }}>
        <div style={{
          display: 'flex',
          height: '91.6vh',
          overflowY: 'hidden'
        }}>
          <SideBar />
          <CustomizedSnackbars ref={snackbar_Ref}/>
          <Stack sx={{ width: '81.8%',marginLeft:'17.5%' }}>
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
                  display: isAdmin ? "none" : "flex",
                  backgroundColor: newPolicyClicked ? '#F08613' : "#003478",
                  color: 'white',
                  width: '245px',
                  height: "5vh",
                  fontSize: '12px',
                  "&:hover": {
                    backgroundColor: '#F08613',
                  },
                }}
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
            <CRMGrid
              sx={{ marginTop: '10px', borderTopLeftRadius: '64px', borderTopRightRadius: '64px' }}
              gridHeader={isAdmin ? adminGridHeader : gridHeader}
              gridData={gridData}
              baseURL={isAdmin ? "/approvePolicy/" : "/addNewPolicy_agent/"}
            />
          </Stack>
        </div>
      </div>
    </div>
  )
}

export default Policies