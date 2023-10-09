

//Add Custom made component below
import { Button, Typography } from '@mui/material';

//Add CSS Files below
import './join-us-page.css'

const JoinusPage = () => {
    return (
        <div className="join-us-container">
            <Typography variant='h4'>Join Us</Typography>
            <div className='carousel'>
                <img alt='ee' width='600px' height='400px' src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700445501.jpg" />
            </div>
            <div className='container-content-f'>
                <Typography>We believe that the heart and soul of any kitchen reside within the treasured recipes passed down through generations. If you are a homemaking mother above the age of fifty, we warmly invite you to become a recipe partner and share the flavorsome traditions that have shaped your family's history. By partnering with Naani's Touch, you become part of a supportive community of women who share the same passion for culinary heritage. </Typography>
                <Typography>When you join us, your recipes will be meticulously authenticated, preserving their authenticity and ensuring that your legacy lives on. We copyright the recipes in your name, giving you the rightful ownership and protecting them for future generations. Our dedicated team handles the production and marketing, so you can focus on what you love most: creating magic in the kitchen.</Typography>
                <Typography>But that's not all - all the profits generated from the sales of your recipes will flow directly into your hands, providing you with the financial independence you deserve. </Typography>
                <Typography>We understand that your recipes hold a special place in your heart, and we want to ensure they are treated with the utmost respect. Our team of experts will work closely with you to capture the essence of your recipes, allowing your unique flavors to shine. Your stories, memories, and the love you've poured into your cooking will be cherished and shared with the world.</Typography>
                <Typography>So, let us embark on this enchanting journey together. Join Naani's Touch as a Recipe Partner and let your culinary legacy touch the lives of others. </Typography>
                <Typography>Submit your recipes today and let the magic of Naani's Touch begin.</Typography>
                <Button className='shop-btn' style={{width: '350px'}} variant='contained'>Apply for Recipe</Button>
            </div>
            
        </div>
    );
}

export default JoinusPage;