import React from 'react';
import HomeIcon from "@material-ui/icons/Home";
import FeaturedPlayListOutLinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsActiveOutlined";
import Search from "@material-ui/icons/SearchRounded";
import { Avatar, Button } from '@material-ui/core';
import "./css/QuoraHeader.css";
function QuoraHeader() {
    return (
        <div className='qHeader'>
            <div className='qHeader-content'>
                <div className='qHeader__logo'>
                    <img
                        src="https://video-public.canva.com/VAD8lt3jPyI/v/ec7205f25c.gif"
                        alt="logo"
                    />
                </div>
                <div className='qHeader__icons'>
                    <div className='qHeader__icon'>
                        <HomeIcon />
                    </div>
                    <div className='qHeader__icon'>
                        <FeaturedPlayListOutLinedIcon />
                    </div>
                    <div className='qHeader__icon'>
                        <AssignmentTurnedInOutlinedIcon />
                    </div>
                    <div className='qHeader__icon'>
                        <PeopleAltOutlinedIcon />
                    </div>
                    <div className='qHeader__icon'>
                        <NotificationsOutlinedIcon />
                    </div>
                </div>
                <div className='qHeader__input'>
                    <Search />
                    <input type="text" placeholder="Search" />
                </div>
                <div className='qHeader__Rem'>
                    <Avatar/>
                    <Button>Add question</Button>
                </div>
                

            </div>
        </div>
    )
}

export default QuoraHeader
