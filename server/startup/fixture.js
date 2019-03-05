import {App, Role, User, UserRole, HomeBanner, Shop, Setting, Product} from "../models";

import * as Sequelize from 'sequelize';
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
            name: '乐多多企业解决方案',
            isDefault: true,
            host:  config[ENV].host
        });
        console.log('开始设置默认应用');
        
        const defaultSetting = await Setting.create();
        await defaultSetting.setApp(defaultApp);
        await defaultApp.setSetting(defaultSetting);
        console.log("默认应用设置完毕"+JSON.stringify(await defaultApp.getSetting()));
        
   }else{
        defaultApp = await App.findOne({isDefault: true});
        console.log("当前默认应用已经存在，应用名是："+ defaultApp.name);
   }

    //创建默认的默认角色================================================================================
    console.log("开始为", defaultApp.name, "默认的默认角色================================================================================");
    
   
    
    const roles = ['登录用户', '匿名用户', '超级管理员'];
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
    
    const superAdminRole = await Role.findOne({where: {name:'超级管理员', appId: defaultApp.id}});

  
    const  userCount =  await UserRole.count({where: {roleId: superAdminRole.id}});
    console.log(`正在检查${defaultApp.name}下，superAdmin角色下是否有用户`);
    const {username, password, mobile, email} = config[ENV].superAdmin
    if(userCount===0){
        console.log(`发现${defaultApp.name}下，superAdmin角色下没有有用户，　正在创建`);
        const superAdmin = await User.register(username, password, mobile, email);
        await superAdmin.setApp(defaultApp);
        await superAdmin.addRole(superAdminRole);
        console.log(`${defaultApp.name}下，超级管理员检查完毕${JSON.stringify(superAdmin)}`);

    }else{
        let user = await User.findOne({where: {
            appId: defaultApp.id,
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
            await user.setApp(defaultApp);
            
        }
        console.log(`${defaultApp.name}下，superAdmin角色已经有用户，超级管理员检查完毕${JSON.stringify(user)}`);

    }
    //创建默认应用的默认店铺=================================================================================
    const countShops = await Shop.count({where: {appId: defaultApp.id, isDefault: true}})
   
    console.log(`默认应用的默认店铺数量为${countShops}`);

    if(countShops===0){
        console.log('创建默认店铺');
        const newShop = await Shop.create({
            name: '默认店铺',
            isDefault: true,
        })
        await newShop.setApp(defaultApp);
        console.log('创建默认店铺完毕，'+JSON.stringify(newShop));
    }else{
        console.log('默认店铺检查完毕');
    }

    //为默认店铺创建会员卡产品和基本的免费的软件购买
    const defaultShop = await Shop.findOne({where: {appId: defaultApp.id, isDefault: true}});
    const cardLevel = defaultShop.cardLevel;
    const firstCardCount = await Product.count({where: {
        cardLevel: cardLevel+1,
    }})
    if(firstCardCount===0){
        const firstCard = await Product.createCard(
            "乐多多黑卡",
            "打包的年费服务，包括分销等更多权益和功能",
            "https://res.cloudinary.com/da7efhqvt/image/upload/v1545225684/zhengjue/imgs/vip1.jpg",
            [
                "https://res.cloudinary.com/da7efhqvt/image/upload/v1545225684/zhengjue/imgs/vip1.jpg",
            ],
            defaultShop,
            36500,
            [2880]
        )
    }else{
        console.log("默认店铺的第一张会员卡已经存在");
    }

    //为默认店铺添加软件商品
    const ProductFreeCount = await Product.count({where: {name: "免费开店", shopId: defaultShop.id, isFree: true}})
    if(ProductFreeCount === 0){
        await Product.create({
            name: '免费开店',
            desciption: "马上拥有自己的独立的店铺",
            cover: "https://res.cloudinary.com/da7efhqvt/image/upload/v1545225684/zhengjue/imgs/vip1.jpg",
            limitForEachUser: 1,
            isFree: true,
        })
    }else{
        console.log("默认店铺已经有软件商品了");
    }
    
   
    
    
    
    
}

