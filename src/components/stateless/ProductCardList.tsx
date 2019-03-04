import React from 'react';
import { Grid } from '@material-ui/core';
import ProductCard from './ProductCard';

const ProductCardList = (props: any) => {
    const {list, onCardClick} = props;
    return (
        <Grid
            container={true}
            direction="row"
            justify="space-evenly"
            alignItems="flex-start"
        >
        {
            list.map((item:any, index:Number)=>{
                return (
                    <ProductCard
                    onCardClick={onCardClick}
                    name={item.name} 
                    description={item.description}
                    cover={item.cover}
                    key={index}
                    id={item.id}
                    />
                )
            })
        }
        </Grid>
    )
}

export default ProductCardList;