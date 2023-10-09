import { Slider, TextField, Typography } from "@mui/material";
import { useState } from "react";


function valuetext(value) {
    return `${value}`;
  }
  
const minDistance = 100;

const PriceRangeSliderComponent = (props) => {
    const [min, setMin] = useState(props.min? props.min : 0);
    const [max, setMax] = useState(props.max? props.max : 10000);
    const [value, setValue] = useState([props.min? props.min : 0, props.max? props.max : 10000]);

    const handleChange = (event, newValue, activeThumb) => {
      if (!Array.isArray(newValue)) {
        return;
      }
  
      if (activeThumb === 0) {
        setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
        setMin(Math.min(newValue[0], value[1] - minDistance));
      } else {
        setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
        setMax(Math.max(newValue[1], value[0] + minDistance));
      }
    };

    const handleMin = (e) => {
        if(e.target.value < max - props.step ? props.step : 50) {
            setMin(e.target.value)
            setValue([e.target.value, value[1]])
        }
        else {
            setMin(e.target.value)
            console.log("This should not happen")
        }
    }
    const handleMax = (e) => {
        if(e.target.value > min + props.step ? props.step : 50) {
            setMax(e.target.value)
            setValue([value[0], e.target.value])
        }
        else {
            setMax(e.target.value)
            console.log("This should not happen")
        }
    }

    return (
        <div className="price-range-slider-container">
            <div className="price-range-header"><Typography>Price Range</Typography></div>
            <div className="price-range-slider">
                <Slider
                    getAriaLabel={() => 'Price range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    max={props.max ? props.max : 10000}
                    step={50}
                />
                <div className="price-range-header"><Typography>Set Min Price Range</Typography><TextField value={min} onChange={handleMin} /><Typography>Min {value[0]}</Typography></div>
                <div className="price-range-header"><Typography>Set Max Price Range</Typography><TextField value={max} onChange={handleMax} /><Typography>Max {value[1]}</Typography></div>
            </div>
        </div>
    );
}

export default PriceRangeSliderComponent;
