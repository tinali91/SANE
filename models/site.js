module.exports = function(sequelize, DataTypes) {
    var Site = sequelize.define("Site", {
        country: {
            type: DataTypes.STRING,
        },
        state: {
            type: DataTypes.STRING,
        },       
        county: {
            type: DataTypes.STRING,
        },
        city: {
            type: DataTypes.STRING,
        },
        facility: {
            type: DataTypes.STRING,
        },
        address: {
            type: DataTypes.STRING,
        },
        zip: {
            type: DataTypes.INTEGER,
        },
        latitude: {
            type: DataTypes.STRING,
        },
        longitude: {
            type: DataTypes.STRING,
        },
        phone_1: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        phone_2: {
            type: DataTypes.STRING,
        },
        website: {
            type: DataTypes.STRING,
        },
        additional_info: {
            type: DataTypes.TEXT,
        }
    });

    return Site;
};