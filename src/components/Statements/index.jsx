import React from 'react'
import Header from '../../Layout/Header'
import SideBar from '../../Layout/Sidebar'
import { Button, Stack, TextField, Typography } from '@mui/material'
import CRMGrid from '../../shared-component/CRM-Grid.jsx'
import './style.scss'

const Commissions = () => {
  const gridHeader = [
    {
      field: 'dateOfPayment',
      headerName: "Date of Payment:",
      width: '20%',
    },
    {
      field: 'policyCarrier',
      headerName: "Policy Carrier:",
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
      field: 'agentCode',
      headerName: "Agent Code:",
      width: '30%',
    },
    {
      field: 'comissionPremium',
      headerName: "Comission Premium:",
      width: '20%',
    },
    {
      field: 'split',
      headerName: "Split%:",
      width: '20%',
    },
    {
      field: 'contractLevel',
      headerName: "Contract Level:",
      width: '20%',
    },
    {
      field: 'overwrite%',
      headerName: "Overwrite%:",
      width: '20%',
    },
    {
      field: 'earnedAdv%',
      headerName: "Earned Adv %:",
      width: '20%',
    },
    {
      field: 'earnedAdvAmount',
      headerName: "Earned Adv Amount:",
      width: '20%',
    },
  ]

  const grid_data = [
    {
      dateOfPayment: '02/12/2022',
      policyCarrier: "TransAmerica",
      policyNumber: "KPT904704456",
      agentCarrierNumber: "C-46786",
      agentCode: "B-67698",
      comissionPremium: "$20,000,00",
      split: "",
      contractLevel: "",
      overwrite: "",
      earnedAdv: "",
      earnedAdvAmount: "$27,000,00"
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
          <Stack sx={{ width: '80.8%' }}>
            <Stack sx={{ width: '99.9%', height: '24vh', marginLeft: '10px', marginTop: '17px', marginBottom: '-74px', backgroundColor: '#DBDBDB', borderTopLeftRadius: '64px', borderTopRightRadius: '64px' }}>
              {/* <h3 style={{ color: '#003478', marginLeft: '40px' }}>September 2023</h3> */}
              <Stack alignItems={'center'} sx={{ width: '100%', marginTop: '20px' }}>
                <Stack flexDirection={'row'} justifyContent={'space-between'} sx={{ width: '50%', }}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#F08613",
                      color: 'white',
                      width: '251px',
                      height: "5vh",
                      fontSize: '12px',
                      "&:hover": {
                        backgroundColor: "#F08613",
                        color: 'white'
                      },
                    }}
                  >
                    Commision Statement
                  </Button>
                  <span><b>Date:04/03/2023</b></span>


                </Stack>
              </Stack>
              <Stack flexDirection={'row'} justifyContent={'space-around'} sx={{ width: '100%' }}>
                <h3 style={{ color: '#003478' }}>September 2023</h3>
                <Stack flexDirection={'row'}>
                  <Typography sx={{ marginTop: '20px' }}>Period:</Typography>
                  <Stack flexDirection={'row'}>
                    <Stack>
                      <Typography>Start Date:</Typography>
                      <div className='DateField'>
                        <TextField id="outlined-basic" variant="outlined" sx={{ height: '4vh', backgroundColor: 'white', borderRadius: '4px' }} />
                      </div>

                    </Stack>
                    <Stack>
                      <Typography>End Date:</Typography>
                      <TextField className='DateField' sx={{ height: '4vh', backgroundColor: 'white', borderRadius: '4px' }} />
                    </Stack>
                  </Stack>
                </Stack>

              </Stack>
            </Stack>
            <CRMGrid
              gridName='comissionGrid'
              gridHeader={gridHeader}
              gridData={grid_data}
              sx={{ borderTopLeftRadius: '64px', borderTopRightRadius: '64px' }}
            />
          </Stack>
        </div>
      </div>

    </div>
  )
}

export default Commissions