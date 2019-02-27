export default  (sequelize, DataTypes) => { 

    const Balance = sequelize.define('balances', {
        amount: {
            type: DataTypes.INTEGER,
            defaultValue: 0,//in 或者out 表示入账或者出账
        }, 
       
    });
    
    Balance.associate = models => {
        Balance.belongsTo(models.User);
        Balance.belongsTo(models.Shop);
        Balance.hasMany(models.BalanceChange);
    }

    return Balance;
}


