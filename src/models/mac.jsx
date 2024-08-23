import { DataTypes } from "sequelize";

const MAC = (sequelize, Sequelize) => {
    const MAC = sequelize.define("mac", {
      ID: {
        type: Sequelize.INTEGER
      },
      BEDNO: {
        type: Sequelize.STRING
      },
      STATUS: {
        type: Sequelize.BOOLEAN
      },
      ARRIVE:{
        type: Sequelize.DATE
      },
      NAME:
      {
        type: sequelize.STRING
      },
      URN: {
        type: Sequelize.STRING
      },
      GP: {
        type: Sequelize.STRING
      },
      GESTATION: {
        type: Sequelize.STRING
      },
      ASSESS:{
        type: Sequelize.DATE
      },
      INDUCTION:
      {
        type: sequelize.INTEGER
      },
      RISK: {
        type: Sequelize.STRING
      },
      PATHWAY: {
        type: Sequelize.STRING
      },
      ROM: {
        type: Sequelize.STRING
      },
      BLDGRP:{
        type: Sequelize.STRING
      },
      GBS:
      {
        type: sequelize.STRING
      },
      SERO: {
        type: Sequelize.STRING
      },
      EPI: {
        type: Sequelize.STRING
      },
      PROGRESS: {
        type: Sequelize.BOOLEAN
      },
      MX:{
        type: Sequelize.STRING
      }
      ,
      MW: {
        type: Sequelize.STRING
      },
      LOC: {
        type: Sequelize.STRING
      },
      BREQ: {
        type: Sequelize.DATE
      },
      BALLOC:{
        type: Sequelize.STRING
      }
    });
    
  
    return MAC;
  };
export default MAC;