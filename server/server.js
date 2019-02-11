import routes from './routes';
import config from '../server/config';
import {User} from './models/';
import bcrypt from 'bcrypt';
import assert from 'assert';
import seed from './startup/fixture';
import relations from './models/relations';

const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const Pack = require('../package');

const server = Hapi.server({
    port: 3002,
    host: 'localhost'
});


const ENV = process.env.NODE_ENV;

const init = async () => {
    await server.register(require('hapi-auth-jwt2'));
    // bring your own validation function
    const validate = async function (decoded, request) {
        console.log(request.route.path);
        
        // do your checks to see if the person is valid
        if (!decoded.id) {
            return { isValid: false };
        }
        if(!decoded.password){
            return { isValid: false };
        }
        try {
            const user  = await User.findByPk(decoded.id, {attributes:['id','password']});
            if(!user){
                return { isValid: false };
            }
            
            if(bcrypt.compareSync(decoded.password, user.password)){
                return {isValid: true};
            }else{
                return { isValid: false };
    
            }
            
        } catch (error) {
            console.error(error);
            assert.fail(error);
            return { isValid: false };

        }

       
    };
    server.auth.strategy('jwt', 'jwt',
    { key: config[ENV].privateKey,          // Never Share your secret key
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
    // await connectDB();
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
    await seed();
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();

