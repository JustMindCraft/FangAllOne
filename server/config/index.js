export default {
    development: {
        privateKey: 'NeverShareYourSecret',

        db: {
            dialect: 'sqlite',
            username: 'simontao',
            password: 'xsq@519',
            database: 'fang_dev',
            storage: 'development.sqlite'//sqlite only
        },
        host: 'localhost:3000',
        superAdmin: {
            username: "admin",
            password: "admin123",
            mobile: '18820965455',
            email: 'xsqfeather@gmail.com'
        }

    },
    production: {
        privateKey: 'NeverShareYourSecret',

        db: {
            dialect: 'sqlite',
            username: 'simontao',
            password: 'xsq@519',
            database: 'fang_dev',
            storage: 'production.sqlite'//sqlite only
        },
        host: 'lododor.com',
        superAdmin: {
            username: "admin",
            password: "admin123",
            mobile: '18820965455',
            email: 'xsqfeather@gmail.com'
        }

    },
    test: {
        privateKey: 'NeverShareYourSecret',

        db: {
            dialect: 'sqlite',
            username: 'simontao',
            password: 'xsq@519',
            database: 'fang_dev',
            storage: 'test.sqlite'//sqlite only
        },
        host: 'test.lododor.com',
        superAdmin: {
            username: "admin",
            password: "admin123",
            mobile: '18820965455',
            email: 'xsqfeather@gmail.com'
        }

    },
   

}