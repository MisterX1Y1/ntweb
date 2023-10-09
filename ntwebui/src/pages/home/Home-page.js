import { Grid } from "@mui/material";
import FirstSectionHome from "../../components/home/home-section-a";
import SecondSectionHome from "../../components/home/home-section-b";
import SignUpBannerSection from "../../components/home/home-section-c";
import WhoWeAreSection from "../../components/home/home-section-d";
import MakingRightChoiceSection from "../../components/home/home-section-e";
import WhatDoWeHaveSection from "../../components/home/home-section-f";
import JoinUsSection from "../../components/home/home-section-g";
import BlogUpdatesSection from "../../components/home/home-section-h";

//Add Custom made component below

//Add CSS Files below

const HomePage = () => {
    return (
        <div className="home-page-container">
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} md={6} lg={6}>
                    <FirstSectionHome />
                </Grid>
                <Grid item lg={6} xs={12}>
                    <SecondSectionHome />
                </Grid>
                <Grid item xs={12}>
                    <SignUpBannerSection />
                </Grid>
                <Grid item xs={12}>
                    <WhoWeAreSection />
                </Grid>
                <Grid item xs={12}>
                    <MakingRightChoiceSection />
                </Grid>
                <Grid item xs={12}>
                    <WhatDoWeHaveSection /> 
                </Grid>
                <Grid item xs={12}>
                    <JoinUsSection />
                </Grid>
                <Grid item xs={12}>
                    <BlogUpdatesSection />
                </Grid>
            </Grid>
        </div>
    );
}

export default HomePage;