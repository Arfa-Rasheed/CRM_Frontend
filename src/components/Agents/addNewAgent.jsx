import React, { useEffect, useState } from 'react'
import Header from '../../Layout/Header'
import SideBar from '../../Layout/Sidebar'
import { Box, Stack, TextField, Typography, Button } from '@mui/material'
import profilePhoto from '../../assets/profilePhotoCRM.png'
import './style.scss'
import httpClient from '../../_util/api'
import { useNavigate, useParams } from 'react-router-dom'

const AddNewAgent = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const isAdmin = JSON.parse(localStorage.getItem("isAdmin"))
    const recruitingAgentCode = localStorage.getItem("userId")
    const [agentData, setAgentData] = useState({
        firstName: "",
        lastName:"",
        level: 0,
        agentCarrierNumber:"",
        agentTitle: "",
        agentRole: "",
        recruitmentDate: "",
        recruits: 0,
        commissionEarned: 0,
        email: ""
    })

    const handleInputChange = (data, field) => {

        setAgentData((prevFormData) => ({ ...prevFormData, [field]: data }));
    };

    const submitHandler = async () => {
        if (id) {
            const res = httpClient.put(`/agents/updateAgent/${id}`, agentData).catch((error) => { console.log("error: ", error) })
            if (res?.status === 200) {
                console.log("Add new agent res", res);
                navigate(`/agent/${id}`)
            }
        }
        else if (isAdmin === true) {
            const res = await httpClient.post('/agents/addNewAgent', agentData).catch((error) => { console.log("error: ", error) })
            if (res?.status === 200) {
                navigate('/agent')
            }
        }
        else {
            const res = await httpClient.post(`/agents/addNewAgent/${recruitingAgentCode}`, agentData).catch((error) => { console.log("error: ", error) })
            if (res?.status === 200) {
                navigate('/agent')
            }
        }
    }

    const LoadAgentData = async () => {
        const res = await httpClient.get(`/agents/getAgentByID/${id}`).catch((error) => { console.log("error", error); })

        if (res?.status === 200) {
            console.log("Detail res", res)
            setAgentData(res.data.agentDetails)
        }
    }


    useEffect(() => {
        if (id) {
            LoadAgentData()
        }
    }, [])

    return (
        <>
            <Header />
            <div style={{ marginTop: '56px' }}>
                <div style={{
                    display: 'flex',
                    height: '92vh',
                    overflowY: 'hidden'
                }}>
                    <SideBar />
                    <Stack alignItems={'center'} justifyContent={'center'} sx={{ width: '100%', height: '92vh' }}>
                        <Stack alignItems={'center'} justifyContent={'center'} sx={{ width: '98%', height: '95%', backgroundColor: '#F2F2F2', borderRadius: '15px' }}>

                            <Stack alignItems={'center'} sx={{ width: '100%', height: '73%' }}>
                                <Stack flexDirection={'row'} justifyContent={'center'} sx={{ width: "97%", height: '68%' }}>
                                    <Stack alignItems={'center'} sx={{ width: '58%', height: '42vh', backgroundColor: 'white', borderRadius: '20px' }}>
                                        <Box sx={{ width: '22%', height: '12vh' }}>
                                            <img src={profilePhoto} style={{ width: '100%', height: '100%' }} />
                                        </Box>
                                        <Stack>
                                            <Typography>Name:{agentData.firstName}</Typography>
                                            <Typography>Level:{agentData.level}</Typography>
                                            <Typography>Agent Code:{agentData.agentCode}</Typography>
                                            <Typography>Agent Title:{agentData.agentTitle}</Typography>
                                            <Typography>Agent Role:{agentData.agentRole}</Typography>
                                            <Typography>Recruitment Date:{agentData.recruitmentDate}</Typography>
                                            <Typography>Recruits:{agentData.recruitmentDate}</Typography>
                                            <Typography>Commision Earned:{agentData.commissionEarned}</Typography>
                                        </Stack>
                                    </Stack>

                                    <Stack alignItems={'center'} sx={{ width: '100%', height: "45vh", marginLeft: '23px' }}>
                                        <Stack flexDirection={'row'} flexWrap={'wrap'} sx={{ width: '100%', height: '98%' }}>
                                            <TextField className='Account-Textfield' label="First Name:" variant="filled"
                                                sx={{ width: '30%', height: "10vh", marginLeft: '23px' }}
                                                value={agentData.firstName}
                                                onChange={(e) => { handleInputChange(e.target.value, "firstName") }}
                                            />
                                            <TextField className='Account-Textfield' label="Last Name:" variant="filled"
                                                sx={{ width: '30%', height: "10vh", marginLeft: '23px' }}
                                                value={agentData.lastName}
                                                onChange={(e) => { handleInputChange(e.target.value, "lastName") }}
                                            />

                                            <TextField label="Level:" variant="filled"
                                                sx={{ width: '30%', marginLeft: '23px' }}
                                                value={agentData.level}
                                                onChange={(e) => { handleInputChange(e.target.value, "level") }}
                                            />

                                            <TextField label="Agent Carrier Number:" variant="filled"
                                                sx={{ width: '30%', marginLeft: '23px' }}
                                                value={agentData.agentCarrierNumber}
                                                onChange={(e) => { handleInputChange(e.target.value, "agentCarrierNumber") }}
                                            />

                                            <TextField label="Agent Title:" variant="filled"
                                                sx={{ width: '30%', marginLeft: '23px' }}
                                                value={agentData.agentTitle}
                                                onChange={(e) => { handleInputChange(e.target.value, "agentTitle") }}
                                            />

                                            <TextField label="Agent Role:" variant="filled"
                                                sx={{ width: '30%', marginLeft: '23px' }}
                                                value={agentData.agentRole}
                                                onChange={(e) => { handleInputChange(e.target.value, "agentRole") }}
                                            />

                                            <TextField label="Recruitment Date:" variant="filled"
                                                sx={{ width: '30%', marginLeft: '23px' }}
                                                value={agentData.recruitmentDate}
                                                onChange={(e) => { handleInputChange(e.target.value, "recruitmentDate") }}
                                            />

                                            <TextField label="Recruits" variant="filled"
                                                sx={{ width: '30%', marginLeft: '23px' }}
                                                value={agentData.recruits}
                                                onChange={(e) => { handleInputChange(e.target.value, "recruits") }}
                                            />

                                            <TextField label="Commission Earned:" variant="filled"
                                                sx={{ width: '30%', marginLeft: '23px' }}
                                                value={agentData.commissionEarned}
                                                onChange={(e) => { handleInputChange(e.target.value, "commissionEarned") }}
                                            />

                                            <TextField label="Email:" variant="filled"
                                                sx={{ width: '30%', marginLeft: '23px' }}
                                                value={agentData.email}
                                                onChange={(e) => { handleInputChange(e.target.value, "email") }}
                                            />

                                        </Stack>
                                    </Stack>
                                </Stack>

                                <Stack justifyContent={'flex-end'} alignItems={'flex-end'} sx={{ width: '97%', height: '20vh' }}>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor: "#003478",
                                            color: 'white',
                                            width: '170px',
                                            height: "5vh",
                                            fontSize: '12px',
                                            "&:hover": {
                                                backgroundColor: "#003478",
                                            },
                                        }}
                                        onClick={submitHandler}
                                    >
                                        Submit
                                    </Button>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </div>
            </div >
        </>
    )
}

export default AddNewAgent