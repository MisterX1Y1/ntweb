
import * as React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
// import { Typography } from "@mui/material";

const Children = (props) => {

    const handleChangeChild = (event) => {
        props.callback([event.target.checked, props.checked[1]]);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
            {
                props.child.map((c)=> {
                    return (
                        <FormControlLabel
                            label={c.label}
                            control={<Checkbox checked={props.checked[0]} onChange={handleChangeChild} color='success' />}
                        />
                    )
                })
            }
            
        </Box>
    );
}


const ReadMoreCheckBox = (props) => {

    const [checked, setChecked] = React.useState([true, false]);

    const handleChange1 = (event) => {
        setChecked([event.target.checked, event.target.checked]);
      };
    const handleChangeFromChild = (value) => {
        setChecked(value);
    };
  
    console.log()
    
    return (
        <div className="check-box-read-more">
            {/* <Typography>{props.title}</Typography> */}
            <div className="data-check-box">
                <FormControlLabel
                    label={props.title}
                    control={
                    <Checkbox
                        checked={checked[0] && checked[1]}
                        indeterminate={checked[0] !== checked[1]}
                        onChange={handleChange1}
                        color='success'
                    />
                    }
                />
                <Children child={props.child} checked={checked} callback={handleChangeFromChild} />
            </div>
        </div>
    );
}

export default ReadMoreCheckBox;