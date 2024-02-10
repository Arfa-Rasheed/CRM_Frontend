import React, { useEffect, useState } from 'react'
import Header from '../../Layout/Header'
import SideBar from '../../Layout/Sidebar'
import { Button, Stack, TextField, Typography } from '@mui/material'
import CRMGrid from '../../shared-component/CRM-Grid.jsx'
import './style.scss'
import httpClient from '../../_util/api.jsx'

const Commissions = () => {
  const isAdmin = JSON.parse(localStorage.getItem("isAdmin"))
  const [gridData,setGridData] = useState([]);
  const currentDate = new Date();
  const [dates,setDates]=useState({
    startDate:"",
    endDate:""
  })
  const adminGridHeader = [
    {
      field: 'policySubmissionDate',
      headerName: "Policy Date",
      width: '20%',
      isLink:true,
    },
    {
      field: 'policyCarrier',
      headerName: "Policy Carrier:",
      width: '20%',
      isLink:true,
    },
    {
      field: 'policyNumber',
      headerName: "Policy Number:",
      width: '20%',
      isLink:true,
    },
    {
      field: 'agentCarrierNumber',
      headerName: "Agent Carrier Number",
      width: '20%',
      isLink:true,
    },
    {
      field: 'policyValue',
      headerName: "Policy Value:",
      width: '20%',
      isLink:true,
    },
    {
      field: 'balance',
      headerName: "Policy Balance:",
      width: '20%',
      isLink:true,
    },
    {
      field: 'agencyCommission',
      headerName: "Agency Commission",
      width: '20%',
    },
    {
      field: 'agentCommission',
      headerName: "Agent Commission:",
      width: '20%',
      isLink:true,
    },
  ]

  const gridHeader = [
    {
      field: 'policySubmissionDate',
      headerName: "Policy Date",
      width: '20%',
      isLink:true,
    },
    {
      field: 'policyCarrier',
      headerName: "Policy Carrier:",
      width: '20%',
      isLink:true,
    },
    {
      field: 'policyNumber',
      headerName: "Policy Number:",
      width: '20%',
      isLink:true,
    },
    {
      field: 'agentCarrierNumber',
      headerName: "Agent Carrier Number",
      width: '20%',
      isLink:true,
    },
    {
      field: 'policyValue',
      headerName: "Commission Premium:",
      width: '20%',
      isLink:true,
    },
    {
      field: 'splitPercentage',
      headerName: "Split %",
      width: '20%',
      isLink:true,
    },
    {
      field: 'contractLevel',
      headerName: "Contract Level",
      width: '20%',
      isLink:true,
    },
    {
      field: 'advPaymentPercentage',
      headerName: "Advance Payment%:",
      width: '20%',
      isLink:true,
    },
    {
      field: 'advPayment',
      headerName: "Advance Payment",
      width: '20%',
      isLink:true,
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

  const handleInputChange = (data,field) => {
    setDates((prevFormData) => ({ ...prevFormData, [field]: data }));
};

  const LoadGridData=async()=>{
    const res = await httpClient.post(isAdmin ? '/policies/statement' : '/policies/statementAgentView',dates).catch((error) => { console.log("error: ", error) })

    if (res?.status === 200) {
      setGridData(res?.data.policies)
    }
  }

  useEffect(()=>{
    if(dates){
      LoadGridData()
    }
    else{

    }
    
  },[dates])
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
                        <TextField id="outlined-basic" variant="outlined" 
                        sx={{ height: '4vh', backgroundColor: 'white', borderRadius: '4px' }}
                         value={dates.startDate}
                         onChange={(e) => { handleInputChange(e.target.value, "startDate") }}
                          />
                      </div>

                    </Stack>
                    <Stack>
                      <Typography>End Date:</Typography>
                      <TextField 
                      className='DateField' 
                      sx={{ height: '4vh', backgroundColor: 'white', borderRadius: '4px' }}
                      value={dates.endDate}
                      onChange={(e) => { handleInputChange(e.target.value,  "endDate") }}
                      
                      />
                    </Stack>
                  </Stack>
                </Stack>

              </Stack>
            </Stack>
            <CRMGrid
             sx={{ borderTopLeftRadius: '64px', borderTopRightRadius: '64px' }}
              gridName='comissionGrid'
              gridHeader={isAdmin===true ? adminGridHeader : gridHeader}
              gridData={gridData}
              // baseURL={'/commissionDetail/'}
              baseURL={'/statementDetail/'}
            />
          </Stack>
        </div>
      </div>

    </div>
  )
}

export default Commissions