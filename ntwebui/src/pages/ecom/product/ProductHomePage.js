
//Add Custom made component below

//Add CSS Files below

//imports
import { Grid } from "@mui/material";
import PriceRangeSliderComponent from "../../../components/ecom/product/PriceRangeSliderComponent";
import ProductCardTemplate from "../../../components/ecom/product/ProductCardTemplate";
import ReadMoreCheckBox from "../../../components/ecom/product/Read MoreCheckbox";


const ProductHomePage = () => {
    const childDiscount = [
        {
            label: '10% off or more'
        },
        {
            label: '20% off or more'
        }
    ]
    const child = [
        {
            label: 'Andhra Karam'
        },
        {
            label: 'Mysore Delights'
        }
    ]
    const childMeal = [
        {
            label: 'Break Fast'
        },
        {
            label: 'Lunch'
        },
        {
            label: 'Snacks'
        },
        {
            label: 'Dinner'
        }
    ]
    const childSpl = [
        {
            label: 'Andhra Karam'
        },
        {
            label: 'Mysore Delights'
        }
    ]
    return (
        <div className="shop-page-container">
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} md={6} lg={6}>
                    <PriceRangeSliderComponent />
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <ProductCardTemplate />
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <ReadMoreCheckBox title='Discount' child={childDiscount} />
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <ReadMoreCheckBox title='Cuisine Type' child={child} />
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <ReadMoreCheckBox title='Meal' child={childMeal} />
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <ReadMoreCheckBox title='Speciality' child={childSpl} />
                </Grid>
            </Grid>
        </div>
    );
}

export default ProductHomePage;