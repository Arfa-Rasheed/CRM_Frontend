import { MagnifyingGlass, Notepad } from 'phosphor-react'
import React, { useEffect, useState } from 'react'
import SideBar from '../../Layout/Sidebar'
import Header from '../../Layout/Header'
import { Box, Button, Grid, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import PersonIcon from '../../assets/PersonIcon.png'
import profilePhoto from '../../assets/profilePhotoCRM.png'
import './style.scss'
import httpClient from '../../_util/api'
import CRMGrid from '../../shared-component/CRM-Grid.jsx'

const AgentDetail = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    // const [gridData,setGridData] = useState()
    const [agentData, setAgentData] = useState({
        firstName: "",
        lastName: "",
        level: 0,
        email: "",
        OTP: "",
        verified: false,
        agentCode: "",
        agentTitle: "",
        agentRole: "",
        recruitmentDate: "",
        recruits: 0,
        commissionEarned: 0,
        img: ""
    })

    const gridHeader = [
        {
            field: 'policySubmissionDate',
            headerName: "Policy Submission Date:",
            width: '20%',
        },
        {
            field: 'policyCarrier',
            headerName: "Policy Carrier:",
            width: '20%',
        },
        {
            field: 'policyType',
            headerName: "Policy Type:",
            width: '20%',
        },
        {
            field: 'policyNumber',
            headerName: "Policy Number:",
            width: '20%',
        },
        {
            field: 'agentFirstName',
            headerName: "Writing Agent First Name:",
            width: '20%',
        },
        {
            field: 'agentLastName',
            headerName: "Writing Agent Last Name:",
            width: '20%',
        },
        {
            field: 'agentCarrierNumber',
            headerName: "Agent Carrier Number",
            width: '20%',
        },

        {
            field: 'agentCode',
            headerName: "Agent Code:",
            width: '20%',
        },
        {
            field: 'contractLevel',
            headerName: "Contract Level:",
            width: '20%',
        },
        {
            field: 'policyPremium',
            headerName: "Policy Premium:",
            width: '20%',
        },
    ]

    const griddata = [
        {
            policySubmissionDate: "12/12/2023",
            policyCarrier: "TransAmerica",
            policyType: "Health",
            policyNumber: "134325",
            agentFirstName: "afsfwr",
            agentLastName: "wtert",
            agentCarrierNumber: "3235346",
            agentCode: "3524",
            contractLevel: 0.5,
            policyPremium: "325346"

        }

    ]

    const LoadAgentData = async () => {
        const res = await httpClient.get(`/agents/getAgentByID/${id}`).catch((error) => { console.log("error", error); })

        if (res?.status === 200) {
            console.log("Detail res", res)
            setAgentData(res.data)
        }
    }



    useEffect(() => {
        LoadAgentData()
    }, [])

    return (
        <>
            <Header />
            <div style={{ marginTop: '56px' }}>
                <div style={{
                    display: 'flex',
                    height: '92vh',
                    overflowY:'hidden'
                }}>
                    <SideBar />
                    <Stack sx={{ width: '81.7%',backgroundColor:'#F2F2F2' }}>
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

                        <Stack flexDirection={'row'} justifyContent={'center'} sx={{ width: "97%", height: '56%' }}>
                            <Stack alignItems={'center'} sx={{ width: '58%', height: '42vh', backgroundColor: 'white', borderRadius: '20px' }}>
                                <Box sx={{ width: '22%', height: '12vh' }}>
                                    <img src={profilePhoto} style={{ width: '100%', height: '100%' }} />
                                </Box>
                                <Stack>
                                    <Typography>First Name: {agentData.firstName}</Typography>
                                    <Typography>Last Name: {agentData.lastName}</Typography>
                                    <Typography>Agent Code: {agentData.agentCode}</Typography>
                                    <Typography>Agent Title:{agentData.agentTitle}</Typography>
                                    <Typography>Agent Role:{agentData.agentRole}</Typography>
                                    <Typography>Level:{agentData.level}</Typography>
                                    <Typography>Email:{agentData.email}</Typography>
                                </Stack>
                            </Stack>

                            <Stack alignItems={'center'} sx={{ width: '100%', height: "45vh", marginLeft: '23px' }}>
                                <Stack flexDirection={'row'} justifyContent={'space-between'} flexWrap={'wrap'} sx={{ width: '100%', height: '79%' }}>
                                    <Stack sx={{ width: '30%', height: '30%', backgroundColor: '#F08613' }}>
                                        <Typography className='agentDetail-text'>Recruitment Date:</Typography>
                                        <Typography className='agentDetail-text'>{agentData.recruitmentDate}</Typography>
                                    </Stack>
                                    <Stack sx={{ width: '30%', height: '30%', backgroundColor: '#F08613' }}>
                                        <Typography className='agentDetail-text'>No of Recruites:</Typography>
                                        <Typography className='agentDetail-text'>{agentData.recruits}</Typography>
                                    </Stack>
                                    <Stack sx={{ width: '30%', height: '30%', backgroundColor: '#F08613' }}>
                                        <Typography className='agentDetail-text'>Recruite Name | Code:</Typography>
                                        <Typography className='agentDetail-text'>{ }</Typography>
                                    </Stack>


                                    <Stack sx={{ width: '30%', height: '30%', backgroundColor: '#2F5597' }}>
                                        <Typography className='agentDetail-text'>Health Insurance Sales:</Typography>
                                        <Typography className='agentDetail-text'>{ }</Typography>
                                    </Stack>
                                    <Stack sx={{ width: '30%', height: '30%', backgroundColor: '#2F5597' }}>
                                        <Typography className='agentDetail-text'>Life Insurance Sales:</Typography>
                                        <Typography className='agentDetail-text'>{ }</Typography>
                                    </Stack>
                                    <Stack sx={{ width: '30%', height: '30%', backgroundColor: '#2F5597' }}>
                                        <Typography className='agentDetail-text'>Annuities Sales:</Typography>
                                        <Typography className='agentDetail-text'>{ }</Typography>
                                    </Stack>


                                    <Stack flexDirection={'row'} justifyContent={'space-between'} sx={{ width: '65%', height: '30%' }}>
                                        <Stack sx={{ width: '46%', height: '100%', backgroundColor: '#6C5352' }}>
                                            <Typography className='agentDetail-text'>Total Policy Value</Typography>
                                            <Typography className='agentDetail-text'>{ }</Typography>
                                        </Stack>
                                        <Stack sx={{ width: '46%', height: '100%', backgroundColor: '#6C5352' }}>
                                            <Typography className='agentDetail-text'>Total Commission Earned:</Typography>
                                            <Typography className='agentDetail-text'>{agentData.commissionEarned}</Typography>
                                        </Stack>
                                    </Stack>

                                </Stack>


                            </Stack>
                        </Stack>

                        <Stack justifyContent={'center'} alignItems={'center'}>
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
                                    >
                                        <Grid container
                                            alignItems={'center'}
                                            sx={{ width: '100%' }}
                                        >
                                            <Grid item md="3"><Notepad size={20} weight="light" /></Grid>
                                            <Grid item md="9">Policies Submitted</Grid>

                                        </Grid>
                                    </Button>
                        </Stack>
                        <div className='policiesDataGrid'>
                            <CRMGrid
                                gridHeader={gridHeader}
                                gridData={griddata}
                            />
                        </div>



                    </Stack>
                </div>
            </div>

        </>
    )
}

export default AgentDetail