import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EnchancedTableHead from '../stateless/EnhancedTableHead';
import { TextField, Button } from '@material-ui/core';
import { observer, inject } from 'mobx-react';

let id = 0;


interface IAPITestWithMobxProps {
    dataContainer: any;
    msg: any;
}

interface IRoleShow {
    id:string;
    name: string;
    updatedAt: Date;
    createdAt: Date;
}

@inject('msg')
@inject('dataContainer')
@observer
class APITestWithMobx extends React.Component<IAPITestWithMobxProps> {
    componentDidMount(){
        const { dataContainer, msg } = this.props;
        const { sourceName, setSourceName, setTitle } = dataContainer;
        setSourceName("roles");
        this.getList();
        setTitle('角色列表')
    }

    handleSourceInput = (e:any) => {
        const { dataContainer } = this.props;
        const { setSourceName, setTitle } = dataContainer;
        const val = e.target.value;
        setSourceName(val);

        if(val==="users"){
            setTitle("用户列表");
        }
        if(val==="roles"){
            setTitle('角色列表');
        }
        if(val==="apps"){
            setTitle("应用列表");
        }
        
    }

    getList = () =>{
        const { dataContainer, msg } = this.props;
        const { getList } = dataContainer;
        getList({sort: ['id', 'DESC'], page: 1, pagesize: 25}, (m:any)=>{
            msg.show(m);
        })
    }
    render(){
        const { dataContainer } = this.props;
        const { title, list, loading} = dataContainer;
        console.log(list);
        
        return (
            <React.Fragment>
             <form onSubmit={(e:any)=>{e.preventDefault();this.getList()}}  style={{
                    display: 'flex',
                    alignItems: 'baseline'
                }}>
            <TextField label="请输入资源名" onChange={this.handleSourceInput}/>
            <Button type="submit" variant="contained">查询</Button>
            </form>
            <br/>
            <br/>
            <br/>
            <h2>{title}</h2>
            <br/>
            <br/>
            <br/>
            <Paper  style={{
                overflow: "auto",
                width: "96%",
                minHeight: '400px'
            }}>
            {
                loading? '加载中' :
                <Table >
                <EnchancedTableHead />
                    <TableBody>
                        
                        {list.map((row:IRoleShow) => (
                            <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell align="center">
                                {row.id}
                                查看
                            </TableCell>
                            <TableCell align="center">{row.name}</TableCell>
                            <TableCell align="center">{row.createdAt}</TableCell>
                            <TableCell align="center">{row.updatedAt}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            }
            
            </Paper>
            </React.Fragment>
        )
    }
}

export default APITestWithMobx as any;