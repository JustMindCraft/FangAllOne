import React from 'react';


interface IAdminPanelProps {
    list: Array<any>,
    one: any,
    title: string,

}

const AdminPanel = (props: IAdminPanelProps) => {
    return (
        <div>
            管理界面
        </div>
    )
}


export default AdminPanel;