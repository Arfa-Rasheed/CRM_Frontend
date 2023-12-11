import React, { useState } from 'react'
import Header from '../../Layout/Header'
import SideBar from '../../Layout/Sidebar'
import { Box, Stack, TextField, Typography, Button } from '@mui/material'
import profilePhoto from '../../assets/profilePhotoCRM.png'
import './style.scss'

const AccountDetail = () => {
    const [isMyAccountClicked, setIsMyAccountClicked] = useState(true)
    const [isUpdateAccountClicked, setIsUpdateAccountClicked] = useState(false)

    const myAccountHandler = () => {
        setIsUpdateAccountClicked(false)
        setIsMyAccountClicked(true)
    }

    const updateAccountHandler = () => {
        setIsUpdateAccountClicked(true)
        setIsMyAccountClicked(false)
        // setIsUpdateAccountClicked(true)
    }
    return (
        <>
            <Header />
            <div style={{ marginTop: '56px' }}>
                <div style={{
                    display: 'flex',
                    height: '92vh',
                }}>
                    <SideBar />
                    <Stack alignItems={'center'} justifyContent={'center'} sx={{ width: '100%', height: '92vh' }}>
                        <Stack sx={{ width: '98%', height: '95%', backgroundColor: '#F2F2F2', borderRadius: '15px' }}>
                            <Stack alignItems={'center'} justifyContent={'center'} flexDirection={'row'} sx={{ width: '100%', height: '14vh' }}>
                                <Stack flexDirection={'row'} justifyContent={'space-between'} sx={{ width: '44%' }}>
                                    <Button sx={{
                                        width: '47%', backgroundColor: isMyAccountClicked ? "#F08613" : 'white', color: isMyAccountClicked ? 'white' : '#F08613', fontSize: '12px', borderRadius: '7px', 'hover': {
                                            backgroundColor: "#F08613",
                                            color: 'white'
                                        }
                                    }} onClick={myAccountHandler}>My Account</Button>
                                    <Button sx={{
                                        width: '47%', backgroundColor: isUpdateAccountClicked ? "#F08613" : 'white', color: isUpdateAccountClicked ? 'white' : '#F08613',  fontSize: '12px', borderRadius: '7px', 'hover': {
                                            backgroundColor: "#F08613",
                                            color: 'white'
                                        }
                                    }} onClick={updateAccountHandler}>Update Account</Button>
                                </Stack>
                            </Stack>

                            <Stack alignItems={'center'} sx={{ width: '100%', height: '100%' }}>
                                <Stack flexDirection={'row'} justifyContent={'center'} sx={{ width: "97%", height: '56%'}}>
                                    <Stack alignItems={'center'} sx={{ width: '58%', height: '42vh', backgroundColor: 'white', borderRadius: '20px' }}>
                                        <Box sx={{ width: '22%', height: '12vh' }}>
                                            <img src={profilePhoto} style={{ width: '100%', height: '100%' }} />
                                        </Box>
                                        <Stack>
                                            <Typography>First Name:</Typography>
                                            <Typography>Last Name:</Typography>
                                            <Typography>Agent Code:</Typography>
                                            <Typography>Agent Code:</Typography>
                                            <Typography>Agent Code:</Typography>
                                            <Typography>Level:</Typography>
                                            <Typography>Email:</Typography>
                                            <Typography>Phone Number:</Typography>
                                        </Stack>
                                    </Stack>

                                    <Stack alignItems={'center'} sx={{ width: '100%', height: "45vh", marginLeft: '23px' }}>
                                        <Stack flexDirection={'row'} flexWrap={'wrap'} sx={{ width: '100%', height: '79%' }}>
                                            <TextField className='Account-Textfield' label="Recruitment Date:" variant="filled" sx={{ width: '30%', height: "10vh", marginLeft: '23px' }} />
                                            <TextField label="No of Recruites:" variant="filled" sx={{ width: '30%', marginLeft: '23px' }} />
                                            <TextField label="Recruite Name | Code:" variant="filled" sx={{ width: '30%', marginLeft: '23px' }} />
                                            <TextField label="Health Insurance Sales:" variant="filled" sx={{ width: '30%', marginLeft: '23px' }} />
                                            <TextField label="Life Insurance Sales:" variant="filled" sx={{ width: '30%', marginLeft: '23px' }} />
                                            <TextField label="Annuities Sales:" variant="filled" sx={{ width: '30%', marginLeft: '23px' }} />
                                            <TextField label="Total Policy Value" variant="filled" sx={{ width: '30%', marginLeft: '23px' }} />
                                            <TextField label="Total Commission Earned:" variant="filled" sx={{ width: '30%', marginLeft: '23px' }} />

                                        </Stack>

                                        {/* </Stack> */}
                                        {/* </Stack> */}
                                    </Stack>
                                </Stack>

                                {
                                    isUpdateAccountClicked && (
                                        <>
                                            <Stack justifyContent={'space-around'} sx={{ width: '88%', height: '24vh' }}>
                                                <TextField id="outlined-basic" placeholder="Password Reset" variant="outlined" className='reset-account-textfield' />
                                                <TextField id="outlined-basic" placeholder="Email" variant="outlined" className='reset-account-textfield' />
                                                <TextField id="outlined-basic" placeholder="Phone Number" variant="outlined" className='reset-account-textfield' />
                                            </Stack>
                                            <Stack flexDirection={'row'} justifyContent={'space-between'}alignItems={'flex-end'} sx={{ width: "92%",height:'6vh' ,}}>
                                                <Button sx={{
                                                    width: '15%',height:'5vh', backgroundColor: "#003478",
                                                    color: "white",fontSize: '12px',  'hover': {
                                                        backgroundColor: "#003478",
                                                        color: "white",
                                                    }
                                                }} onClick={myAccountHandler}>Save</Button>
                                                 <Button sx={{
                                                    width: '15%',height:'5vh', backgroundColor: "#F08613",
                                                    color: "white", fontSize: '12px',  'hover': {
                                                        backgroundColor: "#F08613",
                                                        color: "white",
                                                    }
                                                }} onClick={myAccountHandler}>Save</Button>
                                            </Stack>
                                        </>

                                    )
                                }

                            </Stack>


                        </Stack>
                    </Stack>
                </div>
            </div >
        </>
    )
}

export default AccountDetail