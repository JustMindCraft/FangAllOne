import {App, Role, User, UserRole, HomeBanner} from "../models/";

import Sequelize from 'sequelize';
import config from "../config";


const Op = Sequelize.Op;


const ENV = process.env.NODE_ENV;

export default  async () => {

    console.log('当前环境是', ENV);
    
    //创建默认的应用===================================================================================
    console.log('默认的应用===================================================================================');
    
   let defaultApp = null;
   
   const appCount = await App.count({where: {isDefault: true}})
   console.log("查看当前默认应用个数", appCount);
   if(appCount === 0){
        console.log("当前没有默认应用建设中");
        defaultApp = await App.create({
            name: '默认应用',
            isDefault: true,
            host:  config[ENV].host
        });
   }else{
        defaultApp = await App.findOne({isDefault: true});
        console.log("当前默认应用已经存在，应用名是："+ defaultApp.name);
   }

    //创建默认的默认角色================================================================================
    console.log("开始为", defaultApp.name, "默认的默认角色================================================================================");
    
   
    
    const roles = ['logined', 'nobody', 'superAdmin'];
    for (const role of roles) {
        console.log('是否有角色'+role+'?');
        const roleCount = await Role.count({where: {name: role, appId: defaultApp.id}});
        if(roleCount===0){
            console.log('没有角色'+role);
            console.log('创建角色'+role);

            const newRole = await Role.create({
                name: role,
            })
           await newRole.setApp(defaultApp);
        }else{
            console.log('已经存在角色'+role);
        }

        console.log(role, '角色，检查完毕');
    }

    
    //创建默认的超级管理员============================================================================
   
    console.log('默认的超级管理员============================================================================');
    
    const superAdminRole = await Role.findOne({where: {name:'superAdmin', appId: defaultApp.id}});

  
    const  userCount =  await UserRole.count({where: {roleId: superAdminRole.id}});
    console.log(`正在检查${defaultApp.name}下，superAdmin角色下是否有用户`);
    const {username, password, mobile, email} = config[ENV].superAdmin
    if(userCount===0){
        console.log(`发现${defaultApp.name}下，superAdmin角色下没有有用户，　正在创建`);
        const superAdmin = await User.register(username, password, mobile, email);
        await superAdmin.addRole(superAdminRole);
        console.log(`${defaultApp.name}下，超级管理员检查完毕${JSON.stringify(superAdmin)}`);

    }else{
        let user = await User.findOne({where: {
            [Op.or]: 
            [
                {username}, 
                {mobile},
                {email}
            ]
        }});

        const authRlt = await User.auth(username, password, 'password')
        
       
        //不管如何都更新一下管理员资料
        if(user){
            if(!authRlt && !user.passwordSettedByUser){
                console.log("超级管理员密码已经更改,并且用户没有重新指定");
                
                await user.resetPassword(password);
            }
            await user.update({
                username, mobile, email
            })
        }else{
            console.log("根据配置找不到已经存在的管理员，根据配置重新创建一个");
            user = await User.register(username, password, mobile, email);
            await user.addRole(superAdminRole);
            
        }
        console.log(`${defaultApp.name}下，superAdmin角色已经有用户，超级管理员检查完毕${JSON.stringify(user)}`);

    }
    
    //创建默认应用的默认店铺=================================================================================

    const createRlt = await HomeBanner.create({
        images: [1,2,3,4],
        imageLinks: [1,2,3,4],
    })

    

    await createRlt.setApp(defaultApp);
    await defaultApp.setBanner(createRlt);

    console.log(await createRlt.getApp());
    // console.log(await defaultApp.getBanner());
    


    //创建默认应用的默认存储空间========================================================================
    //创建默认应用的文章分类
    //创建默认应用的视频分类
    //创建默认应用的音乐分类
    //创建默认应用的游戏分类
    
    
}

