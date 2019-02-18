import User from './User';
import App from './App';
import HomeBanner from './HomeBanner'
import Role from './Role';


const indexRoute = {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        return 'Hello, world!';
    }
}


const routes = [indexRoute].concat(User).concat(App).concat(Role).concat(HomeBanner);

export default routes;
