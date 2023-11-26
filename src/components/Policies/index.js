import React, { useState } from 'react'
import Header from '../../Layout/Header'
import SideBar from '../../Layout/Sidebar'
import { Box, Button, Grid, InputAdornment, TextField } from '@mui/material'
// import SearchIcon from '@material-ui/icons/Search';
import './style.scss'
import { MagnifyingGlass, Plus } from 'phosphor-react'
import CRMGrid from '../../shared-component/CRM-Grid.jsx'
import { Stack } from '@mui/system'
// import CRMGrid from '../../shared-component'


const Policies = () => {
  const [newPolicyClicked, setNewPolicyClicked] = useState(false);

  const [gridData, setGridData] = useState(
    {
      policySubmissionDate: "",
      policyCarrier: "",
      policyType: "",
      policyNumber: "",
      agentCarrierNumber: "",
      agentFirstName: "",
      agentLastName: "",
      agentCode: "",
      contractLevel: "",
      policyPremium: ""
    }
  )

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

  const grid_data = [
    {
      policySubmissionDate: "04/05/2022",
      policyCarrier: "TransAmerica",
      policyType: "Life Insurance",
      policyNumber: "C-87587090",
      agentCarrierNumber: "B-3534645756",
      agentFirstName: "Joe",
      agentLastName: "Buhi",
      agentCode: "B0436545",
      contractLevel: "0.50",
      policyPremium: "$2,700,00"
    },
    {
      policySubmissionDate: "04/05/2022",
      policyCarrier: "TransAmerica",
      policyType: "Life Insurance",
      policyNumber: "C-87587090",
      agentCarrierNumber: "B-3534645756",
      agentFirstName: "Joe",
      agentLastName: "Buhi",
      agentCode: "B0436545",
      contractLevel: "0.50",
      policyPremium: "$2,700,00"
    },
    {
      policySubmissionDate: "04/05/2022",
      policyCarrier: "TransAmerica",
      policyType: "Life Insurance",
      policyNumber: "C-87587090",
      agentCarrierNumber: "B-3534645756",
      agentFirstName: "Joe",
      agentLastName: "Buhi",
      agentCode: "B0436545",
      contractLevel: "0.50",
      policyPremium: "$2,700,00"
    },
    {
      policySubmissionDate: "04/05/2022",
      policyCarrier: "TransAmerica",
      policyType: "Life Insurance",
      policyNumber: "C-87587090",
      agentCarrierNumber: "B-3534645756",
      agentFirstName: "Joe",
      agentLastName: "Buhi",
      agentCode: "B0436545",
      contractLevel: "0.50",
      policyPremium: "$2,700,00"
    },
    {
      policySubmissionDate: "04/05/2022",
      policyCarrier: "TransAmerica",
      policyType: "Life Insurance",
      policyNumber: "C-87587090",
      agentCarrierNumber: "B-3534645756",
      agentFirstName: "Joe",
      agentLastName: "Buhi",
      agentCode: "B0436545",
      contractLevel: "0.50",
      policyPremium: "$2,700,00"
    },
    {
      policySubmissionDate: "04/05/2022",
      policyCarrier: "TransAmerica",
      policyType: "Life Insurance",
      policyNumber: "C-87587090",
      agentCarrierNumber: "B-3534645756",
      agentFirstName: "Joe",
      agentLastName: "Buhi",
      agentCode: "B0436545",
      contractLevel: "0.50",
      policyPremium: "$2,700,00"
    },
    {
      policySubmissionDate: "04/05/2022",
      policyCarrier: "TransAmerica",
      policyType: "Life Insurance",
      policyNumber: "C-87587090",
      agentCarrierNumber: "B-3534645756",
      agentFirstName: "Joe",
      agentLastName: "Buhi",
      agentCode: "B0436545",
      contractLevel: "0.50",
      policyPremium: "$2,700,00"
    },

    {
      policySubmissionDate: "04/05/2022",
      policyCarrier: "TransAmerica",
      policyType: "Life Insurance",
      policyNumber: "C-87587090",
      agentCarrierNumber: "B-3534645756",
      agentFirstName: "Joe",
      agentLastName: "Buhi",
      agentCode: "B0436545",
      contractLevel: "0.50",
      policyPremium: "$2,700,00"
    },

    {
      policySubmissionDate: "04/05/2022",
      policyCarrier: "TransAmerica",
      policyType: "Life Insurance",
      policyNumber: "C-87587090",
      agentCarrierNumber: "B-3534645756",
      agentFirstName: "Joe",
      agentLastName: "Buhi",
      agentCode: "B0436545",
      contractLevel: "0.50",
      policyPremium: "$2,700,00"
    },

    {
      policySubmissionDate: "04/05/2022",
      policyCarrier: "TransAmerica",
      policyType: "Life Insurance",
      policyNumber: "C-87587090",
      agentCarrierNumber: "B-3534645756",
      agentFirstName: "Joe",
      agentLastName: "Buhi",
      agentCode: "B0436545",
      contractLevel: "0.50",
      policyPremium: "$2,700,00"
    },

  ]
  return (
    <div>
      <Header />
      <div style={{ marginTop: '59px' }}>
        <div style={{
          display: 'flex',
          height: '91.6vh',
        }}>
          <SideBar />
          <Stack sx={{ width: '81.8%' }}>
            <Box sx={{ width: '100%', height: '17vh', marginTop: '20px', display: 'flex', alignItems: 'flex-end', flexDirection: 'column', justifyContent: 'space-between' }}>
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
                onClick={() => setNewPolicyClicked(true)}
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
            {
              newPolicyClicked ? (
                <Stack alignItems={'center'} justifyContent={'center'} sx={{ width: '100%', height: "105vh", marginTop: '10px' }}>
                  <Stack alignItems={'center'} sx={{ width: '96%', height: '94%', backgroundColor: '#F2F2F2', borderRadius: '20px' }}>
                    <Stack alignItems={'center'} justifyContent={'center'} sx={{width:'81%', height: '100%'}}>
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
              ) : (
                <CRMGrid
                  gridHeader={gridHeader}
                  gridData={grid_data}
                  sx={{ marginTop: '10px', borderTopLeftRadius: '64px', borderTopRightRadius: '64px' }}
                />
              )
            }
          </Stack>
        </div>
      </div>
    </div>
  )
}

export default Policies