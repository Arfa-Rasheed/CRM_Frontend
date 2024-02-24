import React, { useRef, useState } from 'react'
import Header from '../../Layout/Header'
import { Button, Stack, TextField, Typography } from '@mui/material'
import './style.scss'
import httpClient from '../../_util/api'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setIsAdmin } from '../../Store/userReducer'
import CustomizedSnackbars from '../../shared-component/Snackbar/SnackBar'
import { hideLoader, setIsLoggedIn, setUserDetail, showLoader } from '../../Store/mainSlice'

const Login = () => {
    const snackbar_Ref = useRef(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userDetails = useSelector((state) => state.mainSlice.userdetail)
    // const userId = useSelector((state)=>state.mainSlice.userdetail.userId)
    const isAdmin = useSelector((state) => state.user.isAdmin)
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
        dispatch(showLoader());
        const res = await httpClient.post('/user/login', userCredentials).catch((error) => {
            dispatch(hideLoader())
            snackbar_Ref.current.showMessage("error", error?.response.data.message, "", "i-chk-circle");
        })

        if (res?.status === 200) {
            dispatch(hideLoader())
            const authToken = res.data.token
            const isAdmin = res.data.isAdmin
            const userId = res.data.userId
            const adminFirstName = res.data.firstName
            localStorage.setItem('authToken', authToken);
            localStorage.setItem('isAdmin', isAdmin);
            localStorage.setItem("userId", userId)
            localStorage.setItem("adminFirstName", adminFirstName)
            dispatch(setIsLoggedIn(true))
            dispatch(setUserDetail(res.data))
            console.log("userDetails", userDetails);
            console.log("userId", userId);
            // console.log("res", res);
            snackbar_Ref.current.showMessage("success", res?.data.message, "", "i-chk-circle");
            setTimeout(() => {
                navigate('/dashboard');
            }, 3000);



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
                        <CustomizedSnackbars ref={snackbar_Ref} />
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