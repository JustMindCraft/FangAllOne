import { User, App, Role } from "./";


export default  function(){
    User.belongsTo(App);
    App.hasMany(User);
    Role.belongsTo(App);
    App.hasMany(Role);
}