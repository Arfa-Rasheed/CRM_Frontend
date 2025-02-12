// import { Box, Modal, Typography } from '@mui/material'
// import React from 'react'

// const SignUp = (props) => {
//     // const handleClose 
//     return (
//         <Modal
//             open={props.isSignupModalOpen}
//             // onClose={handleClose}
//             aria-labelledby="modal-modal-title"
//             aria-describedby="modal-modal-description"
//         >
//             <Box>
//                 <Typography id="modal-modal-title" variant="h6" component="h2">
//                     Text in a modal
//                 </Typography>
//                 <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//                     Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//                 </Typography>
//             </Box>
//         </Modal>
//     )
// }

// export default SignUp

import * as React from 'react';
import { useEffect, useRef, useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Autocomplete, Checkbox, FormControlLabel, FormGroup, Stack, TextField, Typography } from '@mui/material';
import { Asterisk } from 'phosphor-react';
import { useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import httpClient from '../../_util/api';
import { hideLoader, showLoader } from '../../Store/mainSlice';
import './style.scss'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const SignUp = (props) => {
    //   const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch()
    const snackbar_Ref = useRef()
    const navigate = useNavigate()
    const [agentData, setAgentData] = React.useState({
        isApproved: false,
        residentState: "",
        age: "",
        firstName: "",
        lastName: "",
        level: 0,
        agentCarrierNumber: "",
        agentTitle: "",
        agentRole: "",
        agentCode: "",
        email: "",
        confirmEmail: "",
        addressLine1: "",
        city: "",
        state: "",
        zipCode: 0,
        activeLicense: "",
    })

    const states =
    [
        'Alabama',
        'Alaska',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'District Of Columbia',
        'Florida',
        'Georgia',
        'Hawaii',
        'Idaho',
        'lllinois',
        'Indiana',
        'lowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'MaryLand',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Pennsylvania',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming',
    ]


    const handleClickOpen = () => {
        // setOpen(true);
    };

    const handleClose = () => {
        props.onClose()
    };

    const handleInputChange = (data, field) => {
        setAgentData((prevFormData) => ({ ...prevFormData, [field]: data }));
    };

    const submitHandler = async () => {
        dispatch(showLoader())
        const res = await httpClient.post(`/agents/addNewAgent/${agentData.recruitingAgentCode}`, agentData)
            .catch((error) => {
                dispatch(hideLoader())
                snackbar_Ref.current.showMessage("error", error?.response.data.message, "", "i-chk-circle");
            })
        if (res?.status === 200) {
            dispatch(hideLoader())
            snackbar_Ref.current.showMessage("success", res?.data.message, "", "i-chk-circle");
            setTimeout(() => {
                navigate('/recruits')
            }, 3000);

        }
    }

    return (
        <React.Fragment>
            <Dialog
                open={props.isSignupModalOpen}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"AGENT'S REGISTRATION"}</DialogTitle>
                <DialogContent>
                    <Stack alignItems={'center'} justifyContent={'center'} sx={{
                        width: '82%',
                        height: '150vh',
                    }}>
                        <Stack justifyContent={'space-between'} sx={{
                            width: '88%',
                            height: '88%'
                        }}>
                            <Stack className='text-field-container'>
                                <Stack className='text-field'>
                                    <Typography className='form-questions'>To start up, please tell us Agent's Resident State
                                        <Asterisk color='red' size={12} weight="bold" />
                                    </Typography>

                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        options={states}
                                        sx={{ width: 600 }}
                                        renderInput={(params) => <TextField {...params} label="Select a State" />}
                                        value={agentData.residentState}
                                        onChange={(e, newValue) => {
                                            handleInputChange(newValue, "residentState");
                                        }}
                                    />
                                </Stack>
                            </Stack>

                            <Stack>
                                <Typography className='form-questions'>Is Agent above 18 yrs and legally authorized to work in the U. S.?
                                    <Asterisk color='red' size={12} weight="bold" /></Typography>
                                <FormGroup>
                                    <FormControlLabel checked={agentData.age === 'Yes'} control={<Checkbox onChange={(e) => { handleInputChange("Yes", "age") }} />} label="Yes" />
                                    <FormControlLabel checked={agentData.age === 'No'} control={<Checkbox onChange={(e) => { handleInputChange("No", "age") }} />} label="No" />
                                </FormGroup>
                            </Stack>

                            {/* Name Stack */}
                            <Stack>
                                <Typography className='form-questions'>Name
                                    <Asterisk color='red' size={12} weight="bold" /></Typography>
                                <Stack>
                                    <Stack flexDirection={'row'} className='text-field-container'>
                                        <Stack className='text-field'>
                                            <TextField
                                                value={agentData.firstName}
                                                onChange={(e) => { handleInputChange(e.target.value, "firstName") }}
                                            />
                                            <Typography>First
                                            </Typography>
                                        </Stack>

                                        <Stack className='text-field'>
                                            <TextField
                                                value={agentData.lastName}
                                                onChange={(e) => { handleInputChange(e.target.value, "lastName") }}
                                            />
                                            <Typography>Last</Typography>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </Stack>

                            {/* Email Stack */}
                            <Stack>
                                <Typography className='form-questions'>Email
                                    <Asterisk color='red' size={12} weight="bold" />
                                </Typography>
                                <Stack>
                                    <Stack flexDirection={'row'} className='text-field-container'>
                                        <Stack className='text-field'>
                                            <TextField
                                                value={agentData.email}
                                                onChange={(e) => { handleInputChange(e.target.value, "email") }}
                                            />
                                            <Typography>Email</Typography>
                                        </Stack>

                                        <Stack className='text-field' sx={{ display: 'flex' }}>
                                            <TextField
                                                value={agentData.confirmEmail}
                                                onChange={(e) => { handleInputChange(e.target.value, "confirmEmail") }}
                                            />
                                            <Typography>Confirm Email</Typography>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </Stack>

                            {/* Address Stack */}
                            <Stack>
                                <Typography className='form-questions'>Address
                                    <Asterisk color='red' size={12} weight="bold" /></Typography>
                                <Stack>
                                    <Stack className='text-field-container'>
                                        <Stack className='text-field'>
                                            <TextField
                                                value={agentData.addressLine1}
                                                onChange={(e) => { handleInputChange(e.target.value, "addressLine1") }}
                                            />
                                            <Typography>Address Line1</Typography>
                                        </Stack>
                                    </Stack>

                                    <Stack flexDirection={'row'} className='text-field-container'>
                                        <Stack className='text-field'>
                                            <TextField
                                                value={agentData.city}
                                                onChange={(e) => { handleInputChange(e.target.value, "city") }}
                                            />
                                            <Typography>City</Typography>
                                        </Stack>

                                        <Stack className='text-field'>
                                            {/* <TextField
                                                value={agentData.state}
                                                onChange={(e) => { handleInputChange(e.target.value, "state") }}
                                            /> */}
                                            <Autocomplete
                                                disablePortal
                                                id="combo-box-demo"
                                                options={states}
                                                sx={{ width: 350, height: 45 }}
                                                renderInput={(params) => <TextField {...params} label="Select a State" />}
                                                value={agentData.residentState}
                                                onChange={(e, newValue) => {
                                                    handleInputChange(newValue, "residentState");
                                                }}
                                            />
                                            <Typography>State</Typography>
                                        </Stack>
                                    </Stack>

                                    <Stack className='text-field-container'>
                                        <Stack className='text-field'>
                                            <TextField
                                                value={agentData.zipCode}
                                                onChange={(e) => { handleInputChange(e.target.value, "zipCode") }}
                                            />
                                            <Typography>Zip Code</Typography>
                                        </Stack>
                                    </Stack>


                                </Stack>
                            </Stack>

                            {/* Active Licensed Stack  */}
                            <Stack >
                                <Typography className='form-questions'>Do Agent have an Active License?
                                    <Asterisk color='red' size={12} weight="bold" /></Typography>
                                <Stack>
                                    <FormGroup>
                                        <Stack flexDirection={'row'}>
                                            <FormControlLabel control={<Checkbox checked={agentData.activeLicense === "Yes"} onChange={(e) => { handleInputChange("Yes", "activeLicense") }} />} label="Yes" />
                                            <FormControlLabel control={<Checkbox checked={agentData.activeLicense === "No"} onChange={(e) => { handleInputChange("No", "activeLicense") }} />} label="No" />
                                        </Stack>
                                    </FormGroup>
                                </Stack>
                            </Stack>


                            {/* Recruiting Stack */}
                            <Stack className='text-field-container'>
                                <Typography className='form-questions'>Who is Recruiting Agent?
                                    <Asterisk color='red' size={12} weight="bold" />
                                </Typography>
                                <Stack className='text-field'>
                                    <TextField
                                        value={agentData.recruitingAgentCode}
                                        onChange={(e) => { handleInputChange(e.target.value, "recruitingAgentCode") }}
                                    />
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Stack flexDirection={'row'} justifyContent={'space-between'} sx={{ display: agentData.isApproved === true ? 'none' : 'flex' }}>
                        <Button
                            variant="contained"
                            disabled=""
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
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

export default SignUp