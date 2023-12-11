import React, { useState } from 'react'
import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { Button, MenuItem, Typography } from '@mui/material';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const CRMDropdown = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <Button
                aria-controls="dropdown-menu"
                aria-haspopup="true"
                onClick={handleClick}
                endIcon={<ArrowDropDownIcon />}
                sx={{
                    backgroundColor:props.title === "Previous Months" ? "white" : "#ED7D31",
                    color:props.title === "Previous Months" ? "black" : "white",
                    height: "39px",
                    width:"305px",
                    fontSize: "12px",
                    padding: "3px",
                    borderTopLeftRadius: "0",
                    borderBottomLeftRadius: "0",
                    "@media screen and (max-width:899px)": {
                        width: "168px",
                        // border: "2px solid red",
                    },
                    "&:hover": {
                        backgroundColor:'#F08613',
                    },
                }}
            >
                {props.title}
            </Button>
            <Menu
                id="dropdown-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        // maxHeight: "205px",
                        width: "169px",
                        border: "2px solid #FECF5E",
                    },
                }}
            >
                {/* {props.menuItems.map((items) => {
                    return (
                        <MenuItem onClick={handleClose}>
                           <Typography>ALK</Typography>
                        </MenuItem>
                    );
                })}  */}
                {/* <MenuItem>dafss</MenuItem> */}
            </Menu>
        </div>
    )
}

export default CRMDropdown