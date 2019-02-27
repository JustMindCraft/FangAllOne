export default  (sequelize, DataTypes) => { 

    const BalanceChange = sequelize.define('balance_changes', {
        inOrOut: {
            type: DataTypes.STRING,
            defaultValue: 'in',//in 或者out 表示入账或者出账
        }, 
        quantity: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        },
        reason: {
            type: DataTypes.STRING,
            defaultValue: "收佣金"
        }
       
    });
    
    BalanceChange.associate = models => {
        BalanceChange.belongsTo(models.Balance);
    }

    return BalanceChange;
}


