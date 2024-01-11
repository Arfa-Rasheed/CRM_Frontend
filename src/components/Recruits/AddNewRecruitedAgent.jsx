// import React, { useState } from 'react'
// import Header from '../../Layout/Header'
// import SideBar from '../../Layout/Sidebar'
// import { Box, Stack, TextField, Typography, Button } from '@mui/material'
// import profilePhoto from '../../assets/profilePhotoCRM.png'
// import './style.scss'
// import httpClient from '../../_util/api'
// import { useNavigate } from 'react-router-dom'

// const AddNewRecruit = () => {
//     const navigate = useNavigate()
//     const [agentData,setAgentData] = useState({
//         name:"",
//         level:0,
//         recruitingAgentCode:"",
//         agentTitle:"",
//         agentRole:"",
//         recruitmentDate:"",
//         recruits:0,
//         commissionEarned:0,
//         licensed:"",
//         residenceState:"",
//         address:"",
//         email:""
//     })

//     const handleInputChange = (data, field) => {
//         setAgentData((prevFormData) => ({ ...prevFormData, [field]: data }));
//     };

//     // const submitHandler =async()=>{

//     //     const res= await httpClient.post('/recruits/addNewRecruits',agentData).catch((error) => { console.log("error: ",error) })
//     //     console.log("res",res)
//     //     if(res?.status === 200){
//     //         console.log("Add new recruit res",res);
//     //         navigate('/recruits')
//     //     }

//     // }

//     const submitHandler =async()=>{
//         console.log("agentData",agentData);
//         const res =await httpClient.post('/agents/addNewAgent',agentData).catch((error) => { console.log("error: ",error) })
//         console.log("res",res)
//         if(res?.status === 200){
//             console.log("Add new recruit res",res);
//             navigate('/agent')
//         }
//     }


//     return (
//         <>
//             <Header />
//             <div style={{ marginTop: '56px' }}>
//                 <div style={{
//                     display: 'flex',
//                     height: '92vh',
//                 }}>
//                     <SideBar />
//                     <Stack alignItems={'center'} justifyContent={'center'} sx={{ width: '100%', height: '92vh' }}>
//                         <Stack alignItems={'center'} justifyContent={'center'} sx={{ width: '98%', height: '95%', backgroundColor: '#F2F2F2', borderRadius: '15px' }}>

//                             <Stack alignItems={'center'} sx={{ width: '100%', height: '73%' }}>
//                                 <Stack  flexDirection={'row'} justifyContent={'center'} sx={{ width: "97%", height: '68%'}}>
//                                     <Stack alignItems={'center'} sx={{ width: '58%', height: '42vh', backgroundColor: 'white', borderRadius: '20px' }}>
//                                         <Box sx={{ width: '22%', height: '12vh' }}>
//                                             <img src={profilePhoto} style={{ width: '100%', height: '100%' }} />
//                                         </Box>
//                                         <Stack>
//                                             <Typography>Name:</Typography>
//                                             <Typography>Level:</Typography>
//                                             <Typography>Agent Code:</Typography>
//                                             <Typography>Agent Title:</Typography>
//                                             <Typography>Agent Role:</Typography>
//                                             <Typography>Recruitment Date:</Typography>
//                                             <Typography>Recruits:</Typography>
//                                             <Typography>Commision Earned:</Typography>
//                                         </Stack>
//                                     </Stack>

//                                     <Stack alignItems={'center'} sx={{ width: '100%', height: "45vh", marginLeft: '23px' }}>
//                                         <Stack flexDirection={'row'} flexWrap={'wrap'} sx={{ width: '100%', height: '100%' }}>
//                                             <TextField className='Account-Textfield' label="Name:" variant="filled" 
//                                             sx={{ width: '30%', marginLeft: '23px' }} 
//                                             value={agentData.name}
//                                             onChange={(e)=>{handleInputChange(e.target.value,"name")}}
//                                             />

//                                             <TextField label="Level:" variant="filled" 
//                                             sx={{ width: '30%', marginLeft: '23px' }}
//                                             value={agentData.level}
//                                             onChange={(e)=>{handleInputChange(e.target.value,"level")}}
//                                             />

//                                             <TextField label="Agent Code:" variant="filled" 
//                                             sx={{ width: '30%', marginLeft: '23px' }}
//                                             value={agentData.recruitingAgentCode}
//                                             onChange={(e)=>{handleInputChange(e.target.value,"recruitingAgentCode")}}
//                                             />

