

//Add Custom made component below
import { Typography } from '@mui/material';

//Add CSS Files below
import './home-section-d.css'

const WhoWeAreSection = () => {
    return (
        <div className="third-section-home-container">
            <Typography variant='h4'>Who are we ?</Typography>
            <div className='container-content'>
                <img alt='ee' width='300px' height='200px' src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700445501.jpg" />
                <Typography variant='h5'>In a world that rushes forward, powered by the latest trends and fleeting fads, we pause to pay homage to the timeless wisdom of our mothers. We are a platform for mothers over the age of fifty to turn their traditional family recipes into a business. Each and every one of our products is crafted with the finest ingredients and authentic generational recipes.</Typography>
            </div>
        </div>
    );
}

export default WhoWeAreSection;