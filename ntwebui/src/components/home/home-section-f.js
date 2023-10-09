

//Add Custom made component below
import { Button, Typography } from '@mui/material';

//Add CSS Files below
import './home-section-f.css'

const WhatDoWeHaveSection = () => {
    return (
        <div className="fifth-section-home-container">
            <Typography variant='h4'>What do we have ?</Typography>
            <div className='container-content-f'>
                <Typography>TO BE IMPLEMENTED COMPONENT</Typography>
                <Typography variant='h5'>Step into our store and be transported to a world filled with the cherished tastes and aromas of generations past. Each product you find here has a story to tell, a story that resonates with the love, dedication, and expertise of our homemaking mothers.</Typography>
                <Typography variant='h5'><strong>Where nostalgia meets flavor and tradition comes to life!</strong></Typography>
                <Button className='shop-btn' style={{width: '350px'}} variant='outlined'>Shop your Favorites</Button>
            </div>
        </div>
    );
}

export default WhatDoWeHaveSection;