//                                             <TextField label="Agent Title:" variant="filled" 
//                                             sx={{ width: '30%', marginLeft: '23px' }}
//                                             value={agentData.agentTitle}
//                                             onChange={(e)=>{handleInputChange(e.target.value,"agentTitle")}}
//                                             />

//                                             <TextField label="Agent Role:" variant="filled" 
//                                             sx={{ width: '30%', marginLeft: '23px' }}
//                                             value={agentData.agentRole}
//                                             onChange={(e)=>{handleInputChange(e.target.value,"agentRole")}}
//                                             />

//                                             <TextField label="Recruitment Date:" variant="filled" 
//                                             sx={{ width: '30%', marginLeft: '23px' }}
//                                             value={agentData.recruitmentDate}
//                                             onChange={(e)=>{handleInputChange(e.target.value,"recruitmentDate")}}
//                                             />

//                                             <TextField label="Recruits" variant="filled" 
//                                             sx={{ width: '30%', marginLeft: '23px' }} 
//                                             value={agentData.recruits}
//                                             onChange={(e)=>{handleInputChange(e.target.value,"recruits")}}                       
//                                             />

//                                             <TextField label="Commission Earned:" variant="filled" 
//                                             sx={{ width: '30%', marginLeft: '23px' }} 
//                                             value={agentData.commissionEarned}
//                                             onChange={(e)=>{handleInputChange(e.target.value,"commissionEarned")}}
//                                             />
//                                             <TextField label="Licensed:" variant="filled" 
//                                             sx={{ width: '30%', marginLeft: '23px' }} 
//                                             value={agentData.licensed}
//                                             onChange={(e)=>{handleInputChange(e.target.value,"licensed")}}
//                                             />
//                                             <TextField label="Residence State:" variant="filled" 
//                                             sx={{ width: '30%', marginLeft: '23px' }} 
//                                             value={agentData.residenceState}
//                                             onChange={(e)=>{handleInputChange(e.target.value,"residenceState")}}
//                                             />
//                                             <TextField label="Address:" variant="filled" 
//                                             sx={{ width: '30%', marginLeft: '23px' }} 
//                                             value={agentData.address}
//                                             onChange={(e)=>{handleInputChange(e.target.value,"address")}}
//                                             />
//                                             <TextField label="Email:" variant="filled" 
//                                             sx={{ width: '30%', marginLeft: '23px' }} 
//                                             value={agentData.email}
//                                             onChange={(e)=>{handleInputChange(e.target.value,"email")}}
//                                             />

//                                         </Stack>
//                                     </Stack>
//                                 </Stack>

//                                 <Stack justifyContent={'flex-end'} alignItems={'flex-end'} sx={{width:'97%',height:'20vh'}}>
//                                 <Button
//                                     variant="contained"
//                                     sx={{
//                                         backgroundColor: "#003478",
//                                         color: 'white',
//                                         width: '170px',
//                                         height: "5vh",
//                                         fontSize: '12px',
//                                         "&:hover": {
//                                             backgroundColor: "#003478",
//                                         },
//                                     }}
//                                     onClick={submitHandler}
//                                 >
//                                     Submit
//                                 </Button>
//                                 </Stack>
//                             </Stack>
//                         </Stack>
//                     </Stack>
//                 </div>
//             </div >
//         </>
//     )
// }

// export default AddNewRecruit



import React, { useState } from 'react'
import Header from '../../Layout/Header'
import SideBar from '../../Layout/Sidebar'
import { Box, Stack, TextField, Typography, Button } from '@mui/material'
import profilePhoto from '../../assets/profilePhotoCRM.png'
import './style.scss'
import httpClient from '../../_util/api'
import { useNavigate } from 'react-router-dom'

