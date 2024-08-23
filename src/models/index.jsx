import { Sequelize } from "sequelize";
import sequelize from "../backend/config/db.config";
import Accounts from "./accounts";
import Equipment from "./equipment";
import WARDS from "./wards";
import MAC from "./mac";
const db={}
db.sequelize = sequelize;
db.Sequelize = Sequelize;


db.Accounts = Accounts(sequelize, Sequelize);
db.Equipment=Equipment(sequelize,Sequelize);
db.WARDS=WARDS(sequelize,Sequelize);
db.MAC=MAC(sequelize,Sequelize);


export default db;