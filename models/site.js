module.exports = function(sequelize, DataTypes) {
    var Site = sequelize.define("Site", {
        // firstName (VARCHAR, NOT NULL, between 1-30 characters)
        country: {
            type: DataTypes.STRING,
        },
        // lastName (VARCHAR, NOT NULL, between 1-30 characters)
        state: {
            type: DataTypes.STRING,
            validate: {
                len: [2, 2]
            }
        },
        // contactType (VARCHAR, Default value "Personal")       
        county: {
            type: DataTypes.STRING,
        },
        // phoneNumber (VARCHAR, NULL, length 10 characters, numbers only)
        city: {
            type: DataTypes.STRING,
        },
        // emailAddress (VARCHAR, NULL, must be valid email format)
        facility: {
            type: DataTypes.STRING,
        },
        address: {
            type: DataTypes.STRING,
        },
        zip: {
            type: DataTypes.INTEGER,
            validate: {
                len: [5]
            }
        },
        latitude: {
            type: DataTypes.STRING,
        },
        longitude: {
            type: DataTypes.STRING,
        },
        phone_1: {
            type: DataTypes.STRING,
            allowNull: false,
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
    // be sure to return the model!
    return Site;
};