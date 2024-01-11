import React, { useState } from 'react'
import { Box, Button, Grid, InputAdornment, TextField, Stack, Typography } from '@mui/material'
import { MagnifyingGlass, Plus } from 'phosphor-react'
import Header from '../../Layout/Header'
import SideBar from '../../Layout/Sidebar'
import httpClient from '../../_util/api'
import './style.scss'
import { Navigate, useNavigate } from 'react-router-dom'

const AddNewPolicy_Admin = () => {
    const navigate = useNavigate()
    const [policyData, setPolicyData] = useState({
        date: "",
        policyValue: 0,
        agencyCommission: 0,
        agentCommission: 0,

        policySubmissionDate: "",
        policyCarrier: "",
        policyType: "",
        policyNumber: "",
        advPayment: 0,

        insuredFirstName: "",
        insuredLastName: "",
        policyStartDate: "",
        policyEndDate: "",

        agentFirstName: "",
        agentLastName: "",
        agentCode: "",
        contractLevel: 0,
        agentCarrierNumber: "",

        split1_AgentFirstName: "",
        split1_AgentLastName: "",
        split1_AgentCode: "",
        split1_ContractLevel: "",
        split1_AgentCarrierNumber: "",
        split1_splitRatio: "",

        split2_AgentFirstName: "",
        split2_AgentLastName: "",
        split2_AgentCode: "",
        split2_ContractLevel: "",
        split2_AgentCarrierNumber: "",
        split2_splitRatio: "",

        overwrittingAgentFirstName: "",
        overwrittingAgentLastName: "",
        overwrittingAgentCode: "",
        overwrittingAgentContractLevel: 0,
        overwrittingAgentCarrierNumber: "",

        cancellationDate: "",
        cancellationAmount: "",
        chargebackAmount: 0,
        chargeBackDate: 0,

        cancellationAgentFirstName: "",
        cancellationAgentLastName: "",
        cancellationAgentCode: "",
        cancellationAgentContractLevel: "",
        cancellationAgentCarrierNumber: ""
    }
    )

    const handleInputChange = (data, field) => {
        setPolicyData((prevFormData) => ({ ...prevFormData, [field]: data }));
    };

    const addNewPolicyHandler = () => {
        const res = httpClient.post('/policies/addNewPolicy', policyData).catch((error) => { console.log("error", error) })

        if (res?.status === 200) {
            console.log("res", res)
        }
    }

    return (
        <div>
            <Header />
            <div style={{ marginTop: '59px',height:'114vh' }}>
                <div style={{
                    display: 'flex',
                    height: '91.6vh',
                }}>
                    <SideBar />
                    <Stack alignItems={'center'} sx={{ width: '81.8%' }}>
                        {/* <Box sx={{ width: '100%', height: '17vh', marginTop: '20px', display: 'flex', alignItems: 'flex-end', flexDirection: 'column', justifyContent: 'space-between' }}>
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
                                    <Grid item md="9"> New Policy</Grid>
                                    <Grid item md="3"><Plus size={20} weight="light" /></Grid>
                                </Grid>
                            </Button>
                        </Box> */}
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
                                    {/* <Grid item md="3"><img src={AllAgentsIcon} /></Grid> */}
                                    <Grid item md="9">New Policy</Grid>

                                </Grid>
                            </Button>
                        </Box>
                        <Stack alignItems={'center'} justifyContent={'center'} sx={{ width: '100%', height: "112vh", marginTop: '10px' }}>
                            <Stack alignItems={'center'} sx={{ width: '96%', height: '100%', backgroundColor: '#F2F2F2', borderRadius: '20px' }}>
                                <Stack sx={{ width: '89%', height: '100%' }}>
                                    <Stack flexDirection={'row'} justifyContent={'space-between'} flexWrap={'wrap'} sx={{ width: '100%', height: '59%' }}>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label' >Date:</Typography>
                                            <TextField
                                                className='text-field'
                                                variant="outlined"
                                                value={policyData.policySubmissionDate}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "policySubmissionDate") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Policy Registration Id:</Typography>
                                            <TextField
                                                className='text-field'
                                                variant="outlined"
                                                value={policyData.policySubmissionDate}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "policySubmissionDate") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Policy Value</Typography>
                                            <TextField
                                                variant="outlined"
                                                value={policyData.policyValue}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "policyValue") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Agency Commision</Typography>
                                            <TextField
                                                variant="outlined"
                                                value={policyData.agencyCommission}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "agencyCommission") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Agent Commision</Typography>
                                            <TextField
                                                // label="Policy Submission Date:" 
                                                className='text-field'
                                                variant="outlined"
                                                value={policyData.agentCommission}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "agentCommission") }}
                                            />
                                        </Stack>


                                    </Stack>

                                    <Typography className='details-heading'>POLICY DETAILS:</Typography>
                                    <Stack flexDirection={'row'} justifyContent={'space-between'} flexWrap={'wrap'} sx={{ width: '100%' }}>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label' >Policy Submission Date:</Typography>
                                            <TextField
                                                className='text-field'
                                                variant="outlined"
                                                value={policyData.policySubmissionDate}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "policySubmissionDate") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Carrier:</Typography>
                                            <TextField
                                                className='text-field'
                                                variant="outlined"
                                                value={policyData.policyCarrier}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "policyCarrier") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Policy Type:</Typography>
                                            <TextField
                                                variant="outlined"
                                                value={policyData.policyType}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "policyType") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Policy Number</Typography>
                                            <TextField
                                                variant="outlined"
                                                value={policyData.policyNumber}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "policyNumber") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Advance Payment</Typography>
                                            <TextField
                                                // label="Policy Submission Date:" 
                                                className='text-field'
                                                variant="outlined"
                                                value={policyData.advPayment}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "advPayment") }}
                                            />
                                        </Stack>
                                        <Stack flexDirection={'row'} justifyContent={'space-between'} sx={{ width: "79.5%" }}>
                                            <Stack className='Policy-textfield'>
                                                <Typography className='input-label'>Insured First Name</Typography>
                                                <TextField
                                                    // label="Policy Submission Date:" 
                                                    className='text-field'
                                                    variant="outlined"
                                                    value={policyData.insuredFirstName}
                                                    sx={{ width: '20%' }}
                                                    onChange={(e) => { handleInputChange(e.target.value, "insuredFirstName") }}
                                                />
                                            </Stack>
                                            <Stack className='Policy-textfield'>
                                                <Typography className='input-label'>Insured Last Name</Typography>
                                                <TextField
                                                    // label="Policy Submission Date:" 
                                                    className='text-field'
                                                    variant="outlined"
                                                    value={policyData.insuredLastName}
                                                    sx={{ width: '20%' }}
                                                    onChange={(e) => { handleInputChange(e.target.value, "insuredLastName") }}
                                                />
                                            </Stack>
                                            <Stack className='Policy-textfield'>
                                                <Typography className='input-label'>Policy Start date:</Typography>
                                                <TextField
                                                    // label="Policy Submission Date:" 
                                                    className='text-field'
                                                    variant="outlined"
                                                    value={policyData.policyStartDate}
                                                    sx={{ width: '20%' }}
                                                    onChange={(e) => { handleInputChange(e.target.value, "policyStartDate") }}
                                                />
                                            </Stack>
                                            <Stack className='Policy-textfield'>
                                                <Typography className='input-label'>Policy End date:</Typography>
                                                <TextField
                                                    // label="Policy Submission Date:" 
                                                    className='text-field'
                                                    variant="outlined"
                                                    value={policyData.policyEndDate}
                                                    sx={{ width: '20%' }}
                                                    onChange={(e) => { handleInputChange(e.target.value, "policyEndDate") }}
                                                />
                                            </Stack>

                                        </Stack>


                                    </Stack>

                                    <Typography className='details-heading'>AGENT DETAILS:</Typography>
                                    <Stack flexDirection={'row'} justifyContent={'space-between'} flexWrap={'wrap'} sx={{ width: '100%' }}>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label' >Agent First Name:</Typography>
                                            <TextField
                                                className='text-field'
                                                variant="outlined"
                                                value={policyData.agentFirstName}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "agentFirstName") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Agent Last Name:</Typography>
                                            <TextField
                                                className='text-field'
                                                variant="outlined"
                                                value={policyData.agentLastName}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "agentLastName") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Agent Code:</Typography>
                                            <TextField
                                                variant="outlined"
                                                value={policyData.agentCode}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "agentCode") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Contract Level:</Typography>
                                            <TextField
                                                variant="outlined"
                                                value={policyData.contractLevel}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "contractLevel") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Agent Carrier Number</Typography>
                                            <TextField
                                                // label="Policy Submission Date:" 
                                                className='text-field'
                                                variant="outlined"
                                                value={policyData.agentCarrierNumber}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "agentCarrierNumber") }}
                                            />
                                        </Stack>



                                    </Stack>

                                    <Typography className='details-heading'>SPLIT DETAILS:</Typography>
                                    <Stack flexDirection={'row'} justifyContent={'space-between'} flexWrap={'wrap'} sx={{ width: '100%' }}>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label' >Agent First Name:</Typography>
                                            <TextField
                                                className='text-field'
                                                variant="outlined"
                                                value={policyData.split1_AgentFirstName}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "split1_AgentFirstName") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Agent Last Name:</Typography>
                                            <TextField
                                                className='text-field'
                                                variant="outlined"
                                                value={policyData.split1_AgentLastName}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "split1_AgentLastName") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Agent Code:</Typography>
                                            <TextField
                                                variant="outlined"
                                                value={policyData.split1_AgentCode}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "split1_AgentCode") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Contract Level:</Typography>
                                            <TextField
                                                variant="outlined"
                                                value={policyData.split1_ContractLevel}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "split1_ContractLevel") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Agent Carrier Number</Typography>
                                            <TextField
                                                // label="Policy Submission Date:" 
                                                className='text-field'
                                                variant="outlined"
                                                value={policyData.split1_AgentCarrierNumber}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "split1_AgentCarrierNumber") }}
                                            />
                                        </Stack>



                                    </Stack>

                                    {/* Split 2 Details */}
                                    <Typography className='details-heading'>SPLIT 2 DETAILS:</Typography>
                                    <Stack flexDirection={'row'} justifyContent={'space-between'} flexWrap={'wrap'} sx={{ width: '100%' }}>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label' >Agent First Name:</Typography>
                                            <TextField
                                                className='text-field'
                                                variant="outlined"
                                                value={policyData.split2_AgentFirstName}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "split2_AgentFirstName") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Agent Last Name:</Typography>
                                            <TextField
                                                className='text-field'
                                                variant="outlined"
                                                value={policyData.split2_AgentLastName}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "split2_AgentLastName") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Agent Code:</Typography>
                                            <TextField
                                                variant="outlined"
                                                value={policyData.split2_AgentCode}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "split2_AgentCode") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Contract Level:</Typography>
                                            <TextField
                                                variant="outlined"
                                                value={policyData.split2_ContractLevel}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "split2_ContractLevel") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Agent Carrier Number</Typography>
                                            <TextField
                                                // label="Policy Submission Date:" 
                                                className='text-field'
                                                variant="outlined"
                                                value={policyData.split2_AgentCarrierNumber}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "split2_AgentCarrierNumber") }}
                                            />
                                        </Stack>



                                    </Stack>

                                    {/* Overwrite details */}
                                    <Typography className='details-heading'>OVERWRITE DETAILS:</Typography>
                                    <Stack flexDirection={'row'} justifyContent={'space-between'} flexWrap={'wrap'} sx={{ width: '100%' }}>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label' >Agent First Name:</Typography>
                                            <TextField
                                                className='text-field'
                                                variant="outlined"
                                                value={policyData.overwrittingAgentFirstName}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "overwrittingAgentFirstName") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Agent Last Name:</Typography>
                                            <TextField
                                                className='text-field'
                                                variant="outlined"
                                                value={policyData.overwrittingAgentLastName}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "overwrittingAgentLastName") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Agent Code:</Typography>
                                            <TextField
                                                variant="outlined"
                                                value={policyData.overwrittingAgentCode}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "overwrittingAgentCode") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Contract Level:</Typography>
                                            <TextField
                                                variant="outlined"
                                                value={policyData.overwrittingAgentContractLevel}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "overwrittingAgentContractLevel") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Agent Carrier Number</Typography>
                                            <TextField
                                                // label="Policy Submission Date:" 
                                                className='text-field'
                                                variant="outlined"
                                                value={policyData.overwrittingAgentCarrierNumber}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "overwrittingAgentCarrierNumber") }}
                                            />
                                        </Stack>



                                    </Stack>


                                    <Typography className='details-heading'>POLICY CANCELLATION DETAILS:</Typography>
                                    <Stack flexDirection={'row'} justifyContent={'space-between'} flexWrap={'wrap'} sx={{ width: '79.5%', marginTop: '0px' }}>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label' >Cancellation Date:</Typography>
                                            <TextField
                                                className='text-field'
                                                variant="outlined"
                                                value={policyData.cancellationDate}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "cancellationDate") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Cancellation Amount:</Typography>
                                            <TextField
                                                className='text-field'
                                                variant="outlined"
                                                value={policyData.cancellationAmount}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "cancellationAmount") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Charge Back Amount:</Typography>
                                            <TextField
                                                variant="outlined"
                                                value={policyData.chargebackAmount}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "chargebackAmount") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Charge Back Date:</Typography>
                                            <TextField
                                                variant="outlined"
                                                value={policyData.chargeBackDate}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "chargeBackDate") }}
                                            />
                                        </Stack>
                                    </Stack>

                                    <Typography className='details-heading'>CANCELLATION AGENT DETAILS:</Typography>
                                    <Stack flexDirection={'row'} justifyContent={'space-between'} flexWrap={'wrap'} sx={{ width: '100%' }}>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label' >Agent First Name:</Typography>
                                            <TextField
                                                className='text-field'
                                                variant="outlined"
                                                value={policyData.cancellationAgentFirstName}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "cancellationAgentFirstName") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Agent Last Name:</Typography>
                                            <TextField
                                                className='text-field'
                                                variant="outlined"
                                                value={policyData.overwrittingAgentLastName}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "overwrittingAgentLastName") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Agent Code:</Typography>
                                            <TextField
                                                variant="outlined"
                                                value={policyData.cancellationAgentCode}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "cancellationAgentCode") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Contract Level:</Typography>
                                            <TextField
                                                variant="outlined"
                                                value={policyData.cancellationAgentContractLevel}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "cancellationAgentContractLevel") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Agent Carrier Number</Typography>
                                            <TextField
                                                // label="Policy Submission Date:" 
                                                className='text-field'
                                                variant="outlined"
                                                value={policyData.cancellationAgentCarrierNumber}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "cancellationAgentCarrierNumber") }}
                                            />
                                        </Stack>



                                    </Stack>

                                    <Stack alignItems={'center'} sx={{ width: '100%' }}>
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
                                                onClick={() => navigate('/policies')}
                                            >
                                                Close
                                            </Button>
                                        </Stack>
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

export default AddNewPolicy_Admin