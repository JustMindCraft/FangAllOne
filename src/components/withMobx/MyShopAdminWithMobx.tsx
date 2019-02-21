import React from 'react';
import MyShopAdminList from '../stateless/MyShopAdminList';

interface MyShopWithMobxProps {
    store: any,
}

class MyShopAdminWithMobx extends React.Component<MyShopWithMobxProps>{
    componentDidMount(){
        const { store } = this.props;
    }
    render (){
        return (
                <MyShopAdminList />
        )
    }
}

export default MyShopAdminWithMobx;