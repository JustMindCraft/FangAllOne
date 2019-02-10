import {App, Role} from "../models/";

export default  async () => {
    //创建默认的应用
   let defaultApp = null;
   const appCount = await App.countDefault();
   console.log("查看当前默认应用个数", appCount.get('default'));
   if(appCount.get('default') === 0){
        console.log("当前没有默认应用建设中");
        defaultApp = await App.create({
            name: '默认应用',
            isDefault: true,
        });
   }else{
        defaultApp = await App.findOne({isDefault: true});
        console.log("当前默认应用已经存在，应用名是："+ defaultApp.name);
   }

    //创建默认的默认角色
    console.log("开始为", defaultApp.name, "创建默认角色");
    
    const roles = ['logined', 'nobody', 'superAdmin'];
    roles.forEach( async role=>{
        console.log(role);
        // await Role.findOne()
        // const matchRole = await Role.findAll({where: {name: role}});
        // console.log(matchRole);
        
        
    })
    //创建默人的超级管理员
    //创建默认应用的默认店铺
    //创建默认应用的默认存储空间
    //创建默认应用的文章分类
    //创建默认应用的视频分类
    //创建默认应用的音乐分类
    //创建默认应用的游戏分类
    
    
}

