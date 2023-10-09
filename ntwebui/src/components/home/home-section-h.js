//Add Custom made component below

//Add CSS Files below
import './home-section-h.css'

//Add other import
import { Typography } from '@mui/material';
import { Fragment } from 'react';

const BlogCard = () => {
    return (
        <Fragment>
            <div className='blog-card'>
                <div className='blog-card-img'>
                <img alt='ee' width='200px' height='150px' src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700445501.jpg" />
                </div>
                <div className='blog-card-content'>
                    <Typography variant='h5'>Health over Wealth Top 10 Tips</Typography>
                    <Typography variant='h6'> Author: Yogesh Jul 3, 2023</Typography>
                    <Typography variant='h6'>Naani recommendation for health before wealth comes from a wise old Indian saying that...</Typography>
                </div>
            </div>
        </Fragment>
    );
}

const BlogCardContainer = () => {
    return (
        [1,2,3].map((value, index) => {
            return <BlogCard key={index} value={value} />
        })
    )
}

const BlogUpdatesSection = () => {
    return (
        <div className="fifth-section-home-container">
            <Typography variant='h4'>What's happening around ?</Typography>
            <div className='container-content-h'>
                <BlogCardContainer />
            </div>
        </div>
    );
}

export default BlogUpdatesSection;