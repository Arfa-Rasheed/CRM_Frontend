import React, { useEffect, useRef, useState } from 'react'
import Header from '../../Layout/Header'
import SideBar from '../../Layout/Sidebar'
import { Button, Stack, Tab, Tabs } from '@mui/material'
import CRMGrid from '../../shared-component/CRM-Grid.jsx'
// import CRMGrid from '../../shared-component/CRM-Grid.jsx'
import httpClient from '../../_util/api'
import CustomizedSnackbars from '../../shared-component/Snackbar/SnackBar.jsx'
import { useDispatch } from 'react-redux'
import { hideLoader, showLoader } from '../../Store/mainSlice.js'


const Commissions = () => {
  const isAdmin = JSON.parse(localStorage.getItem("isAdmin"))
  const agentCode = localStorage.getItem("agentCode")
  const snackbar_Ref = useRef(null);
  const dispatch = useDispatch()
  const [transactionClicked, setTransactionClicked] = useState(false)
  const [selectedTransactionClicked, setSelectedTransactionClicked] = useState(false)
  const [transactionDetailsClicked, setTransactionDetailsClicked] = useState(false)
  const [gridData, setGridData] = useState([])

  const gridHeader = [
    {
      field: 'policyApprovalDate',
      headerName: "Policy Approval Date:",
      isLink: true,

    },
    {
      field: 'policyCarrier',
      headerName: "Policy Carrier:",
      isLink: true,
    },
    {
      field: 'policyNumber',
      headerName: "Policy Number:",
      isLink: true,
    },
    {
      field: 'agentCarrierNumber',
      headerName: "Agent Carrier Number",
      isLink: true,
    },
    {
      field: 'agentCode',
      headerName: "Agent Code:",
      isLink: true,
    },
    {
      field: 'policyValue',
      headerName: "Premium:",
      isLink: true,
    },
    {
      field: 'splitPercentage',
      headerName: "Split%:",

    },
    {
      field: 'contractLevel',
      headerName: "Contract Level:",
      isLink: true,
    },
    {
      field: 'agencyCommissionPercentage',
      headerName: 'Agency Commission %',
      isLink: true,
    },
    {
      field: 'agencyCommission',
      headerName: 'Agency Commission',
      isLink: true,
    },
    {
      field: 'commissionableAmountPercentage',
      headerName: 'Commissionable Amount',
      isLink: true,
    },
    {
      field: 'agentCommission',
      headerName: 'Agent Commission',
      isLink: true,
    },
    (isAdmin
      ? [
        {
          field: 'paidAgencyCommission',
          headerName: 'Paid Agency Commission',
          isProgressBar: true,
        },
      ]
      : []),
    {
      field: 'advPaymentPercentage',
      headerName: "Earned Adv %:",
      isLink: true,
    },
    {
      field: 'advPayment',
      headerName: "Earned Adv Amount:",
      isLink: true,
    },
    {
      field: 'overwrittingAgentContractLevel1',
      headerName: "OW Agent1 %:",
      isLink: true,
    },
    {
      field: 'overwrittingAgentCommission1',
      headerName: "OW1 Agent Commission:",
      isLink: true,
    },
    {
      field: 'overwrittingAgentContractLevel2',
      headerName: "OW Agent2 %:",
      isLink: true,
    },
    {
      field: 'overwrittingAgentCommission2',
      headerName: "OW2 Agent Commission:",
      isLink: true,
    },
    {
      field: 'split2_splitRatio',
      headerName: "Split2 %",
      isLink: true,
    },
    {
      field: 'split_2_OWAgent1_Commission',
      headerName: 'Split2 OW1 commission',
      isLink: true,
    },
    {
      field: 'split_2_OWAgent2_Commission',
      headerName: 'Split2 OW2 commission',
      isLink: true,
    }
  ]

  const gridHeaderAgent = [
    {
      field: 'policyApprovalDate',
      headerName: "Policy Approval Date:",
      isLink: true,

    },
    {
      field: 'policyCarrier',
      headerName: "Policy Carrier:",
      isLink: true,
    },
    {
      field: 'policyNumber',
      headerName: "Policy Number:",
      isLink: true,
    },
    {
      field: 'agentCarrierNumber',
      headerName: "Agent Carrier Number",
      isLink: true,
    },
    {
      field: 'agentCode',
      headerName: "Agent Code:",
      isLink: true,
    },
    {
      field: 'policyValue',
      headerName: "Premium:",
      isLink: true,
    },
    {
      field: 'splitPercentage',
      headerName: "Split%:",

    },
    {
      field: 'contractLevel',
      headerName: "Contract Level:",
      isLink: true,
    },
    {
      field: 'commissionableAmountPercentage',
      headerName: 'Commissionable Amount',
      isLink: true,
    },


    {
      field: 'agentCommission',
      headerName: 'Agent Commission',
      isLink: true,
    },

  ]



  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const LoadGridData = async () => {
    dispatch(showLoader())
    const res = await httpClient.get(isAdmin ? 'policies/getAllCommissions' : `policies/getAllCommissionsAgentView/${agentCode}`)
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
          <CustomizedSnackbars ref={snackbar_Ref} />
          <Stack sx={{ width: '80.8%', marginLeft: '18%' }}>
            <Stack sx={{ width: '99.9%', height: '19vh', marginLeft: '10px', marginTop: '17px', marginBottom: '-71px', backgroundColor: '#DBDBDB', borderTopLeftRadius: '64px', borderTopRightRadius: '64px' }}>
              <h2 style={{ color: 'black', textAlign: 'center' }}>Commission</h2>
              <h3 style={{ color: '#003478', marginLeft: '40px' }}> March 2024</h3>
              <Stack alignItems={'center'} sx={{ width: '100%' }}>
                {/* <Stack flexDirection={'row'} justifyContent={'space-between'} sx={{ width: '65%', }}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: transactionClicked ? "#F08613" : 'white',
                      color: transactionClicked ? 'white' : "#F08613",
                      width: '251px',
                      height: "5vh",
                      fontSize: '12px',
                      "&:hover": {
                        backgroundColor: "#F08613",
                        color: 'white'
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
                      color: selectedTransactionClicked ? 'white' : "#F08613",
                      width: '251px',
                      height: "5vh",
                      fontSize: '12px',
                      "&:hover": {
                        backgroundColor: "#F08613",
                        color: 'white'
                      },
                    }}
                    onClick={() => setSelectedTransactionClicked(true)}
                  >
                    Selected Transaction
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: transactionDetailsClicked ? "#F08613" : "white",
                      color: transactionDetailsClicked ? 'white' : "#F08613",
                      width: '251px',
                      height: "5vh",
                      fontSize: '12px',
                      "&:hover": {
                        backgroundColor: "#F08613",
                        color: 'white'
                      },
                    }}
                    onClick={() => setTransactionDetailsClicked(true)}
                  >
                    Transaction Detail
                  </Button>
                </Stack> */}
              </Stack>
            </Stack>
            <CRMGrid
              gridName='comissionGrid'
              gridHeader={isAdmin ? gridHeader : gridHeaderAgent}
              gridData={gridData}
              sx={{ borderTopLeftRadius: '64px', borderTopRightRadius: '64px' }}
              baseURL={'/commissionDetail/'}
            />
          </Stack>
        </div>
      </div>
    </div>
  )
}

export default Commissions