import React, { useRef } from 'react'
import Header from '../../Layout/Header'
import SideBar from '../../Layout/Sidebar'
import CustomizedSnackbars from '../../shared-component/Snackbar/SnackBar'
import { Avatar, Button, Stack, Typography } from '@mui/material'


const AdminAccount = () => {
    const snackbar_Ref = useRef()
    const firstName = localStorage.getItem('firstName')
    const lastName = localStorage.getItem('lastName')
    const adminCode = localStorage.getItem('adminCode')
    return (
        <>
            <Header />
            <div style={{ marginTop: '56px' }}>
                <div style={{
                    display: 'flex',
                    height: '92vh',
                }}>
                    <SideBar />
                    <CustomizedSnackbars ref={snackbar_Ref} />
                    <Stack alignItems={'center'} justifyContent={'center'} sx={{ width: '100%', height: '92vh', marginLeft: '18%' }}>
                        <Stack alignItems={'center'}  sx={{ width: '98%', height: '90%', backgroundColor: '#F2F2F2', borderRadius: '15px' }}>
                            <Stack justifyContent={'space-around'} sx={{ width: '95%',height:'90%' }}>
                                <Stack flexDirection={'row'} justifyContent={'space-between'} sx={{ width: '100%' }}>

                                    <Stack>
                                        <Typography variant='h4' sx={{ fontWeight: 'bold' }}>Welcome </Typography>
                                        <Typography variant='h4'>Super Admin!</Typography>
                                    </Stack>

                                    <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor: "#003478",
                                            color: 'white',
                                            width: '233px',
                                            height: "5vh",
                                            fontSize: '12px',
                                            "&:hover": {
                                                backgroundColor: "#003478",
                                            },
                                        }}
                                    // onClick={loginHandler}
                                    >
                                        Edit Super Admin Details
                                    </Button>

                                </Stack>

                                <Stack flexDirection={'row'} justifyContent={'space-between'} sx={{ width: '100%' }}>
                                    <Stack sx={{ width: '33%', height: '50vh', borderRadius: '12px' }}>

             <Avatar sx={{width:'100%',height:'100%'}}/>

                                    </Stack>
                                    <Stack alignItems={'center'} justifyContent={'center'} sx={{ width: '62%', height: '50vh', backgroundColor: '#D9D9D9', borderRadius: '12px' }}>
                                        <Stack sx={{ width: '90%', height: '90%' }}>
                                            <Stack flexDirection={'row'} >
                                                <Typography sx={{ fontWeight: 'bold' }}>First Name:</Typography><Typography>{firstName}</Typography>
                                            </Stack>
                                            <Stack flexDirection={'row'} >
                                                <Typography sx={{ fontWeight: 'bold' }}>Last Name:</Typography><Typography>{lastName}</Typography>
                                            </Stack>
                                            <Stack flexDirection={'row'} >
                                                <Typography sx={{ fontWeight: 'bold' }}>Admin Code:</Typography><Typography>{adminCode}</Typography>
                                            </Stack>
                                        </Stack>

                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </div>
            </div>
        </>
    )
}

export default AdminAccount