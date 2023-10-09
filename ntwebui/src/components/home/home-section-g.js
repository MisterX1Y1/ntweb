

//Add Custom made component below
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

//Add CSS Files below
import './home-section-g.css'

const JoinUsSection = () => {
    const navigate = useNavigate();
    const handleNavigate= () => {
        navigate('/join-us')
    }
    return (
        <div className="fifth-section-home-container">
            <Typography variant='h4'>Do you want to share your recipe ?</Typography>
            <div className='container-content-g'>
                <Typography variant='h5'>Step into our store and be transported to a world filled with the cherished tastes and aromas of generations past. Each product you find here has a story to tell, a story that resonates with the love, dedication, and expertise of our homemaking mothers.</Typography>
                <Button className='join-btn' style={{width: '350px'}} variant='outlined' onClick={()=>{handleNavigate()}}>Join Us</Button>
            </div>
        </div>
    );
}

export default JoinUsSection;