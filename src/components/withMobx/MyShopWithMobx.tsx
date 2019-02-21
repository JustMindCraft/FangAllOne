import React from 'react';
import MyShop from '../stateless/MyShop';

interface MyShopWithMobxProps {
    store: any,
}

class MyShopWithMobx extends React.Component<MyShopWithMobxProps>{
    componentDidMount(){
        const { store } = this.props;
    }
    render (){
        return (
            <div>
                <MyShop/>
            </div>
        )
    }
}

export default MyShopWithMobx;