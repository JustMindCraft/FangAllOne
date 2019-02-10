export default {
    privateKey: 'NeverShareYourSecret',
    mode: 'development',
    defaultApp: {
        name: '正觉工场',
    },
    development: {
        db: {
            dialect: 'sqlite',
            username: 'simontao',
            password: 'xsq@519',
            database: 'fang_dev',
            storage: 'database.sqlite'//sqlite only
        }
    },
    superAdmin: {
        username: "admin",
        password: "admin123",
    }

}