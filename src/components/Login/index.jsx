import React, { useState } from 'react'
import Header from '../../Layout/Header'
import { Button, Stack, TextField, Typography } from '@mui/material'
import './style.scss'
import httpClient from '../../_util/api'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setIsAdmin } from '../../Store/userReducer'

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isAdmin = useSelector((state)=>state.user.isAdmin)
    const [userCredentials, setUserCredentials] = useState(
        {
            email: '',
            password: ''
        }
    )

    const handleInputChange = (data, field) => {
        setUserCredentials((prevFormData) => ({ ...prevFormData, [field]: data }));
    };

    const loginHandler = async () => { 
      const res =await httpClient.post('/user/login',userCredentials).catch((error) => { console.log("error: ",error) })

      if(res?.status === 200){
        const authToken = res.data.token
        const isAdmin = res.data.isAdmin
        const agentCode = res.data.agentCode ? res.data.agentCode : null;
        const userId = res.data._id ? res.data._id : null;
        const agentCarrierNumber = res.data.agentCarrierNumber ? res.data.agentCarrierNumber : ""
        const contractLevel = res.data.contractLevel ? res.data.contractLevel : null
        localStorage.setItem('authToken', authToken);
        localStorage.setItem('isAdmin', isAdmin);
        localStorage.setItem('agentCode',agentCode);
        localStorage.setItem('userId',userId);
        localStorage.setItem('agentCarrierNumber',agentCarrierNumber);
        localStorage.setItem('contractLevel',contractLevel);
        dispatch(setIsAdmin(res.data.isAdmin));
        console.log("res",res);
        navigate('/dashboard');    
      }
    }

    return (
        <div>
            <div>
                <Header />
                <div style={{ marginTop: '65px' }}>
                    <div style={{
                        width: '99.8%',
                        display: 'flex',
                        justifyContent: 'center',
                        height: '90vh',
                    }}>
                        <Stack className='Login-container' alignItems={'center'} justifyContent={'space-around'} style={{ width: '50%', height: '70vh' }}>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: "#F08613",
                                    color: 'black',
                                    width: '251px',
                                    height: "5vh",
                                    fontSize: '12px',
                                    "&:hover": {
                                        backgroundColor: "#F08613",
                                        color: 'white'
                                    },
                                }}
                            >
                                Login
                            </Button>
                            <Stack justifyContent={'space-between'} style={{ height: '28vh' }}>
                                <Stack justifyContent={'space-between'} style={{ height: '12vh' }}>
                                    <TextField id="outlined-basic" placeholder="Email Address" variant="outlined" sx={{ width: '245px', height: '5vh' }}
                                        onChange={(e) => handleInputChange(e.target.value, "email")}
                                    />
                                    <TextField id="outlined-basic" placeholder="Password" variant="outlined" sx={{ width: '245px', height: '5vh' }}
                                        onChange={(e) => handleInputChange(e.target.value, "password")} type='password'
                                    />
                                </Stack>

                                <Typography textAlign={'right'} style={{ fontSize: '14px' }}>Forgot Password?</Typography>
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: "#003478",
                                        color: 'white',
                                        width: '251px',
                                        height: "5vh",
                                        fontSize: '12px',
                                        "&:hover": {
                                            backgroundColor: "#003478",
                                        },
                                    }}
                                    onClick={loginHandler}
                                >
                                    Login
                                </Button>
                            </Stack>

                        </Stack>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login