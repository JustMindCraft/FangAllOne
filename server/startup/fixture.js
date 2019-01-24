import config from "../config";

export default  async function initSuperAdmin(User){
    User.sync({force: true}).then(async () => {
    
        const { username, password } = config.superAdmin;
        console.log(username);
        
        try {
            let user = await User.findOne({username});
            if(!user){
               user = await User.register(username, password); 
            }
            console.log(user.username);
            
        } catch (error) {
            console.error(error);
        }

    
    });
    
    
}