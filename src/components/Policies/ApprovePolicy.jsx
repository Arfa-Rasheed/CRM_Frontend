import React, { useEffect, useState } from 'react'
import { Box, Button, Grid, InputAdornment, TextField, Stack, Typography, Switch } from '@mui/material'
import { MagnifyingGlass, Notepad, Plus } from 'phosphor-react'
import Header from '../../Layout/Header'
import SideBar from '../../Layout/Sidebar'
import httpClient from '../../_util/api'
import './style.scss'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import Calendar from '../../shared-component/Calender'

const ApprovePolicy = () => {
    const navigate = useNavigate()
    const [commissionSplit, setCommisionSplit] = useState("Yes")
    const [isChecked,setIsChecked] = useState(false)
    const isAdmin = localStorage.getItem("isAdmin")
    const { id } = useParams()
    const [policyData, setPolicyData] = useState({
        date: "",
        policyRegistrationID: "",
        policyValue: 0,
        agentCommission: 0,
        agencyCommissionPercentage: 0,

        policySubmissionDate: "",
        policyCarrier: "",
        policyType: "",
        policyNumber: "",
        advPaymentPercentage: 0,

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

        overwrittingAgentFirstName1: "",
        overwrittingAgentLastName1: "",
        overwrittingAgentCode1: "",
        overwrittingAgentContractLevel1: 0,
        overwrittingAgentCarrierNumber1: "",

        overwrittingAgentFirstName2: "",
        overwrittingAgentLastName2: "",
        overwrittingAgentCode2: "",
        overwrittingAgentContractLevel2: 0,
        overwrittingAgentCarrierNumber2: "",

    }
    )

    const handleInputChange = (data, field, fieldType) => {
        const updatedValue = fieldType === 'number' ? parseFloat(data) : data;
        setPolicyData((prevFormData) => ({ ...prevFormData, [field]: updatedValue }));
    };


    const getPolicyDetail = async () => {
        const res = await httpClient.get(`/policies/getPolicyByID/${id}`).catch((error) => { console.log(error) })
        console.log("Policy DEtail res", res);
        if (res.status === 200) {
            setPolicyData(res?.data)
        }
    }


    const approveHandler = async () => {
        if (id) {
            const res = await httpClient.post(`/policies/approvePolicy/${id}`, policyData).catch((error) => { console.log(error) })
            if (res?.status === 200) {
                console.log(res?.message);
                navigate('/policies')
            }
        }
        else {
            const res = httpClient.post('/policies/addNewPolicy', policyData).catch((error) => { console.log("error", error) })
            if (res?.status === 200) {
                console.log("res", res)
            }
        }
    }

    const handleToggle = () => {
        setIsChecked((prev) => !prev);
      };

    useEffect(() => {
        if (id) {
            getPolicyDetail()
        }

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

                                                className='text-field'
                                                variant="outlined"
                                                value={policyData.date}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "date", "text") }}
                                            />
                                            {/* <Calendar/> */}
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Policy Registration Id:</Typography>
                                            <TextField

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

                                                type='number'
                                                variant="outlined"
                                                value={policyData.policyValue}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "policyValue", "number") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Agency Commision %</Typography>
                                            <TextField

                                                type='number'
                                                variant="outlined"
                                                value={policyData.agencyCommissionPercentage}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "agencyCommissionPercentage", "number") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Agent Commision</Typography>
                                            <TextField

                                                type='number'
                                                // label="Policy Submission Date:" 
                                                className='text-field'
                                                variant="outlined"
                                                value={policyData.agentCommission}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "agentCommission", "number") }}
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
                                                onChange={(e) => { handleInputChange(e.target.value, "policySubmissionDate", "text") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Carrier:</Typography>
                                            <TextField

                                                className='text-field'
                                                variant="outlined"
                                                value={policyData.policyCarrier}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "policyCarrier", "text") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Policy Type:</Typography>
                                            <TextField

                                                variant="outlined"
                                                value={policyData.policyType}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "policyType", "text") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Policy Number</Typography>
                                            <TextField

                                                variant="outlined"
                                                value={policyData.policyNumber}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "policyNumber", "text") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Advance Payment %</Typography>
                                            <TextField

                                                type='number'
                                                // label="Policy Submission Date:" 
                                                className='text-field'
                                                variant="outlined"
                                                value={policyData.advPaymentPercentage}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "advPaymentPercentage", "number") }}
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
                                                    onChange={(e) => { handleInputChange(e.target.value, "insuredFirstName", "text") }}
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
                                                    onChange={(e) => { handleInputChange(e.target.value, "insuredLastName", "text") }}
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
                                                    onChange={(e) => { handleInputChange(e.target.value, "policyStartDate", "text") }}
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
                                                    onChange={(e) => { handleInputChange(e.target.value, "policyEndDate", "text") }}
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
                                                onChange={(e) => { handleInputChange(e.target.value, "agentFirstName", "text") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Agent Last Name:</Typography>
                                            <TextField

                                                className='text-field'
                                                variant="outlined"
                                                value={policyData.agentLastName}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "agentLastName", "text") }}
                                            />,
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Agent Code:</Typography>
                                            <TextField

                                                variant="outlined"
                                                value={policyData.agentCode}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "agentCode", "text") }}
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
                                                onChange={(e) => { handleInputChange(e.target.value, "agentCarrierNumber", "text") }}
                                            />
                                        </Stack>



                                    </Stack>

                                    <Stack direction={'row'}>
                                        <Typography>Is Split</Typography>
                                        <Switch
                                            checked={isChecked}
                                            onChange={handleToggle}
                                            // color="primary" // You can customize the color if needed
                                            sx={{marginTop:'-8px',color:'#003478'}}
                                        />
                                    </Stack>
                                    {
                                        isChecked ? (
                                            <>
                                                {/* Split1 details */}
                                                <Typography className='details-heading'>SPLIT DETAILS:</Typography>
                                                <Stack flexDirection={'row'} justifyContent={'space-between'} flexWrap={'wrap'} sx={{ width: '100%' }}>
                                                    <Stack className='Policy-textfield'>
                                                        <Typography className='input-label' >Agent First Name:</Typography>
                                                        <TextField

                                                            className='text-field'
                                                            variant="outlined"
                                                            value={policyData.split1_AgentFirstName}
                                                            sx={{ width: '20%' }}
                                                            onChange={(e) => { handleInputChange(e.target.value, "split1_AgentFirstName", "text") }}
                                                        />
                                                    </Stack>
                                                    <Stack className='Policy-textfield'>
                                                        <Typography className='input-label'>Agent Last Name:</Typography>
                                                        <TextField

                                                            className='text-field'
                                                            variant="outlined"
                                                            value={policyData.split1_AgentLastName}
                                                            sx={{ width: '20%' }}
                                                            onChange={(e) => { handleInputChange(e.target.value, "split1_AgentLastName", "text") }}
                                                        />
                                                    </Stack>
                                                    <Stack className='Policy-textfield'>
                                                        <Typography className='input-label'>Agent Code:</Typography>
                                                        <TextField

                                                            variant="outlined"
                                                            value={policyData.split1_AgentCode}
                                                            sx={{ width: '20%' }}
                                                            onChange={(e) => { handleInputChange(e.target.value, "split1_AgentCode", "text") }}
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
                                                            onChange={(e) => { handleInputChange(e.target.value, "split1_AgentCarrierNumber", "text") }}
                                                        />
                                                    </Stack>



                                                </Stack>

                                                {/* Split2 Details */}
                                                <Typography className='details-heading'>SPLIT 2 DETAILS:</Typography>
                                                <Stack flexDirection={'row'} justifyContent={'space-between'} flexWrap={'wrap'} sx={{ width: '100%' }}>
                                                    <Stack className='Policy-textfield'>
                                                        <Typography className='input-label' >Agent First Name:</Typography>
                                                        <TextField

                                                            className='text-field'
                                                            variant="outlined"
                                                            value={policyData.split2_AgentFirstName}
                                                            sx={{ width: '20%' }}
                                                            onChange={(e) => { handleInputChange(e.target.value, "split2_AgentFirstName", "text") }}
                                                        />
                                                    </Stack>
                                                    <Stack className='Policy-textfield'>
                                                        <Typography className='input-label'>Agent Last Name:</Typography>
                                                        <TextField

                                                            className='text-field'
                                                            variant="outlined"
                                                            value={policyData.split2_AgentLastName}
                                                            sx={{ width: '20%' }}
                                                            onChange={(e) => { handleInputChange(e.target.value, "split2_AgentLastName", "text") }}
                                                        />
                                                    </Stack>
                                                    <Stack className='Policy-textfield'>
                                                        <Typography className='input-label'>Agent Code:</Typography>
                                                        <TextField

                                                            variant="outlined"
                                                            value={policyData.split2_AgentCode}
                                                            sx={{ width: '20%' }}
                                                            onChange={(e) => { handleInputChange(e.target.value, "split2_AgentCode", "text") }}
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
                                                            onChange={(e) => { handleInputChange(e.target.value, "split2_AgentCarrierNumber", "text") }}
                                                        />
                                                    </Stack>



                                                </Stack>
                                            </>
                                        ) :
                                            (
                                                <></>
                                            )
                                    }

                                    {/* Overwrite1 details */}
                                    <Typography className='details-heading'>OVERWRITE1 DETAILS:</Typography>
                                    <Stack flexDirection={'row'} justifyContent={'space-between'} flexWrap={'wrap'} sx={{ width: '100%' }}>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label' >Agent First Name:</Typography>
                                            <TextField

                                                className='text-field'
                                                variant="outlined"
                                                value={policyData.overwrittingAgentFirstName1}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "overwrittingAgentFirstName1", "text") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Agent Last Name:</Typography>
                                            <TextField

                                                className='text-field'
                                                variant="outlined"
                                                value={policyData.overwrittingAgentLastName1}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "overwrittingAgentLastName1", "text") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Agent Code:</Typography>
                                            <TextField

                                                variant="outlined"
                                                value={policyData.overwrittingAgentCode1}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "overwrittingAgentCode1", "text") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Contract Level:</Typography>
                                            <TextField

                                                variant="outlined"
                                                value={policyData.overwrittingAgentContractLevel1}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "overwrittingAgentContractLevel1") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Agent Carrier Number</Typography>
                                            <TextField

                                                className='text-field'
                                                variant="outlined"
                                                value={policyData.overwrittingAgentCarrierNumber1}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "overwrittingAgentCarrierNumber1", "text") }}
                                            />
                                        </Stack>



                                    </Stack>

                                    {/* Overwrite2 Details */}
                                    <Typography className='details-heading'>OVERWRITE2 DETAILS:</Typography>
                                    <Stack flexDirection={'row'} justifyContent={'space-between'} flexWrap={'wrap'} sx={{ width: '100%' }}>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label' >Agent First Name:</Typography>
                                            <TextField

                                                className='text-field'
                                                variant="outlined"
                                                value={policyData.overwrittingAgentFirstName2}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "overwrittingAgentFirstName2", "text") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Agent Last Name:</Typography>
                                            <TextField

                                                className='text-field'
                                                variant="outlined"
                                                value={policyData.overwrittingAgentLastName2}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "overwrittingAgentLastName2", "text") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Agent Code:</Typography>
                                            <TextField

                                                variant="outlined"
                                                value={policyData.overwrittingAgentCode1}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "overwrittingAgentCode1", "text") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Contract Level:</Typography>
                                            <TextField

                                                variant="outlined"
                                                value={policyData.overwrittingAgentContractLevel2}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "overwrittingAgentContractLevel2") }}
                                            />
                                        </Stack>
                                        <Stack className='Policy-textfield'>
                                            <Typography className='input-label'>Agent Carrier Number</Typography>
                                            <TextField

                                                className='text-field'
                                                variant="outlined"
                                                value={policyData.overwrittingAgentCarrierNumber2}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "overwrittingAgentCarrierNumber2", "text") }}
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
                                                value={policyData.overwrittingAgentLastName1}
                                                sx={{ width: '20%' }}
                                                onChange={(e) => { handleInputChange(e.target.value, "overwrittingAgentLastName1") }}
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

                                    <Stack sx={{ width: '100%', }} >
                                        <Stack
                                            flexDirection={'row'}
                                            alignItems={'center'}
                                            justifyContent={'flex-end'}
                                            sx={{ width: '100%', height: '13vh' }}>
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
                                                // onClick={() => navigate('/policies')}
                                                onClick={approveHandler}
                                            >
                                                {id ? "Approve" : "Save"}
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

export default ApprovePolicy