export default  (sequelize, DataTypes) => { 
    const App = sequelize.define('app', {
        name: {
            type: DataTypes.STRING(),
        },
        isDefault: {
            type: DataTypes.BOOLEAN(),
            defaultValue: false,
        }
    })
    App.countDefault = async function(){
        return this.findOne({
            attributes: { include: [[sequelize.fn('COUNT', sequelize.col('isDefault')), "default"]] }
        });
    }
    return App;
};
