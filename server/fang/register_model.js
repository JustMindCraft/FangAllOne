export default   function registerModel(modelPath, sequelize){
    const model = sequelize.import(modelPath);
    model.sync();
    return model;
}