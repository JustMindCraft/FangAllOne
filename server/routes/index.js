import User from './User';
import App from './App';
import Role from './Role';


const indexRoute = {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        return 'Hello, world!';
    }
}

const routes = [indexRoute].concat(User).concat(App).concat(Role);

export default routes;
