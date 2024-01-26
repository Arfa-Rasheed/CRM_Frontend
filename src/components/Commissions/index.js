import React, { useEffect, useState } from 'react'
import Header from '../../Layout/Header'
import SideBar from '../../Layout/Sidebar'
import { Button, Stack, Tab, Tabs } from '@mui/material'
import CRMGrid from '../../shared-component/CRM-Grid.jsx'
// import CRMGrid from '../../shared-component/CRM-Grid.jsx'
import httpClient from '../../_util/api'

const Commissions = () => {
  const [transactionClicked,setTransactionClicked] = useState(false)
  const [selectedTransactionClicked,setSelectedTransactionClicked] = useState(false)
  const [transactionDetailsClicked,setTransactionDetailsClicked] = useState(false)
  const [gridData,setGridData] = useState([])

  const gridHeader = [
    {
      field: 'policySubmissionDate',
      headerName: "Policy Submission Date:",
      isLink:true,
      
    },
    {
      field: 'policyCarrier',
      headerName: "Policy Carrier:",
      isLink:true,
    },
    {
      field: 'policyNumber',
      headerName: "Policy Number:",
      isLink:true,
    },
    {
      field: 'agentCarrierNumber',
      headerName: "Agent Carrier Number",
      isLink:true,
    },
    {
      field: 'agentCode',
      headerName: "Agent Code:",
      isLink:true,
    },
    {
      field: 'policyValue',
      headerName: "Comission Premium:",
      isLink:true,
    },
    {
      field: 'splitPercentage',
      headerName: "Split%:",
      
    },
    {
      field: 'contractLevel',
      headerName: "Contract Level:",
      isLink:true,
    },
    {
      field:'agencyCommissionPercentage',
      headerName:'Agency Commission %',
      isLink:true,
    },
    {
      field:'agencyCommission',
      headerName:'Agency Commission',
      isLink:true,
    },
    {
      field:'agentCommission',
      headerName:'Agent Commission',
      isLink:true,
    },
    {
      field: 'advPaymentPercentage',
      headerName: "Earned Adv %:",
      isLink:true,
    },
    {
      field: 'advPayment',
      headerName: "Earned Adv Amount:",
      isLink:true,
    },
    {
      field: 'overwrittingAgentContractLevel1',
      headerName: "OW Agent1 %:",
      isLink:true,
    },
    {
      field: 'overwrittingAgentCommission1',
      headerName: "OW1 Agent Commission:",
      isLink:true,
    },
    {
      field: 'overwrittingAgentContractLevel2',
      headerName: "OW Agent2 %:",
      isLink:true,
    },
    {
      field: 'overwrittingAgentCommission2',
      headerName: "OW2 Agent Commission:",
      isLink:true,
    },
    {
      field:'split2_splitRatio',
      headerName: "Split2 %",
      isLink:true,
    },
    {
      field:'split_2_OWAgent1_Commission',
      headerName:'Split2 OW1 commission',
      isLink:true,
    },
    {
      field:'split_2_OWAgent2_Commission',
      headerName:'Split2 OW2 commission',
      isLink:true,
    }
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

  const LoadGridData = async () => {
    const res = await httpClient.get('policies/getAllApprovedPolicies').catch((error) => { })

    if (res?.status === 200) {
      console.log("Res", res);
        setGridData(res.data)
      
    }
  }

  useEffect(()=>{ 
    LoadGridData()
  },[])

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
              gridData={gridData}
              sx={{ borderTopLeftRadius: '64px', borderTopRightRadius: '64px'}}
              baseURL={'/commissionDetail/'}
            />
          </Stack>
        </div>
      </div>
    </div>
  )
}

export default Commissions