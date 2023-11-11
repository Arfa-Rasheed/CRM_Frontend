import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';

const Notifications = () => {
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'4%',height:'6vh',backgroundColor:'white',borderRadius:'30px',
    // border:"2px solid blue"
    }}>
        <NotificationsIcon sx={{color:'#404040',fontSize:'31px'}} />
    </div>
  )
}

export default Notifications