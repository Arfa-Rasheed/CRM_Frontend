import { MagnifyingGlass} from 'phosphor-react'
import React from 'react'
import SideBar from '../../Layout/Sidebar'
import Header from '../../Layout/Header'
import { Box, Button, Grid, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import PersonIcon from '../../assets/PersonIcon.png'
import profilePhoto from '../../assets/profilePhotoCRM.png'

const AgentDetail = () => {
    const navigate = useNavigate()
    return (
        <>
            <Header />
            <div style={{ marginTop: '56px' }}>
                <div style={{
                    display: 'flex',
                    height: '92vh',
                    // overflowY:'hidden'
                }}>
                    <SideBar />
                    <Stack sx={{ width: '81.7%' , }}>
                        <Box sx={{ width: '100%', height: '19vh', display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                            <Box sx={{ width: '60%', height: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                <Box sx={{ height: '12vh' }}>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor: '#F08613',
                                            color: 'white',
                                            width: '245px',
                                            height: "5vh",
                                            fontSize: '12px',
                                            "&:hover": {
                                                backgroundColor: '#F08613',
                                            },
                                        }}
                                    // onClick={() => setNewPolicyClicked(true)}
                                    >
                                        <Grid container
                                            alignItems={'center'}
                                            sx={{ width: '100%' }}
                                        >
                                            <Grid item md="3"><img src={PersonIcon} /></Grid>
                                            <Grid item md="9"> All Agents</Grid>

                                        </Grid>
                                    </Button>
                                </Box>

                                <Box sx={{ width: '56%', height: '12vh', display: 'flex', alignItems: 'flex-end', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <TextField id="outlined-basic" placeholder="Agent Search" variant="outlined" sx={{ width: '245px', height: '5vh' }}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <MagnifyingGlass size={16} weight="light" />
                                                </InputAdornment>
                                            ),
                                        }} />
                                    <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor: "#003478",
                                            color: 'white',
                                            width: '245px',
                                            height: "5vh",
                                            fontSize: '12px',
                                            "&:hover": {
                                                backgroundColor: '#F08613',
                                            },
                                        }}
                                        onClick={() => { navigate('/addRecruit') }}
                                    >
                                        <Grid container
                                            alignItems={'center'}
                                            sx={{ width: '100%' }}
                                        >
                                            <Grid item md="3"><img src={PersonIcon} /></Grid>
                                            <Grid item md="9">Edit Agent Details</Grid>

                                        </Grid>
                                    </Button>
                                </Box>

                            </Box>
                        </Box>
 
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


                    </Stack>
                </div>
            </div>

        </>
    )
}

export default AgentDetail