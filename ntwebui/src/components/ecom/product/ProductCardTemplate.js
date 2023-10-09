import React, { Fragment } from 'react';
import { Button, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useNavigate } from 'react-router-dom';

const ProductCardTemplate = () => {

    const navigate = useNavigate();

    const handleNavigate = (endpoint) => {
        navigate(endpoint)
    }

    return (
        <Fragment>
            <div style={{width: '250px'}} className='product-card-container'>
                <div className='product-image'>
                    <img alt='ee' width='150px' height='200px' src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700445501.jpg" />
                </div>
                <div className='product-detail'>
                    <div className='nav-icon-div'>
                        <Typography>Product Name</Typography>
                        <div style={{display: 'flex', flexDirection: 'row'}} className='product-price-section'>
                            <Typography> &#8377; 200 &nsbp</Typography>
                            <Typography style={{textDecoration: 'line-through'}}>&#8377; 400</Typography>
                            <Typography style={{color: 'red'}}>(50% Offer)</Typography>
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}} className='product-card-actions'>
                        <Button variant='contained' style={{color: 'white', background: 'green'}}>Add to Cart</Button>
                        <FavoriteBorderIcon style={{color: 'red', background: 'lightgrey', borderRadius: '25px', padding: '3px'}}/>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ProductCardTemplate;