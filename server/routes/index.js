import User from './User';
import App from './App';
import HomeBanner from './HomeBanner'
import Product from './Product'
import Role from './Role';
import wechat from './wechat';


const indexRoute = {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        return 'Hello, world!';
    }
}

const routes = [indexRoute]
    .concat(User)
    .concat(App)
    .concat(Product)
    .concat(Role)
    .concat(HomeBanner)
    .concat(wechat)
    ;


export default routes;
