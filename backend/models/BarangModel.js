import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Barang = db.define(
  "product",
  {
    nama_barang: DataTypes.STRING,
    jenis: DataTypes.STRING,
    jumlah: DataTypes.INTEGER,
  },
  {
    freezeTableName: true,
  }
);

export default Barang;

(async () => {
  await db.sync();
})();
