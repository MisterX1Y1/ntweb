import { Button, Typography } from "@mui/material";

//Add CSS Files below
import './home-section-c.css'

const SignUpBannerSection  = () => {
    return (
        <div className="sign-up-banner">
            <div className="left-sign-up-bannner">
                <Typography>Don't miss out on <br />Time Honored <br />Artisanal Recipes</Typography>
            </div>
            <div className="right-sign-up-bannner">
            <Typography>Let us keep you updated on our latest delectable products.</Typography>
                <Button className="sign-up-btn" variant="contained">Sign Up</Button>
            </div>
        </div>
    );
}

export default SignUpBannerSection;