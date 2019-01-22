import routes from './routes';
import connectDB from './db';
import config from '../server/config';
import User from './models/User';
import bcrypt from 'bcrypt';
const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const Pack = require('../package');

const server = Hapi.server({
    port: 3002,
    host: 'localhost'
});

const init = async () => {
    await server.register(require('hapi-auth-jwt2'));
    // bring your own validation function
    const validate = async function (decoded, request) {
        // do your checks to see if the person is valid
        if (!decoded.id) {
            return { isValid: false };
        }
        if(!decoded.password){
            return { isValid: false };
        }
        const user  = await User.findByPk(decoded.id);

        if(bcrypt.compareSync(decoded.password, user.password)){
            return {isValid: true};
        }else{
            return { isValid: false };

        }
    };
    server.auth.strategy('jwt', 'jwt',
    { key: config.privateKey,          // Never Share your secret key
        validate: validate,            // validate function defined above
        verifyOptions: { algorithms: [ 'HS256' ] } // pick a strong algorithm
    });

    server.auth.default('jwt');

    const swaggerOptions = {
        info: {
                title: 'API文档',
                version: Pack.version,
            },
        };
    
    await server.register([
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: swaggerOptions
        }
    ]);
    server.route(routes);
    await server.start();

    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});
connectDB();
init();