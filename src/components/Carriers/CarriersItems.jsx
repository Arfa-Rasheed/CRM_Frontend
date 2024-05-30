import React from 'react'
import CRMDropdown from '../../shared-component/CRM-Dropdown/index'
import { Button, Stack } from '@mui/material'
// import Carrier1 from '../../assets/Carrier1.png'
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import './style.scss'
import { useNavigate } from 'react-router-dom';


const CarriersItems = (props) => {
    // const navigate = useNavigate()
    // const handleClick =()=>{
    //    navigate('https://www.northamericancompany.com/')
    // }
    // const history = useHistory();

    const handleClick = () => {
      window.location.href = 'https://www.northamericancompany.com/';
      // or use history.push if you are using React Router
      // history.push('https://www.northamericancompany.com/');
    };
    return (
        <Stack sx={{ width: '27%', height: '24vh' }}>
            <img src={props.carrierPic} style={{height:'15vh'}}/>
            <div className='CarrierItemDropdown'>
                {/* <CRMDropdown /> */}
                <Button
                    aria-controls="dropdown-menu"
                    aria-haspopup="true"
                    endIcon={<ArrowDropDownIcon />}
                    sx={{
                        display:props.url ? 'flex' : 'none',
                        backgroundColor:'#003478',
                        color:"white",
                        height: "39px",
                        width: "300px",
                        fontSize: "12px",
                        padding: "3px",
                        borderTopLeftRadius: "0",
                        borderBottomLeftRadius: "0",
                        
                        "&:hover": {
                            backgroundColor: '#003478'
                        },
                    }}
                >
                    <a href={props.url} target='_blank' className='carrier-link'>Portal Access</a>
                </Button>
            </div>

        </Stack>
    )
}

export default CarriersItems