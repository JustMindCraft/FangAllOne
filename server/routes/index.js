import User from './User';
import App from './App';
import Product from './Product'
import Role from './Role';


const indexRoute = {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        return 'Hello, world!';
    }
}

const routes = [indexRoute].concat(User).concat(App).concat(Product).concat(Role);


export default routes;
