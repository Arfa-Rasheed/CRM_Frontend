import React, { useEffect, useRef, useState } from 'react'
import Header from '../../Layout/Header'
import SideBar from '../../Layout/Sidebar'
import { Button, Stack, TextField, Typography } from '@mui/material'
import CRMGrid from '../../shared-component/CRM-Grid.jsx'
import './style.scss'
import httpClient from '../../_util/api.jsx'
import CustomizedSnackbars from '../../shared-component/Snackbar/SnackBar.jsx'
import { useDispatch } from 'react-redux'
import { hideLoader, showLoader } from '../../Store/mainSlice.js'
import Calendar from '../../shared-component/Calender/Calender.jsx'
import dayjs from 'dayjs';

const Commissions = () => {
  const isAdmin = JSON.parse(localStorage.getItem("isAdmin"))
  const agentCode = localStorage.getItem("agentCode")
  const [gridData, setGridData] = useState([]);
  const dispatch = useDispatch()
  // const currentDate = new Date();
  const snackbar_Ref = useRef(null);
  const [dates, setDates] = useState({
    // startDate: "3/11/2024",
    // endDate: "3/29/2023"
    startDate: "",
    endDate: ""
  })

  let date = new Date()
  let currentDate = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`
  let currentMonth = `${date.toLocaleString('en-us', { month: 'long' })} ${date.getFullYear()}`
 


  const adminGridHeader = [
    {
      field: 'paidOutDate',
      headerName: "Paid Out Date",
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
      field: 'policyNumber',
      headerName: "Policy Number:",
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
      field: 'premium',
      headerName: "Premium:",
      width: '20%',
      isLink: true,
    },
    {
      field: 'balance',
      headerName: "Policy Balance:",
      width: '20%',
      isLink: true,
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
      isLink: true,
    },
  ]

  const gridHeader = [
    {
      field: 'paidOutDate',
      headerName: "Paid Out Date",
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
      field: 'policyNumber',
      headerName: "Policy Number:",
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
      field: 'premium',
      headerName: "Premium:",
      width: '20%',
      isLink: true,
    },
    {
      field: 'splitPercentage',
      headerName: "Split %",
      width: '20%',
      isLink: true,
    },
    {
      field: 'contractLevel',
      headerName: "Contract Level",
      width: '20%',
      isLink: true,
    },
    {
      field: 'advPaymentPercentage',
      headerName: "Advance Payment%:",
      width: '20%',
      isLink: true,
    },
    {
      field: 'agentCommission',
      headerName: "Agent Commission",
      width: '20%',
      isLink: true,
    },
  ]


  const handleInputChange = (data, field) => {
    setDates((prevFormData) => ({ ...prevFormData, [field]: data }));
  };

  
  const handleDateChange = (date, field) => {
    const formattedDate = dayjs(date).format('M/D/YYYY');
    setDates((prevFormData) => ({ ...prevFormData, [field]: formattedDate }));
};


  const LoadGridData = async () => {
    dispatch(showLoader())
    const res = await httpClient.post(isAdmin ? '/policies/statement' : `/policies/statementAgentView/${agentCode}`, dates).catch((error) => {
      dispatch(hideLoader())
      snackbar_Ref.current.showMessage("error", error?.response.data.message, "", "i-chk-circle")
    })

    if (res?.status === 200) {
      dispatch(hideLoader())
      setGridData(res?.data.statements)
    }
  }

  useEffect(() => {
    if (dates) {
      LoadGridData()
    }
    else {

    }

  }, [dates])
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
            <Stack sx={{ width: '99.9%', height: '30vh', marginLeft: '10px', marginTop: '17px', marginBottom: '-74px', backgroundColor: '#DBDBDB', borderTopLeftRadius: '64px', borderTopRightRadius: '64px' }}>
              {/* <h3 style={{ color: '#003478', marginLeft: '40px' }}>September 2023</h3> */}
              <Stack alignItems={'center'} sx={{ width: '100%', height: '64px', marginTop: '20px' }}>
                <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'} sx={{ width: '50%', }}>
                  <h2 style={{ color: 'black' }}>Commission Statement</h2>
                  <p><b>Date:{currentDate}</b></p>


                </Stack>
              </Stack>
              <Stack flexDirection={'row'} justifyContent={'space-around'} sx={{ width: '100%' }}>
                <h3 style={{ color: '#003478' }}>{currentMonth}</h3>
                <Stack flexDirection={'row'}>
                  <Typography sx={{ marginTop: '20px' }}>Period:</Typography>
                  <Stack flexDirection={'row'}>
                    <Stack>
                      <Typography>Start Date:</Typography>
                      <div className='DateField'>
                        <Calendar value={dates.startDate} onDateChange={(date) => handleDateChange(date, 'startDate')} />

                      </div>

                    </Stack>
                    <Stack>
                      <Typography>End Date:</Typography>
                       <Calendar value={dates.endDate} onDateChange={(date) => handleDateChange(date, 'endDate')} />
                    </Stack>
                  </Stack>
                </Stack>

              </Stack>
            </Stack>
            <CRMGrid
              sx={{ borderTopLeftRadius: '64px', borderTopRightRadius: '64px' }}
              gridName='comissionGrid'
              gridHeader={isAdmin === true ? adminGridHeader : gridHeader}
              gridData={gridData}
              baseURL={'/statementDetail/'}
            />
          </Stack>
        </div>
      </div>

    </div>
  )
}

export default Commissions