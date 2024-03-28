import React, { useEffect, useState } from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { MenuItem, Popover, Stack, Typography } from '@mui/material';
import './style.scss'
import httpClient from '../../../_util/api';
import { Bell } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';

const Notifications = (props) => {
  const agentCode = localStorage.getItem('agentCode')
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate()
  const [notifications, setNotifications] = useState([
    {
      message: "",
      status: 0,
      policyNumber:""
    }
  ]);

  const isAdmin = JSON.parse(localStorage.getItem('isAdmin'))

  const handleClick = () => {
    getNotifications()
    setAnchorEl(true)
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOptionChange = (policyNumber) => {
    // setAnchorEl(null);
    // console.log();
    // console.log("notification",notifications)
    navigate(`/policyDetail/${policyNumber}`)
    //  navigate(`/policyDetail/0900785190`)
    // navigate('/policies')
    // if (props.onOptionChange) {
    //   props.onOptionChange(selectedOption)
    //   // navigate(`/policyDetail/${notifications.policyNumber}`)
    //   // navigate('/policies')
    // }
  };

  const getNotifications = async () => {
    if (isAdmin) {
      const res = await httpClient.get('/notifications/getAllNotifications_AdminView').catch((error) => { console.log(error) })
      console.log("res", res);
      if (res?.status === 200) {
        console.log("res", res.data);
        setNotifications(res.data.map(notifications => ({
          message: notifications.message,
          policyNumber: notifications.policyNumber,
          status: notifications.status
        })))
      }
    }
    else {
      const res =await httpClient.get(`/notifications/getAllNotifications_AgentView/${agentCode}`).catch((error) => { console.log(error) })
      if (res?.status === 200) {
        setNotifications(res.data.map(notifications => ({
          message: notifications.message,
          policyNumber: notifications.policyNumber,
          status: notifications.status
        })))
      }
    }
  }

  useEffect(() => {
    getNotifications()
  }, [])

  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center', width: '4%', height: '6vh', backgroundColor:anchorEl ? '#F08613' : 'white', borderRadius: '30px',
      '&:hover': {
        backgroundColor: "#F08613" ,
        cursor: 'pointer'
      }
    }}
    >
      {
        anchorEl ? (<NotificationsIcon sx={{ color: 'white', fontSize: '31px' }} onClick={handleClick} />)
        : ( <NotificationsIcon sx={{ color: '#404040', fontSize: '31px' }} onClick={handleClick}  />)
      }
      <Popover
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{
          width: '30%',
          height: '30vh'
        }}
        className='notification-popup'
      >
        {notifications.length > 0 &&
          notifications.slice().reverse().map((item, index) => {
            return (
              <MenuItem
                className='menu-item'
                sx={{
                  margin: '2px',
                  paddingTop: '12px',
                  paddingBottom: '12px',
                  backgroundColor: item.status === 0 ? "#F08613" : "#DADADA",
                  borderRadius: '13px',
                  '&:hover': {
                    backgroundColor: item.status === 0 ? "#F08613" : "#DADADA",
                    cursor: 'pointer'
                  }
                }}
                key={index}
                onClick={() => handleOptionChange(item.policyNumber)}
              >
                <Typography sx={{ fontSize: '14px' }}>{item.message}</Typography>
              </MenuItem>
            );
          })
        }

      </Popover>
    </div>
  )
}

export default Notifications