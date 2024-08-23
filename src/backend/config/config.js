module.exports = {
    HOST: "localhost",
    USER: "C##RALPH",
    PASSWORD: "ralph",
    DB: "Development_Database",
    PORT: 1521,
    SID: "orcl",
    DIALECT: "oracle",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
