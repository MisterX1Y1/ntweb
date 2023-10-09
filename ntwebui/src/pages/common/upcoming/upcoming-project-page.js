

//Add Custom made component below
import { Button, Typography } from '@mui/material';

//Add CSS Files below
import './upcoming-project-page.css'

const UpcomingProjectPage = () => {
    return (
        <div className="join-us-container">
            <Typography variant='h4'>Upcoming Projects</Typography>
            <div className='carousel'>
                <img alt='ee' width='600px' height='400px' src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700445501.jpg" />
            </div>
            <div className='container-content-f'>
                <Typography>Nothing beats the experience of tasting fresh, homemade recipes!</Typography>
                <Typography>Our café is more than just a culinary destination. It's a heartfelt collaboration between a group of three extraordinary mothers from our local community and expert chefs. Each recipe on our menu is a reflection of the mothers' personal stories and treasured family traditions. To ensure the highest quality and taste, our expert chefs carefully taste-test and refine these recipes, working hand in hand with our dedicated mothers.</Typography>
                <Typography>While our café operates on weekdays, we wanted to create a space that celebrates family and togetherness during weekends. That's why we offer families the unique opportunity to rent out our kitchen space, free of charge. The only charge incurred is for the ingredients.</Typography>
                <Typography>To make this experience even more remarkable, we capture the entire cooking process on video. This cherished memento becomes a keepsake for your family, allowing you to relive the love and laughter shared while preparing your favorite dishes.</Typography>
                <Typography>We are eagerly preparing to open the doors of Naani's Touch Café!</Typography>
                <Button className='shop-btn' style={{width: '350px'}} variant='contained'>Apply for Recipe</Button>
            </div>
        </div>
    );
}

export default UpcomingProjectPage;