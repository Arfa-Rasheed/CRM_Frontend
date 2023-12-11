import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack } from '@mui/material'
import React from 'react'
import './style.scss'
import DasboardIcon from "../../assets/DashboardIcon.png"
import AdminstrationIcon from '../../assets/admistrationIcon.png'
import CarriersIcons from '../../assets/CarriersIcon.png'
import ToolsIcon from '../../assets/Tools.png'
import PoliciesIcon from '../../assets/PoliciesIcon.png'
import StatementsIcon from '../../assets/StatementsIcon.png'
import CommssionsIcon from '../../assets/CommisionsIcon.png'
import RecruitsIcon from '../../assets/Recruits.png'
import LogoutIcon from '../../assets/Logout.png'
import rightArrow from '../../assets/right-arrow.png'
const SideBar = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', width: '18%', height: '92vh', backgroundColor: '#EDEDED' }}>
            <Stack
                justifyContent={'center'} 
                sx={{
                    width: '80%',
                    height: '84%',
                }}>
                <List>
                    <ListItem className='listItem' disablePadding>
                        <ListItemButton href="/dashboard" sx={{ backgroundColor: '#DADADA' }}>
                            <ListItemIcon>
                                <img src={DasboardIcon} />
                            </ListItemIcon>
                            <ListItemText>
                                Dashboard
                            </ListItemText>
                            <ListItemIcon className='listIcon'>
                                <img src={rightArrow} 
                                />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>

                    {/* <ListItem className='listItem' disablePadding>
                        <ListItemButton href="/administration" sx={{ backgroundColor: '#DADADA' }}>
                            <ListItemIcon>
                                <img src={AdminstrationIcon} />
                            </ListItemIcon>
                            <ListItemText>
                                Administrations
                            </ListItemText>
                            <ListItemIcon className='listIcon'>
                                <img src={rightArrow} />
                            </ListItemIcon>
                        </ListItemButton>

                    </ListItem> */}

                    <ListItem className='listItem' disablePadding>
                        <ListItemButton href="/carriers" sx={{ backgroundColor: '#DADADA' }}>
                            <ListItemIcon>
                                <img src={CarriersIcons} />
                            </ListItemIcon>
                            <ListItemText>
                                Carriers
                            </ListItemText>
                            <ListItemIcon className='listIcon'>
                                <img src={rightArrow} />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>

                    <ListItem className='listItem' disablePadding>
                        <ListItemButton href='/tools' sx={{ backgroundColor: '#DADADA' }}>
                            <ListItemIcon >
                                <img src={ToolsIcon} />
                            </ListItemIcon>
                            <ListItemText>
                                Tools
                            </ListItemText>
                            <ListItemIcon className='listIcon'>
                                <img src={rightArrow} />
                            </ListItemIcon>

                        </ListItemButton>
                    </ListItem>

                    <ListItem className='listItem' disablePadding>
                        <ListItemButton href="/policies" sx={{ backgroundColor: '#DADADA' }}>
                            <ListItemIcon>
                                <img src={PoliciesIcon} />
                            </ListItemIcon>
                            <ListItemText>
                                Policies
                            </ListItemText>
                            <ListItemIcon className='listIcon'>
                                <img src={rightArrow} />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>

                    <ListItem className='listItem' disablePadding>
                        <ListItemButton href="/statements" sx={{ backgroundColor: '#DADADA' }}>
                            <ListItemIcon>
                                <img src={StatementsIcon} />
                            </ListItemIcon>
                            <ListItemText>
                                Statements
                            </ListItemText>
                            <ListItemIcon className='listIcon'>
                                <img src={rightArrow} />
                            </ListItemIcon>
                        </ListItemButton>

                    </ListItem>

                    <ListItem className='listItem' disablePadding>
                        <ListItemButton href="/commissions" sx={{ backgroundColor: '#DADADA' }}>
                            <ListItemIcon>
                                <img src={CommssionsIcon} />
                            </ListItemIcon>
                            <ListItemText>
                                Commisions
                            </ListItemText>
                            <ListItemIcon className='listIcon'>
                                <img src={rightArrow} />
                            </ListItemIcon>
                        </ListItemButton>

                    </ListItem>
                    <ListItem className='listItem' disablePadding>
                        <ListItemButton href='/recruits' sx={{ backgroundColor: '#DADADA' }}>
                            <ListItemIcon>
                                <img src={RecruitsIcon} />
                            </ListItemIcon>
                            <ListItemText>
                                Recruits
                            </ListItemText>
                            <ListItemIcon className='listIcon'>
                                <img src={rightArrow} />
                            </ListItemIcon>
                        </ListItemButton>

                    </ListItem>
                    <ListItem className='listItem' disablePadding>
                        <ListItemButton sx={{ backgroundColor: '#DADADA' }}>
                            <ListItemIcon>
                                <img src={LogoutIcon} />
                            </ListItemIcon>
                            <ListItemText>
                                Logout
                            </ListItemText>
                            <ListItemIcon className='listIcon'>
                                <img src={rightArrow} />
                            </ListItemIcon>
                        </ListItemButton>

                    </ListItem>
                </List>

            </Stack>
        </div>
    )
}

export default SideBar