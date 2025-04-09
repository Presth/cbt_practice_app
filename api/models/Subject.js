import { DataTypes } from "sequelize";
import sequelize from "./db.js";

const Subject = sequelize.define("Subject", {
  uuid: {
    type: DataTypes.STRING,
    unique: {
      args: true,
      msg: "UUID already exist",
    },
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  time_allowed: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Subject.sync()
  .then(() => {
    console.log("Subject table created");
  })
  .catch((err) => {
    console.log("Error creating Subject table:", err);
  });

export default Subject;
