import React, { useEffect, useRef, useState } from 'react'
import { Box, Button, Grid, InputAdornment, TextField, Stack } from '@mui/material'
import { MagnifyingGlass, Plus } from 'phosphor-react'
import Header from '../../Layout/Header'
import SideBar from '../../Layout/Sidebar'
import httpClient from '../../_util/api'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import CustomizedSnackbars from '../../shared-component/Snackbar/SnackBar'
import { useDispatch } from 'react-redux'
import { hideLoader, showLoader } from '../../Store/mainSlice'

const AddNewPolicy_Agent = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const snackbar_Ref = useRef(null)
    const dispatch = useDispatch()
    // const agentCode = localStorage.getItem('agentCode')
    // const agentCarrierNumber = localStorage.getItem('agentCarrierNumber')
    // const contractLevel = localStorage.getItem('contractLevel')
    const [policyData, setPolicyData] = useState({
        date: "",
        policyCarrier: "",
        policyType: "",
        policyNumber: 0,
        agentCode: localStorage.getItem('agentCode'),
        agentCarrierNumber: localStorage.getItem('agentCarrierNumber'),
        contractLevel: localStorage.getItem('contractLevel'),
        overwrittingAgentFirstName: "",
        overwrittingAgentLastName: "",
        policyValue: 0,
        // advPaymentPercentage: 0,
        // advPayment: 0
        insuredFirstName: "",
        insuredLastName: "",
    })

    const handleInputChange = (data, field) => {
        setPolicyData((prevFormData) => ({ ...prevFormData, [field]: data }));
    };

    const addNewPolicyHandler =async () => {
        dispatch(showLoader())
        const res =await httpClient.post('/policies/addNewPolicy', policyData)
            .catch((error) => {
                dispatch(hideLoader())
                console.log("error", error)
                snackbar_Ref.current.showMessage("error", error?.response.data.message, "", "i-chk-circle");
            })

        if (res?.status === 200) {
            dispatch(hideLoader())
            snackbar_Ref.current.showMessage("success", res?.data.message, "", "i-chk-circle");
            setTimeout(() => {
                navigate('/policies')
            }, 6000);

        }
    }

    const getPolicyDetail = async () => {
        dispatch(showLoader())
        const res = await httpClient.get(`/policies/getPolicyByID/${id}`).catch((error) => {
            dispatch(hideLoader())
            snackbar_Ref.current.showMessage("error", error?.response.data.message, "", "i-chk-circle");
         })
    
        if (res.status === 200) {
            dispatch(hideLoader())
            setPolicyData(res?.data)
        }
    }

    useEffect(() => {
        console.log("agentCode",policyData.agentCode);
        if (id) {
            getPolicyDetail()
        }
    }, [])

    return (
        <div>
            <Header />
            <div style={{ marginTop: '59px' }}>
                <div style={{
                    display: 'flex',
                    height: '91.6vh',
                    overflowY: 'hidden'
                }}>
                    <SideBar />
                    <CustomizedSnackbars ref={snackbar_Ref}/>
                    <Stack sx={{ width: '81.8%' ,marginLeft:'18%'}}>
                        <Stack alignItems={'center'} justifyContent={'center'} sx={{ width: '100%', height: "105vh", marginTop: '10px' }}>
                            <Stack alignItems={'center'} sx={{ width: '96%', height: '94%', backgroundColor: '#F2F2F2', borderRadius: '20px' }}>
                                <Stack alignItems={'center'} justifyContent={'center'} sx={{ width: '81%', height: '100%' }}>
                                    <Stack flexDirection={'row'} justifyContent={'space-between'} flexWrap={'wrap'} sx={{ width: '100%', height: '59%' }}>
                                        <TextField
                                            disabled={id ? true : false}
                                            label="Date:"
                                            variant="filled"
                                            value={policyData.date}
                                            sx={{ width: '30%' }}
                                            onChange={(e) => { handleInputChange(e.target.value, "date") }}
                                        />
                                        <TextField
                                            disabled={id ? true : false}
                                            label="Policy Carrier:"
                                            variant="filled"
                                            sx={{ width: '30%' }}
                                            value={policyData.policyCarrier}
                                            onChange={(e) => { handleInputChange(e.target.value, "policyCarrier") }}
                                        />
                                        <TextField
                                            disabled={id ? true : false}
                                            label="Policy Type:"
                                            variant="filled"
                                            sx={{ width: '30%' }}
                                            value={policyData.policyType}
                                            onChange={(e) => { handleInputChange(e.target.value, "policyType") }}
                                        />

                                        <TextField
                                            disabled={id ? true : false}
                                            sx={{ width: '30%' }}
                                            label="Policy Number:"
                                            variant="filled"
                                            value={policyData.policyNumber}
                                            onChange={(e) => { handleInputChange(e.target.value, "policyNumber") }}
                                        />
                                        <TextField
                                            disabled={id ? true : false}
                                            sx={{ width: '30%' }}
                                            label="Agent Carrier Number:"
                                            variant="filled"
                                            value={policyData.agentCarrierNumber}
                                            onChange={(e) => { handleInputChange(e.target.value, "agentCarrierNumber") }}
                                        />

                                        <TextField
                                            disabled={true}
                                            label="Agent Code:"
                                            variant="filled"
                                            sx={{ width: '30%' }}
                                            value={policyData.agentCode}
                                            onChange={(e) => { handleInputChange(e.target.value, "agentCode") }}
                                        />

                                        <TextField
                                            disabled={true}
                                            label="Contract Level:"
                                            variant="filled"
                                            sx={{ width: '30%' }}
                                            value={policyData.contractLevel}
                                            onChange={(e) => { handleInputChange(e.target.value, "contractLevel") }}
                                        />
                                        <TextField
                                            disabled={id ? true : false}
                                            label="Policy Premium:"
                                            variant="filled"
                                            sx={{ width: '30%' }}
                                            value={policyData.policyValue}
                                            onChange={(e) => { handleInputChange(e.target.value, "policyValue") }}
                                        />
                                        {/* <TextField
                                            disabled={id ? true : false}
                                            label="Adv Payment %:"
                                            variant="filled"
                                            sx={{ width: '30%' }}
                                            value={policyData.advPaymentPercentage}
                                            onChange={(e) => { handleInputChange(e.target.value, "advPaymentPercentage") }}
                                        /> */}
                                        <TextField
                                            disabled={id ? true : false}
                                            label="Insured First Name:"
                                            variant="filled"
                                            sx={{ width: '30%' }}
                                            value={policyData.insuredFirstName}
                                            onChange={(e) => { handleInputChange(e.target.value, "insuredFirstName") }}
                                        />
                                        <TextField
                                            disabled={id ? true : false}
                                            label="Insured Last Name:"
                                            variant="filled"
                                            sx={{ width: '30%' }}
                                            value={policyData.insuredLastName}
                                            onChange={(e) => { handleInputChange(e.target.value, "insuredLastName") }}
                                        />
                                    </Stack>
                                    <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'} sx={{ width: '90%', height: '13vh', display: id ? "none" : "" }}>
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