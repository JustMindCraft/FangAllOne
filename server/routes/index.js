import User from './User';
import App from './App';
import Product from './Product'


const indexRoute = {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        return 'Hello, world!';
    }
}

const routes = [indexRoute].concat(User).concat(App).concat(Product);

export default routes;
