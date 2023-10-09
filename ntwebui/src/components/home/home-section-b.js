

//Add Custom made component below
import { Button, Typography } from '@mui/material';

//Add CSS Files below
import './home-section-b.css'

const SecondSectionHome = () => {
    return (
        <div className="second-section-home-container">
            <Typography variant='h4'>Taste of Tradition in every bite</Typography>
            <Typography variant='h5'>Indulge in the richness of our culinary heritage and make a difference in the lives of the makers.</Typography>
            <Typography variant='h5'>From the hands of Grand Mothers</Typography>
            <div className='button-col-align'>
                <Button className='shop-btn-1' style={{width: '350px'}} variant='outlined'>Shop your Favorites</Button>
                <Button className='shop-btn-2' style={{width: '350px'}} variant='outlined'>Know more about us</Button>
            </div>
        </div>
    );
}

export default SecondSectionHome;