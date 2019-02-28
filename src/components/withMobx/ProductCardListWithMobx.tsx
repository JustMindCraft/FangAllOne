import React from 'react';
import { inject, observer } from 'mobx-react';
import ProductCardList from '../stateless/ProductCardList';

interface IProductCardListWithMobxProps{
    dataContainer: any;
}



@inject('dataContainer')
@observer
class ProductCardListWithMobx extends 
React.Component<IProductCardListWithMobxProps>{
     componentWillMount(){
        const { dataContainer } = this.props;
        const { setSourceName, getList } = dataContainer
        setSourceName('products');
        getList({sort: ['id', 'DESC'], page: 1, pagesize: 25},(m:any)=>{
            console.log(m);
        });
     }
    render(){
        const { dataContainer } = this.props;
        const { list } = dataContainer;
        
        return(
            <ProductCardList list={list} />
        )
    }
}

export default ProductCardListWithMobx as any;