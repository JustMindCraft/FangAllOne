这个项目数据架构完成后，在具体开发过程中，主要还是由前端驱动的

具体功能开发如下

##　1. 在src/components/pages 中新建页面, 然后在/src/App.tsx内部添加路由

##　2.　react化，拆分新建的页面，使用已有的组件或者新建组件，新建的基础组件都是无状态的纯函数, 在目录/src/components/stateless目录下

## ３. 考察新建的页面上的组件数据交互，对需要使用数据的组件，在/src/component/withMobx 新建仓库观察者组件，使用已有的mobx仓库，或者新建mobx仓库，在src/mobx/components新建的mobx仓库，　仓库的命名尽量和数据发生的那个无状态组件一致。

## 4.　在mobx仓库中开发前端交互逻辑

## 5.　根据/src/api.ts的标准开发后端路由(server/routes/模型名称/http方法)，并且生成路由api文档

## 6. 封装抽象后端路由代码，复用或者抽象封装模型方法，如果没有模型就新建(/server/model)

## 7. 测试，改bug





