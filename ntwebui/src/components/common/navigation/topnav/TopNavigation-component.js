import React, { Fragment } from 'react';
import './TopNavigation-component.css'
import { Button } from '@mui/material';
import Divider from '@mui/material/Divider';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useNavigate } from 'react-router-dom';

const TopNavigation = () => {

    const navigate = useNavigate();

    const handleNavigate = (endpoint) => {
        navigate(endpoint)
    }

    return (
        <Fragment>
            <div className='top-nav-container'>
                <div className='top-nav-left'>
                    <Button className="nav-btn">
                        Our Mission
                    </Button>

                    <Divider orientation="vertical" variant="middle" flexItem />
                     <Button className="nav-btn">
                        Our Story
                    </Button>
                    <Divider orientation="vertical" variant="middle" flexItem />
                     <Button className="nav-btn" onClick={()=>{handleNavigate('/join-us')}}>
                        Join Us
                    </Button>
                    <Divider orientation="vertical" variant="middle" flexItem />
                     <Button className="nav-btn">
                        Contact Us
                    </Button>
                </div>
                <div className='top-nav-right'>
                    <div className='nav-icon-div'>
                        <AccountCircleIcon />
                    </div>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <div className='nav-icon-div'>
                        <FavoriteBorderIcon />
                    </div>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <div className='nav-icon-div'>
                        <ShoppingBagIcon />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default TopNavigation;