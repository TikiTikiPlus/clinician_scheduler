import { DataTypes } from "sequelize";

const Equipment= (sequelize, Sequelize) => {
    const Equipment = sequelize.define("equipment", {
      EQUIPMENT_ID: {
        type: DataTypes.INTEGER
      },
      EQUIPMENT_NAME: {
        type: DataTypes.STRING
      },
      LOCATION: {
        type: DataTypes.STRING
      },
      CAR_NUMBER:{
        type: DataTypes.STRING
      }
    });
  
    return Equipment;
  };
export default Equipment;