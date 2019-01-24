export default {
    privateKey: 'NeverShareYourSecret',
    mode: 'development',
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
        username: "simontaosim",
        password: "7686043104xsq@519"
    }
}