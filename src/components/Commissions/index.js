import React, { useState } from 'react'
import Header from '../../Layout/Header'
import SideBar from '../../Layout/Sidebar'
import { Button, Stack, Tab, Tabs } from '@mui/material'
import CRMGrid from '../../shared-component/CRM-Grid.jsx'

const Commissions = () => {
  const [transactionClicked,setTransactionClicked] = useState(false)
  const [selectedTransactionClicked,setSelectedTransactionClicked] = useState(false)
  const [transactionDetailsClicked,setTransactionDetailsClicked] = useState(false)

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
      width: '20%',
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
      agentCode: "B-6769898768",
      comissionPremium: "$20,000,00",
      split: "",
      contractLevel: "",
      overwrite: "",
      earnedAdv: "",
      earnedAdvAmount: "$27,000,00"
    },

  ]

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Header />
      <div style={{ marginTop: '59px' }}>
        <div style={{
          display: 'flex',
          height: '91.6vh',
        }}>
          <SideBar />
          <Stack  sx={{ width: '80.8%' }}>
            <Stack sx={{ width: '99.9%', height: '22vh',marginLeft:'10px' ,marginTop: '17px',marginBottom:'-71px', backgroundColor:'#DBDBDB',borderTopLeftRadius:'64px',borderTopRightRadius:'64px' }}>
              <h3 style={{ color: '#003478', marginLeft: '40px' }}>September 2023</h3>
              <Stack alignItems={'center'} sx={{ width: '100%' }}>
                <Stack flexDirection={'row'} justifyContent={'space-between'} sx={{ width: '65%',  }}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: transactionClicked ? "#F08613":'white',
                      color:transactionClicked ? 'white' :"#F08613" ,
                      width: '251px',
                      height: "5vh",
                      fontSize: '12px',
                      "&:hover": {
                        backgroundColor: "#F08613",
                        color:'white'
                      },
                    }}
                    // onClick={transactionHandler}
                  onClick={() => setTransactionClicked(true)}
                  >
                    Transaction
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: selectedTransactionClicked ? "#F08613" : "white",
                      color: selectedTransactionClicked ? 'white' :"#F08613" ,
                      width: '251px',
                      height: "5vh",
                      fontSize: '12px',
                      "&:hover": {
                        backgroundColor: "#F08613",
                        color:'white'
                      },
                    }}
                  onClick={() => setSelectedTransactionClicked(true)}
                  >
                    Selected Transaction
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor:transactionDetailsClicked ? "#F08613" : "white",
                      color: transactionDetailsClicked ? 'white' :"#F08613" ,
                      width: '251px',
                      height: "5vh",
                      fontSize: '12px',
                      "&:hover": {
                        backgroundColor: "#F08613",
                        color:'white'
                      },
                    }}
                  onClick={() => setTransactionDetailsClicked(true)}
                  >
                    Transaction Detail
                  </Button>
                </Stack>
              </Stack>
            </Stack>
            <CRMGrid
              gridName='comissionGrid'
              gridHeader={gridHeader}
              gridData={grid_data}
              sx={{ borderTopLeftRadius: '64px', borderTopRightRadius: '64px'}}
            />
          </Stack>
        </div>
      </div>
    </div>
  )
}

export default Commissions