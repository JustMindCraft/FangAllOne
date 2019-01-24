import React, {Component} from 'react';
import PcTopWithMobx from '../withMobx/PcTopWithMobx';
import PcFooter from '../stateless/PcFooter';
import { List } from 'semantic-ui-react';
import ImageUploader from '../withMobx/ImageUploader';

export default class Personal extends Component{
    render(){
        return(
            <div className="App-page">
                <ImageUploader />
                <PcTopWithMobx />
                    <h1>个人中心</h1>
                    <List divided relaxed>
                        <List.Item>
                        <List name='github' size='large' verticalAlign='middle' />
                        <List.Content>
                            <List.Header as='a'>Semantic-Org/Semantic-UI</List.Header>
                            <List.Description as='a'>Updated 10 mins ago</List.Description>
                        </List.Content>
                        </List.Item>
                        <List.Item>
                        <List.Icon name='github' size='large' verticalAlign='middle' />
                        <List.Content>
                            <List.Header as='a'>Semantic-Org/Semantic-UI-Docs</List.Header>
                            <List.Description as='a'>Updated 22 mins ago</List.Description>
                        </List.Content>
                        </List.Item>
                        <List.Item>
                        <List.Icon name='github' size='large' verticalAlign='middle' />
                        <List.Content>
                            <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
                            <List.Description as='a'>Updated 34 mins ago</List.Description>
                        </List.Content>
                        </List.Item>
                    </List>
                <PcFooter />
            </div>
        )
    }
}