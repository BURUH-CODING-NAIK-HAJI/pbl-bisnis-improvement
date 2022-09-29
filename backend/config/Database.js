import { Sequelize } from "sequelize";

const db = new Sequelize("db_barang", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
