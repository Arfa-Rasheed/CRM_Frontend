import React, { useEffect, useState } from 'react'
import { Box, Button, Grid, InputAdornment, TextField, Stack, Typography } from '@mui/material'
import { MagnifyingGlass, Notepad, Plus } from 'phosphor-react'
import Header from '../../Layout/Header'
import SideBar from '../../Layout/Sidebar'
import httpClient from '../../_util/api'
import './style.scss'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import Calendar from '../../shared-component/Calender'

const AddNewPolicy_Admin = () => {
    const navigate = useNavigate()
    const [commissionSplit, setCommisionSplit] = useState("No")
    const isAdmin = localStorage.getItem("isAdmin")
    const {id} = useParams()
    const [policyData, setPolicyData] = useState({
        date: "",
        policyRegistrationID: "",
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

        // cancellationDate: "",
        // cancellationAmount: "",
        // chargebackAmount: 0,
        // chargeBackDate: 0,

        // cancellationAgentFirstName: "",
        // cancellationAgentLastName: "",
        // cancellationAgentCode: "",
        // cancellationAgentContractLevel: "",
        // cancellationAgentCarrierNumber: ""
    }
    )

    const handleInputChange = (data, field, fieldType) => {
        const updatedValue = fieldType === 'number' ? parseFloat(data) : data;
        setPolicyData((prevFormData) => ({ ...prevFormData, [field]: updatedValue }));
    };

    

    const addNewPolicyHandler = () => {
        const res = httpClient.post('/policies/addNewPolicy', policyData).catch((error) => { console.log("error", error) })

        if (res?.status === 200) {
            console.log("res", res)
        }
    }

     const getPolicyDetail = async () => {
        const res = await httpClient.get(`/policies/getPolicyByID/${id}`).catch((error) => { console.log(error) })
        console.log("Policy DEtail res", res);
        if (res.status === 200) {
            setPolicyData(res?.data)
        }
    }

    useEffect(() => {
        getPolicyDetail()
    }, [])

    return (
        <div>
            <Header />
            <div style={{ marginTop: '59px', height: '114vh' }}>
                <div style={{
                    display: 'flex',
                    height: '91.6vh',
                }}>
                    <SideBar />
                    <Stack alignItems={'center'} sx={{ width: '81.8%' }}>
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
                                    <Grid item md="3"><Notepad size={20} weight="light" /></Grid>
                                    <Grid item md="9"> {id ? 'Policy Details' : "New Policy"}</Grid>

                                </Grid>
                            </Button>
                        </Box>
                        <Stack alignItems={'center'} justifyContent={'center'} sx={{ width: '100%', height: "112vh", marginTop: '10px' }}>
                            <Stack alignItems={'center'} sx={{ width: '96%', height: '100%', backgroundColor: '#F2F2F2', borderRadius: '20px' }}>
                                <Stack sx={{ width: '89%' }}>
                                    <Stack flexDirection={'row'} justifyContent={'space-between'} flexWrap={'wrap'} sx={{ width: '100%', height: '59%' }}>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label' >Date:</Typography>
                                            <TextField
                                                disabled={id ? true : false}
                                                className='text-field'
                                                variant="outlined"
                                                value={policyData.date}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "date" ,"text") }}
                                            />
                                            {/* <Calendar/> */}
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Policy Registration Id:</Typography>
                                            <TextField
                                            disabled={id ? true : false}
                                                className='text-field'
                                                variant="outlined"
                                                value={policyData.policyRegistrationID}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "policyRegistrationID") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Policy Value</Typography>
                                            <TextField
                                            disabled={id ? true : false}
                                                type='number'
                                                variant="outlined"
                                                value={policyData.policyValue}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "policyValue", "number") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Agency Commision</Typography>
                                            <TextField
                                            disabled={id ? true : false}
                                                type='number'
                                                variant="outlined"
                                                value={policyData.agencyCommission}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "agencyCommission","number") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Agent Commision</Typography>
                                            <TextField
                                            disabled={id ? true : false}
                                                type='number'
                                                // label="Policy Submission Date:" 
                                                className='text-field'
                                                variant="outlined"
                                                value={policyData.agentCommission}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "agentCommission","number") }}
                                            />
                                        </Stack>


                                    </Stack>

                                    <Typography className='details-heading'>POLICY DETAILS:</Typography>
                                    <Stack flexDirection={'row'} justifyContent={'space-between'} flexWrap={'wrap'} sx={{ width: '100%' }}>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label' >Policy Submission Date:</Typography>
                                            <TextField
                                            disabled={id ? true : false}
                                                className='text-field'
                                                variant="outlined"
                                                value={policyData.policySubmissionDate}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "policySubmissionDate","text") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Carrier:</Typography>
                                            <TextField
                                            disabled={id ? true : false}
                                                className='text-field'
                                                variant="outlined"
                                                value={policyData.policyCarrier}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "policyCarrier","text") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Policy Type:</Typography>
                                            <TextField
                                            disabled={id ? true : false}
                                                variant="outlined"
                                                value={policyData.policyType}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "policyType","text") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Policy Number</Typography>
                                            <TextField
                                            disabled={id ? true : false}
                                                variant="outlined"
                                                value={policyData.policyNumber}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "policyNumber" ,"text") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Advance Payment</Typography>
                                            <TextField
                                            disabled={id ? true : false}
                                                type='number'
                                                // label="Policy Submission Date:" 
                                                className='text-field'
                                                variant="outlined"
                                                value={policyData.advPayment}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "advPayment","number") }}
                                            />
                                        </Stack>
                                        <Stack flexDirection={'row'} justifyContent={'space-between'} sx={{ width: "79.5%" }}>
                                            <Stack className='Policy-textfield'>
                                                <Typography className='input-label'>Insured First Name</Typography>
                                                <TextField
                                                disabled={id ? true : false}
                                                    // label="Policy Submission Date:" 
                                                    className='text-field'
                                                    variant="outlined"
                                                    value={policyData.insuredFirstName}
                                                    sx={{ width: '20%' }}
                                                    onChange={(e) => { handleInputChange(e.target.value, "insuredFirstName","text") }}
                                                />
                                            </Stack>
                                            <Stack className='Policy-textfield'>
                                                <Typography className='input-label'>Insured Last Name</Typography>
                                                <TextField
                                                disabled={id ? true : false}
                                                    // label="Policy Submission Date:" 
                                                    className='text-field'
                                                    variant="outlined"
                                                    value={policyData.insuredLastName}
                                                    sx={{ width: '20%' }}
                                                    onChange={(e) => { handleInputChange(e.target.value, "insuredLastName","text") }}
                                                />
                                            </Stack>
                                            <Stack className='Policy-textfield'>
                                                <Typography className='input-label'>Policy Start date:</Typography>
                                                <TextField
                                                disabled={id ? true : false}
                                                    // label="Policy Submission Date:" 
                                                    className='text-field'
                                                    variant="outlined"
                                                    value={policyData.policyStartDate}
                                                    sx={{ width: '20%' }}
                                                    onChange={(e) => { handleInputChange(e.target.value, "policyStartDate","text") }}
                                                />
                                            </Stack>
                                            <Stack className='Policy-textfield'>
                                                <Typography className='input-label'>Policy End date:</Typography>
                                                <TextField
                                                disabled={id ? true : false}
                                                    // label="Policy Submission Date:" 
                                                    className='text-field'
                                                    variant="outlined"
                                                    value={policyData.policyEndDate}
                                                    sx={{ width: '20%' }}
                                                    onChange={(e) => { handleInputChange(e.target.value, "policyEndDate","text") }}
                                                />
                                            </Stack>

                                        </Stack>


                                    </Stack>

                                    <Typography className='details-heading'>AGENT DETAILS:</Typography>
                                    <Stack flexDirection={'row'} justifyContent={'space-between'} flexWrap={'wrap'} sx={{ width: '100%' }}>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label' >Agent First Name:</Typography>
                                            <TextField
                                            disabled={id ? true : false}
                                                className='text-field'
                                                variant="outlined"
                                                value={policyData.agentFirstName}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "agentFirstName","text") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Agent Last Name:</Typography>
                                            <TextField
                                            disabled={id ? true : false}
                                                className='text-field'
                                                variant="outlined"
                                                value={policyData.agentLastName}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "agentLastName","text") }}
                                            />,
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Agent Code:</Typography>
                                            <TextField
                                            disabled={id ? true : false}
                                                variant="outlined"
                                                value={policyData.agentCode}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "agentCode" , "text") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Contract Level:</Typography>
                                            <TextField
                                            disabled={id ? true : false}
                                                variant="outlined"
                                                value={policyData.contractLevel}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "contractLevel") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Agent Carrier Number</Typography>
                                            <TextField
                                            disabled={id ? true : false}
                                                // label="Policy Submission Date:" 
                                                className='text-field'
                                                variant="outlined"
                                                value={policyData.agentCarrierNumber}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "agentCarrierNumber","text") }}
                                            />
                                        </Stack>



                                    </Stack>

                                    {
                                        commissionSplit === 'Yes' ? (
                                            <>
                                                {/* Split1 details */}
                                                <Typography className='details-heading'>SPLIT DETAILS:</Typography>
                                                <Stack flexDirection={'row'} justifyContent={'space-between'} flexWrap={'wrap'} sx={{ width: '100%' }}>
                                                    <Stack className='Policy-textfield'>
                                                        <Typography className='input-label' >Agent First Name:</Typography>
                                                        <TextField
                                                        disabled={id ? true : false}
                                                            className='text-field'
                                                            variant="outlined"
                                                            value={policyData.split1_AgentFirstName}
                                                            sx={{ width: '20%' }}
                                                            onChange={(e) => { handleInputChange(e.target.value, "split1_AgentFirstName","text") }}
                                                        />
                                                    </Stack>
                                                    <Stack className='Policy-textfield'>
                                                        <Typography className='input-label'>Agent Last Name:</Typography>
                                                        <TextField
                                                        disabled={id ? true : false}
                                                            className='text-field'
                                                            variant="outlined"
                                                            value={policyData.split1_AgentLastName}
                                                            sx={{ width: '20%' }}
                                                            onChange={(e) => { handleInputChange(e.target.value, "split1_AgentLastName","text") }}
                                                        />
                                                    </Stack>
                                                    <Stack className='Policy-textfield'>
                                                        <Typography className='input-label'>Agent Code:</Typography>
                                                        <TextField
                                                        disabled={id ? true : false}
                                                            variant="outlined"
                                                            value={policyData.split1_AgentCode}
                                                            sx={{ width: '20%' }}
                                                            onChange={(e) => { handleInputChange(e.target.value, "split1_AgentCode","text") }}
                                                        />
                                                    </Stack>
                                                    <Stack className='Policy-textfield'>
                                                        <Typography className='input-label'>Contract Level:</Typography>
                                                        <TextField
                                                        disabled={id ? true : false}
                                                            variant="outlined"
                                                            value={policyData.split1_ContractLevel}
                                                            sx={{ width: '20%' }}
                                                            onChange={(e) => { handleInputChange(e.target.value, "split1_ContractLevel") }}
                                                        />
                                                    </Stack>
                                                    <Stack className='Policy-textfield'>
                                                        <Typography className='input-label'>Agent Carrier Number</Typography>
                                                        <TextField
                                                        disabled={id ? true : false}
                                                            // label="Policy Submission Date:" 
                                                            className='text-field'
                                                            variant="outlined"
                                                            value={policyData.split1_AgentCarrierNumber}
                                                            sx={{ width: '20%' }}
                                                            onChange={(e) => { handleInputChange(e.target.value, "split1_AgentCarrierNumber","text") }}
                                                        />
                                                    </Stack>



                                                </Stack>

                                                {/* Split2 Details */}
                                                <Typography className='details-heading'>SPLIT 2 DETAILS:</Typography>
                                                <Stack flexDirection={'row'} justifyContent={'space-between'} flexWrap={'wrap'} sx={{ width: '100%' }}>
                                                    <Stack className='Policy-textfield'>
                                                        <Typography className='input-label' >Agent First Name:</Typography>
                                                        <TextField
                                                        disabled={id ? true : false}
                                                            className='text-field'
                                                            variant="outlined"
                                                            value={policyData.split2_AgentFirstName}
                                                            sx={{ width: '20%' }}
                                                            onChange={(e) => { handleInputChange(e.target.value, "split2_AgentFirstName","text") }}
                                                        />
                                                    </Stack>
                                                    <Stack className='Policy-textfield'>
                                                        <Typography className='input-label'>Agent Last Name:</Typography>
                                                        <TextField
                                                        disabled={id ? true : false}
                                                            className='text-field'
                                                            variant="outlined"
                                                            value={policyData.split2_AgentLastName}
                                                            sx={{ width: '20%' }}
                                                            onChange={(e) => { handleInputChange(e.target.value, "split2_AgentLastName","text") }}
                                                        />
                                                    </Stack>
                                                    <Stack className='Policy-textfield'>
                                                        <Typography className='input-label'>Agent Code:</Typography>
                                                        <TextField
                                                        disabled={id ? true : false}
                                                            variant="outlined"
                                                            value={policyData.split2_AgentCode}
                                                            sx={{ width: '20%' }}
                                                            onChange={(e) => { handleInputChange(e.target.value, "split2_AgentCode","text") }}
                                                        />
                                                    </Stack>
                                                    <Stack className='Policy-textfield'>
                                                        <Typography className='input-label'>Contract Level:</Typography>
                                                        <TextField
                                                        disabled={id ? true : false}
                                                            variant="outlined"
                                                            value={policyData.split2_ContractLevel}
                                                            sx={{ width: '20%' }}
                                                            onChange={(e) => { handleInputChange(e.target.value, "split2_ContractLevel") }}
                                                        />
                                                    </Stack>
                                                    <Stack className='Policy-textfield'>
                                                        <Typography className='input-label'>Agent Carrier Number</Typography>
                                                        <TextField
                                                        disabled={id ? true : false}
                                                            // label="Policy Submission Date:" 
                                                            className='text-field'
                                                            variant="outlined"
                                                            value={policyData.split2_AgentCarrierNumber}
                                                            sx={{ width: '20%' }}
                                                            onChange={(e) => { handleInputChange(e.target.value, "split2_AgentCarrierNumber","text") }}
                                                        />
                                                    </Stack>



                                                </Stack>
                                            </>
                                        ) :
                                            (
                                                <></>
                                            )
                                    }

                                    {/* Overwrite details */}
                                    <Typography className='details-heading'>OVERWRITE DETAILS:</Typography>
                                    <Stack flexDirection={'row'} justifyContent={'space-between'} flexWrap={'wrap'} sx={{ width: '100%' }}>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label' >Agent First Name:</Typography>
                                            <TextField
                                            disabled={id ? true : false}
                                                className='text-field'
                                                variant="outlined"
                                                value={policyData.overwrittingAgentFirstName}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "overwrittingAgentFirstName","text") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Agent Last Name:</Typography>
                                            <TextField
                                            disabled={id ? true : false}
                                                className='text-field'
                                                variant="outlined"
                                                value={policyData.overwrittingAgentLastName}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "overwrittingAgentLastName","text") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Agent Code:</Typography>
                                            <TextField
                                            disabled={id ? true : false}
                                                variant="outlined"
                                                value={policyData.overwrittingAgentCode}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "overwrittingAgentCode","text") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Contract Level:</Typography>
                                            <TextField
                                            disabled={id ? true : false}
                                                variant="outlined"
                                                value={policyData.overwrittingAgentContractLevel}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "overwrittingAgentContractLevel") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Agent Carrier Number</Typography>
                                            <TextField
                                            disabled={id ? true : false}
                                                className='text-field'
                                                variant="outlined"
                                                value={policyData.overwrittingAgentCarrierNumber}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "overwrittingAgentCarrierNumber","text") }}
                                            />
                                        </Stack>



                                    </Stack>




                                    {/* <Typography className='details-heading'>POLICY CANCELLATION DETAILS:</Typography>
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



                                    </Stack> */}

                                    <Stack alignItems={'center'} sx={{ width: '100%' ,display: id ? "none" : ""}} >
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