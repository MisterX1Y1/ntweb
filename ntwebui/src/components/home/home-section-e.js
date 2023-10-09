

//Add Custom made component below
import { Typography } from '@mui/material';

//Add CSS Files below
import './home-section-e.css'
import ServiceFeatureComponent from './ServiceFeatureComponent';

const MakingRightChoiceSection = () => {
    return (
        <div className="fourth-section-home-container">
            <Typography variant='h4'>Why you are making the right choice?</Typography>
            <div>
                <ServiceFeatureComponent />
            </div>
        </div>
    );
}

export default MakingRightChoiceSection;