import { DEFAULT } from "oracledb";
import { DataTypes } from "sequelize";

const WARDS=(sequelize, Sequelize)=>{
    const WARDS = sequelize.define("wards",{
ID: {
    type: Sequelize.INTEGER
  },
  WARD: {
    type: Sequelize.STRING
  },
  STAFFED: {
    type: Sequelize.INTEGER
  },
  OCCUPIED:{
    type: Sequelize.INTEGER
  },
  ADMIT:
  {
    type: sequelize.INTEGER
  },
  DEFINITE:
  {
    type: sequelize.INTEGER
  },
  POTENTIAL: {
    type:sequelize.INTEGER
  },
  UPDATED:
  {
    type: sequelize.DATE
  }
})
  return WARDS;
}
export default WARDS;