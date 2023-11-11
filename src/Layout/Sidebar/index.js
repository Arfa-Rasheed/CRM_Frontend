import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import DasboardIcon from "../../assets/DashboardIcon.png"
import AdminstrationIcon from '../../assets/admistrationIcon.png'
import CarriersIcons from '../../assets/CarriersIcon.png'
import ToolsIcon from '../../assets/Tools.png'
import PoliciesIcon from '../../assets/PoliciesIcon.png'
import StatementsIcon from '../../assets/StatementsIcon.png'
import CommssionsIcon from '../../assets/CommisionsIcon.png'
import RecruitsIcon from '../../assets/Recruits.png'
import LogoutIcon from '../../assets/Logout.png'
const SideBar = () => {
    return (
        <div style={{ width: '18%', height: '91vh', backgroundColor: '#EDEDED' }}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton  href="/dashboard">
                        <ListItemIcon>
                          <img src={DasboardIcon}/>
                        </ListItemIcon>
                        <ListItemText>
                            Dashboard
                        </ListItemText>
                    </ListItemButton>

                </ListItem>
           
                <ListItem disablePadding>
                    <ListItemButton href="/administration">
                        <ListItemIcon>
                          <img src={AdminstrationIcon}/>
                        </ListItemIcon>
                        <ListItemText>
                            Administrations
                        </ListItemText>
                    </ListItemButton>

                </ListItem>
          
                <ListItem disablePadding>
                    <ListItemButton href="/carriers">
                        <ListItemIcon>
                          <img src={CarriersIcons}/>
                        </ListItemIcon>
                        <ListItemText>
                            Carriers
                        </ListItemText>
                    </ListItemButton>

                </ListItem>
                
        
                <ListItem disablePadding>
                    <ListItemButton href='/tools'>
                        <ListItemIcon >
                          <img src={ToolsIcon}/>
                        </ListItemIcon>
                        <ListItemText>
                            Tools
                        </ListItemText>
                    </ListItemButton>

                </ListItem>
           
                <ListItem disablePadding>
                    <ListItemButton href="/policies">
                        <ListItemIcon>
                          <img src={PoliciesIcon}/>
                        </ListItemIcon>
                        <ListItemText>
                            Policies
                        </ListItemText>
                    </ListItemButton>

                </ListItem>
          
                <ListItem disablePadding>
                    <ListItemButton href="/statements">
                        <ListItemIcon>
                          <img src={StatementsIcon}/>
                        </ListItemIcon>
                        <ListItemText>
                            Statements
                        </ListItemText>
                    </ListItemButton>

                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton href="/commissions">
                        <ListItemIcon>
                          <img src={CommssionsIcon}/>
                        </ListItemIcon>
                        <ListItemText>
                            Commisions
                        </ListItemText>
                    </ListItemButton>

                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton href='/recruits'>
                        <ListItemIcon>
                          <img src={RecruitsIcon}/>
                        </ListItemIcon>
                        <ListItemText>
                            Recruits
                        </ListItemText>
                    </ListItemButton>

                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                          <img src={LogoutIcon}/>
                        </ListItemIcon>
                        <ListItemText>
                            Logout
                        </ListItemText>
                    </ListItemButton>

                </ListItem>
            </List>






        </div>
    )
}

export default SideBar