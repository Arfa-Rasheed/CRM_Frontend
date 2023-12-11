import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Navigate, useNavigate } from 'react-router';

const Profile = () => {
    const navigate = useNavigate()
    return (
        <div style={{ width: '15%' }}>
            <Stack
                direction={'row'}
                alignItems="center"
                spacing={2}
            >
                <Avatar onClick={()=>navigate("/accountDetails")}/>
                <Stack spacing={10} direction={'row'}>
                    <Stack>
                        <Typography>Mike</Typography>
                        <Typography>Associate</Typography>
                    </Stack>
                    <KeyboardArrowDownIcon sx={{fontSize:'35px' ,marginTop:'10px'}}/>
                </Stack>
            </Stack>
        </div>
    )
}

export default Profile