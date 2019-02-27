import User from './User';
import App from './App';
import HomeBanner from './HomeBanner'
import Product from './Product'
import Role from './Role';
import Shop from './Shop';
import wechat from './wechat';
import Contact from './Contact';


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
    .concat(Shop)
    .concat(wechat)
    .concat(Contact)
    ;


export default routes;
