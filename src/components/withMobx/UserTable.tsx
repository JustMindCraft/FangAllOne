import React, {Component} from 'react';
import { Table, Checkbox, List, Button, Icon } from 'semantic-ui-react';


export default class UserTable extends Component{
    render(){
        return (
        <Table sortable celled selectable style={{width: "100%"}}>
                        <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell> 
                                <div>
                                    <div><Checkbox /></div>
                                </div> 
                            </Table.HeaderCell>
                            <Table.HeaderCell>id</Table.HeaderCell>
                            <Table.HeaderCell>用户名</Table.HeaderCell>
                            <Table.HeaderCell>手机号</Table.HeaderCell>
                            <Table.HeaderCell>社交账号</Table.HeaderCell>
                            <Table.HeaderCell>生日</Table.HeaderCell>
                            <Table.HeaderCell>角色</Table.HeaderCell>
                            <Table.HeaderCell>禁用</Table.HeaderCell>
                            <Table.HeaderCell style={{width: 130}}>基本操作</Table.HeaderCell>
                        </Table.Row>
                        </Table.Header>

                        <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                <Checkbox />
                            </Table.Cell>
                            <Table.Cell>1</Table.Cell>
                            <Table.Cell>simotnaosim</Table.Cell>
                            <Table.Cell>18820965455</Table.Cell>
                            <Table.Cell>
                                <List>
                                    <List.Item>qq:626754503</List.Item>
                                    <List.Item>wechat:xsqfeather</List.Item>
                                    <List.Item>qq:626754503</List.Item>
                                </List>
                            </Table.Cell>
                            <Table.Cell>1988/12/26</Table.Cell>
                            <Table.Cell>
                                <List>
                                    <List.Item>超级管理员</List.Item>
                                    <List.Item>经理</List.Item>
                                    <List.Item>网站管理员</List.Item>
                                </List>
                            </Table.Cell>
                            <Table.Cell>
                                <Checkbox toggle checked />
                            </Table.Cell>
                            <Table.Cell>
                                <Button.Group>
                                    <Button icon>
                                        <Icon name='delete' />
                                    </Button>
                                    <Button icon>
                                        <Icon name='edit' />
                                    </Button>
                                    <Button icon>
                                        <Icon name='eye' />
                                    </Button>
                                </Button.Group>
                            </Table.Cell>
                        </Table.Row>
                        
                       
                        </Table.Body>

                        <Table.Footer>
                       
                        </Table.Footer>
                    </Table>
        )
    }
}