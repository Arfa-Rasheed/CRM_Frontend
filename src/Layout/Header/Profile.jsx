import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Profile = () => {
    return (
        <div style={{ width: '15%' }}>
            <Stack
                direction={'row'}
                alignItems="center"
                spacing={2}
            >
                <Avatar />
                <Stack spacing={12} direction={'row'}>
                    <Stack>
                        <Typography>Arfa</Typography>
                        <Typography>Associate</Typography>
                    </Stack>
                    <KeyboardArrowDownIcon sx={{fontSize:'35px' ,marginTop:'10px'}}/>
                </Stack>
            </Stack>
        </div>
    )
}

export default Profile