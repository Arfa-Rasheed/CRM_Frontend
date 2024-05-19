import { MagnifyingGlass, Notepad } from 'phosphor-react'
import React, { useEffect, useRef, useState } from 'react'
import SideBar from '../../Layout/Sidebar'
import Header from '../../Layout/Header'
import { Avatar, Box, Button, Grid, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import PersonIcon from '../../assets/PersonIcon.png'
import profilePhoto from '../../assets/profilePhotoCRM.png'
import './style.scss'
import httpClient from '../../_util/api'
import CRMGrid from '../../shared-component/CRM-Grid.jsx'
import { useDispatch } from 'react-redux'
import { hideLoader, showLoader } from '../../Store/mainSlice.js'
import CustomizedSnackbars from '../../shared-component/Snackbar/SnackBar.jsx'

const AgentDetail = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const snackbar_Ref = useRef(null)
    const { _id } = useParams()
    const [policyData,setPolicyData] = useState([])
    const [agentData, setAgentData] = useState({
        id:"",
        firstName: "",
        lastName: "",
        level: 0,
        email: "",
        OTP: "",
        verified: false,
        agentCode: "",
        agentTitle: "",
        agentRole: "",
        recruitingAgentCode:"",
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
            field: 'overwrittingAgentFirstName1',
            headerName: "OW Agent1:",
            width: '20%',
        },
        {
            field: 'overwrittingAgentFirstName2',
            headerName: "OW Agent2:",
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
            field: 'policyValue',
            headerName: "Policy Premium:",
            width: '20%',
        },
    ]

   

    const LoadAgentData = async () => {
        dispatch(showLoader())
        const res = await httpClient.get(`/agents/getAgentByID/${_id}`).catch((error) => { 
            snackbar_Ref.current.showMessage("error", error?.response.data.message, "", "i-chk-circle");
        })

        if (res?.status === 200) {
            dispatch(hideLoader())
            console.log("Detail res", res.data)
            setAgentData(res?.data.agentDetails)
            setPolicyData(res?.data.policyDetailsArray)
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
                    <CustomizedSnackbars ref={snackbar_Ref} />
                    <Stack sx={{ width: '81.7%',backgroundColor:'#F2F2F2' ,marginLeft:'18%' }}>
                        <Box sx={{ width: '100%', height: '19vh', display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                            <Box sx={{ width: '60%', height: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                <Box sx={{ height: '12vh' }}>
                                     <h2 style={{ color: 'black', textAlign: 'center' }}>Agent Detail</h2>
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
                                        onClick={() => { navigate(`/addAgent/${agentData.id}`) }}
                                    >
                                        <Grid container
                                            alignItems={'center'}
                                            sx={{ width: '100%' }}
                                        >
                                            <Grid item md="3">
                                                <img src={PersonIcon} />
                                            </Grid>
                                            <Grid item md="9">Edit Agent Details</Grid>

                                        </Grid>
                                    </Button>
                                </Box>

                            </Box>
                        </Box>

                        <Stack flexDirection={'row'} justifyContent={'center'} sx={{ width: "97%", height: '56%' }}>
                            <Stack alignItems={'center'} sx={{ width: '58%', height: '42vh', backgroundColor: 'white', borderRadius: '20px' }}>
                                <Box sx={{ width: '22%', height: '12vh' }}>
                                    {/* <img src={profilePhoto} style={{ width: '100%', height: '100%' }} /> */}
                                    {
                                        agentData.profilePic ? (
                                            <img src={agentData.profilePic} style={{ width: '100%', height: '100%' ,borderRadius:"15px" }} /> 
                                        )
                                        :
                                        <Avatar sx={{ width: '100%', height: '100%' }} />
                                    }
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
                                        <Typography className='agentDetail-text'>{agentData.recruitingAgentCode }</Typography>
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
                                gridData={policyData}
                            />
                        </div>



                    </Stack>
                </div>
            </div>

        </>
    )
}

export default AgentDetail

// import { Checkbox, FormControlLabel, FormGroup, Stack, TextField, Typography } from '@mui/material'
// import React from 'react'
// import SideBar from '../../Layout/Sidebar'
// import Header from '../../Layout/Header'
// import './style.scss'

// const AddNewRecruit = () => {
//     return (
//         <>
//             <Header />
//             <div style={{ marginTop: '56px' }}>
//                 <div style={{
//                     display: 'flex',
//                     height: '100vh',
//                     // overflowY: 'hidden'
//                 }}>

//                     <SideBar />
//                     <Stack alignItems={'center'} justifyContent={'center'} sx={{marginLeft:'18%',width: '82%', height: '198vh', marginTop: '9px', }}>
//                         <Stack justifyContent={'space-between'} sx={{  width: '88%', height: '88%' }}>
//                             <Stack className='text-field-container'>
//                             <Stack className='text-field'>
//                                 <Typography className='form-questions'>To start up, please tell us Agent's Resident State </Typography>
//                                 <TextField />
//                             </Stack>
//                             </Stack>
                        
//                             <Stack>
//                                 <Typography className='form-questions'>Is Agent above 18 yrs and legally authorized to work in the U. S.? </Typography>
//                                 <FormGroup>
//                                     <FormControlLabel control={<Checkbox />} label="Yes" />
//                                     <FormControlLabel control={<Checkbox />} label="No" />
//                                 </FormGroup>
//                             </Stack>

//                             {/* Name Stack */}
//                             <Stack>
//                                 <Typography className='form-questions'>Name</Typography>
//                                 <Stack>
//                                     <Stack flexDirection={'row'} className='text-field-container'>
//                                         <Stack className='text-field'>
//                                             <TextField />
//                                             <Typography>First</Typography>
//                                         </Stack>

//                                         <Stack className='text-field'>
//                                             <TextField />
//                                             <Typography>Last</Typography>
//                                         </Stack>
//                                     </Stack>
//                                 </Stack>
//                             </Stack>

//                             {/* Email Stack */}
//                             <Stack>
//                                 <Typography className='form-questions'>Email</Typography>
//                                 <Stack>
//                                     <Stack flexDirection={'row'} className='text-field-container'>
//                                         <Stack className='text-field'>
//                                             <TextField />
//                                             <Typography>Email</Typography>
//                                         </Stack>

//                                         <Stack className='text-field'>
//                                             <TextField />
//                                             <Typography>Confirm Email</Typography>
//                                         </Stack>
//                                     </Stack>
//                                 </Stack>
//                             </Stack>

//                             {/* Address Stack */}
//                             <Stack>
//                                 <Typography className='form-questions'>Address</Typography>
//                                 <Stack>
//                                     <Stack className='text-field-container'>
//                                         <Stack className='text-field'>
//                                             <TextField />
//                                             <Typography>Address Line1</Typography>
//                                         </Stack>

//                                         <Stack className='text-field'>
//                                             <TextField />
//                                             <Typography>Address Line2</Typography>
//                                         </Stack>
//                                     </Stack>

//                                     <Stack flexDirection={'row'} className='text-field-container'>
//                                         <Stack className='text-field'>
//                                             <TextField />
//                                             <Typography>City</Typography>
//                                         </Stack>

//                                         <Stack className='text-field'>
//                                             <TextField />
//                                             <Typography>State</Typography>
//                                         </Stack>
//                                     </Stack>

//                                     <Stack className='text-field-container'>
//                                         <Stack className='text-field'>
//                                             <TextField />
//                                             <Typography>Zip Code</Typography>
//                                         </Stack>
//                                     </Stack>


//                                 </Stack>
//                             </Stack>

//                             {/* Active Licensed Stack  */}
//                             <Stack >
//                                 <Typography className='form-questions'>Do Agent have an Active License?</Typography>
//                                 <Stack>
//                                     <FormGroup>
//                                         <Stack flexDirection={'row'}>
//                                             <FormControlLabel control={<Checkbox />} label="Yes" />
//                                             <FormControlLabel control={<Checkbox />} label="No" />
//                                         </Stack>
//                                     </FormGroup>
//                                 </Stack>
//                             </Stack>

//                             {/* Recruiting Stack */}
//                             <Stack className='text-field-container'>
//                                 <Typography className='form-questions'>Who is Recruiting Agent?</Typography>
//                                 <Stack className='text-field'>
//                                     <TextField/>
//                                 </Stack>
//                             </Stack>

//                             <Stack className='text-field-container'>
//                                 <Typography className='form-questions'>Agent's Contract Level</Typography>
//                                 <Stack className='text-field'>
//                                     <TextField/>
//                                 </Stack>
//                             </Stack>


//                             <Stack className='text-field-container'>
//                                 <Typography className='form-questions'>Agent's Role</Typography>
//                                 <Stack className='text-field'>
//                                     <TextField/>
//                                 </Stack>
//                             </Stack>


//                             <Stack className='text-field-container'>
//                                 <Typography className='form-questions'>Agent's Title</Typography>
//                                 <Stack className='text-field'>
//                                     <TextField/>
//                                 </Stack>
//                             </Stack>

//                         </Stack>

//                     </Stack>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default AddNewRecruit
