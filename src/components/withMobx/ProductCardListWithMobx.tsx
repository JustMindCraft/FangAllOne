import React from 'react';
import { inject, observer } from 'mobx-react';
import ProductCardList from '../stateless/ProductCardList';
import { withRouter } from 'react-router';

interface IProductCardListWithMobxProps{
    dataContainer: any;
    history: any;
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
     handleCardClick = (e:any, id:string) => {
         const { history } = this.props;
         history.push('/products/'+id);
     }
    render(){
        const { dataContainer } = this.props;
        const { list } = dataContainer;
        
        return(
            <ProductCardList onCardClick={this.handleCardClick} list={list} />
        )
    }
}

export default withRouter(ProductCardListWithMobx as any) as any;