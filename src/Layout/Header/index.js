import { AppBar, Divider, Stack, Toolbar } from '@mui/material'
import React from 'react'
import Profile from './Profile'
import Notifications from './Notifications'
import Logo from './Logo'

const Header = () => {
    return (
        <div>
            <AppBar sx={{ 
                 backgroundColor: '#000000',
                //  border: '2px solid red' 
                 }}>
                <Toolbar>
                    <Stack
                        direction={'row'}
                        alignItems="center"
                        justifyContent="space-between"
                        spacing={4}
                        sx={{ width: '100%' }}>
                        

                        <Stack 
                            direction={'row'}
                            alignItems="center"
                            justifyContent="space-between"
                            sx={{
                                // border:'2px solid green',
                                width:'85%'
                            }}
                            >
                            <Logo />
                            <Notifications />
                        </Stack>
                        
                        {/* <Divider variant="inset" style={{ backgroundColor: 'white' }} /> */}

                        <Profile />
                    </Stack>

                </Toolbar>
            </AppBar>

        </div>
    )
}

export default Header