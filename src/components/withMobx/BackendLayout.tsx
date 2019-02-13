import React, { Component } from 'react';
import { withRouter } from 'react-router';


interface IBackendLayutProps{
    // title: string,
    history: any,
}
interface IBackendLayoutState{
    visible: boolean,
    left: string,
}

class BackendLayout extends Component<IBackendLayutProps, IBackendLayoutState> {
    constructor(props:any){
        super(props);
        this.state = { visible: false, left: "1%" }

    }

    handleToggle = () => {
        const { visible } = this.state;
        if(visible){
            this.setState({ visible: false, left: '1%' });
        }else{
            this.setState({ visible: true, left: '340px' });

        }
    }

    handleItemClick = (path: any) => {
        const { history } = this.props;
        history.push(path);
        this.setState({ visible: false, left: '1%' });
    }

    render(){
        const { visible, left } = this.state
        const { history } = this.props;
        
        return(
            <div style={{
                height: "100%", width: '100%',
                
                display: "flex",
                flexDirection: "row",
                alignItems: "baseline",
                alignContent: "baseline",
                justifyContent: "space-evenly",
                justifyItems: "center"
                }}>
                   
                    <h1>面板</h1>
                </div>
        )
    }
}

export default withRouter(BackendLayout as any) as any;