import React, { useState } from 'react'
import { Box, Button, Grid, InputAdornment, TextField,Stack } from '@mui/material'
import { MagnifyingGlass, Plus } from 'phosphor-react'
import Header from '../../Layout/Header'
import SideBar from '../../Layout/Sidebar'
import httpClient from '../../_util/api'

const AddNewPolicy_Agent = () => {

    const [policyData,setPolicyData] = useState({
        policySubmissionDate:"",
        policyCarrier:"",
        policyType:"",
        policyNumber:0,
        agentCarrierNumber:0,
        overwrittingAgentFirstName:"",
        overwrittingAgentLastName:"",
        agentCode:"",
        contractLevel:0,
        policyValue:0
    })

    const handleInputChange = (data, field) => {
        setPolicyData((prevFormData) => ({ ...prevFormData, [field]: data }));
    };

    const addNewPolicyHandler = ()=>{
        const res= httpClient.post('/policies/addNewPolicy',policyData).catch((error) => {console.log("error",error)})

        if(res?.status === 200){
            console.log("res",res)
        }
    }
    
    return (
        <div>
            <Header/>
            <div style={{ marginTop: '59px' }}>
                <div style={{
                    display: 'flex',
                    height: '91.6vh',
                    overflowY:'hidden'
                }}>
                    <SideBar/>
                    <Stack sx={{ width: '81.8%' }}>
                        <Box sx={{ width: '100%', height: '17vh', marginTop: '20px', display: 'flex', alignItems: 'flex-end', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <TextField id="outlined-basic" placeholder="Search" variant="outlined" sx={{ width: '245px', height: '5vh' }}
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
                                    backgroundColor: '#F08613' ,
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
                                    <Grid item md="9"> New Policy</Grid>
                                    <Grid item md="3"><Plus size={20} weight="light" /></Grid>
                                </Grid>
                            </Button>
                        </Box>
                        <Stack alignItems={'center'} justifyContent={'center'} sx={{ width: '100%', height: "105vh", marginTop: '10px' }}>
                            <Stack alignItems={'center'} sx={{ width: '96%', height: '94%', backgroundColor: '#F2F2F2', borderRadius: '20px'}}>
                                <Stack alignItems={'center'} justifyContent={'center'} sx={{ width: '81%', height: '100%' }}>
                                    <Stack flexDirection={'row'} justifyContent={'space-between'} flexWrap={'wrap'} sx={{ width: '100%', height: '59%' }}>
                                        <TextField 
                                        label="Policy Submission Date:" 
                                        variant="filled" 
                                        value={policyData.policySubmissionDate}
                                        sx={{ width: '30%' }} 
                                        onChange={(e)=>{handleInputChange(e.target.value,"policySubmissionDate")}}
                                        />
                                        <TextField  
                                        label="Policy Carrier:" 
                                        variant="filled" 
                                        sx={{ width: '30%' }}
                                        value={policyData.policyCarrier}
                                        onChange={(e)=>{handleInputChange(e.target.value,"policyCarrier")}}
                                        />
                                        <TextField 
                                        label="Policy Type:" 
                                        variant="filled" 
                                        sx={{ width: '30%' }}
                                        value={policyData.policyType}
                                        onChange={(e)=>{handleInputChange(e.target.value,"policyType")}}
                                        />
                                        <TextField 
                                        sx={{ width: '30%' }} 
                                        label="Policy Number:" 
                                        variant="filled" 
                                        value={policyData.policyNumber}
                                        onChange={(e)=>{handleInputChange(e.target.value,"policyNumber")}}
                                         />
                                        <TextField 
                                        sx={{ width: '30%' }}
                                        label="Agaent Carrier Number:" 
                                        variant="filled"
                                        value={policyData.agentCarrierNumber}
                                        onChange={(e)=>{handleInputChange(e.target.value,"agentCarrierNumber")}}
                                        />
                                        <TextField 
                                        label="Writting Agent First Name:" 
                                        variant="filled" 
                                        sx={{ width: '30%' }}
                                        value={policyData.overwrittingAgentFirstName}
                                        onChange={(e)=>{handleInputChange(e.target.value,"overwrittingAgentFirstName")}}
                                        />
                                        <TextField 
                                        label="Writing Agent Last Name" 
                                        variant="filled" 
                                        sx={{ width: '30%' }} 
                                        value={policyData.overwrittingAgentLastName}
                                        onChange={(e)=>{handleInputChange(e.target.value,"overwrittingAgentLastName")}}/>

                                        <TextField 
                                        label="Agent Code:" 
                                        variant="filled" 
                                        sx={{ width: '30%' }} 
                                        value={policyData.agentCode} 
                                        onChange={(e)=>{handleInputChange(e.target.value,"agentCode")}}
                                        />

                                        <TextField label="Contract Level:" 
                                        variant="filled" 
                                        sx={{ width: '30%' }}
                                        value={policyData.contractLevel}
                                        onChange={(e)=>{handleInputChange(e.target.value,"contractLevel")}}
                                        />
                                        <TextField 
                                        label="Policy Premium:" 
                                        variant="filled" 
                                        sx={{ width: '30%' }} 
                                        value={policyData.policyPremium}
                                        onChange={(e)=>{handleInputChange(e.target.value,"policyPremium")}}
                                        />
                                    </Stack>
                                    <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'} sx={{ width: '90%', height: '13vh' }}>
                                        <Button
                                            variant="contained"
                                            sx={{
                                                backgroundColor: "#F08613",
                                                color: 'white',
                                                width: '186px',
                                                height: "5vh",
                                                fontSize: '12px',
                                                "&:hover": {
                                                    backgroundColor: '#F08613',
                                                },
                                            }}
                                        onClick={addNewPolicyHandler}
                                        >
                                            Save
                                        </Button>

                                        <Button
                                            variant="contained"
                                            sx={{
                                                backgroundColor: "#003478",
                                                color: 'white',
                                                width: '186px',
                                                height: "5vh",
                                                fontSize: '12px',
                                                "&:hover": {
                                                    backgroundColor: '#003478',
                                                },
                                            }}
                                        // onClick={() => setNewPolicyClicked(true)}
                                        >
                                            Close
                                        </Button>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </div>
            </div>
        </div>
    )
}

export default AddNewPolicy_Agent