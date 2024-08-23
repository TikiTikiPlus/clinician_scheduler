const { DataTypes } = require("sequelize");

const Accounts = (sequelize) => {
    const Accounts = sequelize.define("accounts", {
        ID: {
            type: DataTypes.INTEGER
        },
        user: {
            type: DataTypes.STRING
        },
        MD5: {
            type: DataTypes.STRING
        },
        EMAIL: {
            type: DataTypes.STRING
        }
    });

    return Accounts;
};

module.exports = Accounts;
