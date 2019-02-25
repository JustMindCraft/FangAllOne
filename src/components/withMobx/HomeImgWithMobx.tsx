import React from 'react';
import HomeImg from '../stateless/HomeImg';
import { observer} from 'mobx-react';

interface IImageGetProps{
    store: any,
}
@observer
export default class HomeImgWithMobx extends React.Component<IImageGetProps>{
    render(){
        return (
            <HomeImg homebanners={this.props.store.dataSource}/>
        )
    }
}