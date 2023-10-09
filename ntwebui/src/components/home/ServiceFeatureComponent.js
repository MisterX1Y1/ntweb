import { Avatar, Stack, Typography } from "@mui/material";
import { Fragment } from "react";

const ServiceFeatureComponent = () => {
    const serviceFeatureText = [
        {
            featureText: 'Lifetime Support for your O2 machine',
            icon: '',
            alt: '',
        },{
            featureText: 'Professional Guidance by our experts and community support',
            icon: '',
            alt: ''
        },{
            featureText: 'Transparent and true  market price based on  Supply and Demand',
            icon: '',
            alt: ''
        },{
            featureText: 'Mission of Developing a greener environment through our community',
            icon: '',
            alt: ''
        }

    ]

    return (
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: "flex-start"}}>
            {
                serviceFeatureText.map(data => {
                    return (
                        <Fragment>
                            <Stack style={{width: '300px', justifyContent: "center", marginTop: '20px'}} spacing={4}>
                                <Avatar
                                    style={{margin: 'auto',}}
                                    alt={data.alt}
                                    src={data.icon}
                                    sx={{ width: 64, height: 64 }}
                                />
                                <Typography>{data.featureText}</Typography>
                            </Stack>
                        </Fragment>
                    )
                })
            }
        </div>
    );
}

export default ServiceFeatureComponent;