const AddNewAgent = () => {
    const navigate = useNavigate()
     const [agentData,setAgentData] = useState({
        name:"",
        level:0,
        recruitingAgentCode:"",
        agentTitle:"",
        agentRole:"",
        recruitmentDate:"",
        recruits:0,
        commissionEarned:"",
        email:""
    })

    const handleInputChange = (data, field) => {
        
        setAgentData((prevFormData) => ({ ...prevFormData, [field]: data }));
    };

    const submitHandler =async()=>{
        console.log("agentData",agentData);
        const res =await httpClient.post('/agents/addNewAgent',agentData).catch((error) => { console.log("error: ",error) })
        console.log("res",res)
        if(res?.status === 200){
            console.log("Add new agent res",res);
            navigate('/agent')
        }
    }

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
                    <Stack alignItems={'center'} justifyContent={'center'} sx={{ width: '100%', height: '92vh' }}>
                        <Stack alignItems={'center'} justifyContent={'center'} sx={{ width: '98%', height: '95%', backgroundColor: '#F2F2F2', borderRadius: '15px' }}>

                            <Stack alignItems={'center'} sx={{ width: '100%', height: '73%' }}>
                                <Stack  flexDirection={'row'} justifyContent={'center'} sx={{ width: "97%", height: '68%'}}>
                                    <Stack alignItems={'center'} sx={{ width: '58%', height: '42vh', backgroundColor: 'white', borderRadius: '20px' }}>
                                        <Box sx={{ width: '22%', height: '12vh' }}>
                                            <img src={profilePhoto} style={{ width: '100%', height: '100%' }} />
                                        </Box>
                                        <Stack>
                                            <Typography>Name:</Typography>
                                            <Typography>Level:</Typography>
                                            <Typography>Agent Code:</Typography>
                                            <Typography>Agent Title:</Typography>
                                            <Typography>Agent Role:</Typography>
                                            <Typography>Recruitment Date:</Typography>
                                            <Typography>Recruits:</Typography>
                                            <Typography>Commision Earned:</Typography>
                                        </Stack>
                                    </Stack>

                                    <Stack alignItems={'center'} sx={{ width: '100%', height: "45vh", marginLeft: '23px' }}>
                                        <Stack flexDirection={'row'} flexWrap={'wrap'} sx={{ width: '100%', height: '79%' }}>
                                            <TextField className='Account-Textfield' label="Name:" variant="filled" 
                                            sx={{ width: '30%', height: "10vh", marginLeft: '23px' }} 
                                            value={agentData.name}
                                            onChange={(e)=>{handleInputChange(e.target.value,"name")}}
                                            />

                                            <TextField label="Level:" variant="filled" 
                                            sx={{ width: '30%', marginLeft: '23px' }}
                                            value={agentData.level}
                                            onChange={(e)=>{handleInputChange(e.target.value,"level")}}
                                            />

                                            <TextField label="Agent Code:" variant="filled" 
                                            sx={{ width: '30%', marginLeft: '23px' }}
                                            value={agentData.recruitingAgentCode}
                                            onChange={(e)=>{handleInputChange(e.target.value,"recruitingAgentCode")}}
                                            />

                                            <TextField label="Agent Title:" variant="filled" 
                                            sx={{ width: '30%', marginLeft: '23px' }}
                                            value={agentData.agentTitle}
                                            onChange={(e)=>{handleInputChange(e.target.value,"agentTitle")}}
                                            />

                                            <TextField label="Agent Role:" variant="filled" 
                                            sx={{ width: '30%', marginLeft: '23px' }}
                                            value={agentData.agentRole}
                                            onChange={(e)=>{handleInputChange(e.target.value,"agentRole")}}
                                            />

                                            <TextField label="Recruitment Date:" variant="filled" 
                                            sx={{ width: '30%', marginLeft: '23px' }}
                                            value={agentData.recruitmentDate}
                                            onChange={(e)=>{handleInputChange(e.target.value,"recruitmentDate")}}
                                            />

                                            <TextField label="Recruits" variant="filled" 
                                            sx={{ width: '30%', marginLeft: '23px' }} 
                                            value={agentData.recruits}
                                            onChange={(e)=>{handleInputChange(e.target.value,"recruits")}}                       
                                            />

                                            <TextField label="Commission Earned:" variant="filled" 
                                            sx={{ width: '30%', marginLeft: '23px' }} 
                                            value={agentData.commissionEarned}
                                            onChange={(e)=>{handleInputChange(e.target.value,"commissionEarned")}}
                                            />

                                            <TextField label="Email:" variant="filled" 
                                            sx={{ width: '30%', marginLeft: '23px' }} 
                                            value={agentData.email}
                                            onChange={(e)=>{handleInputChange(e.target.value,"email")}}
                                            />

                                        </Stack>
                                    </Stack>
                                </Stack>

                                <Stack justifyContent={'flex-end'} alignItems={'flex-end'} sx={{width:'97%',height:'20vh'}}>
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