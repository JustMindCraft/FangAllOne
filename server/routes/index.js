import User from './User';
import App from './App';


const indexRoute = {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        return 'Hello, world!';
    }
}

const routes = [indexRoute].concat(User).concat(App);

export default routes;
