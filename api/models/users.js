import { DataTypes } from "sequelize";
import sequelize from "./db.js";
import { USER } from "../utils/typesDef.js";

// Define a User model
const User = sequelize.define("User", {
  student_uuid: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    defaultValue: DataTypes.UUIDV4,
  },
  regNo: {
    type: DataTypes.STRING,
    unique: true,
  },
  fullname: {
    type: DataTypes.STRING,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      args: true,
      msg: "Username already exist",
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      args: true,
      msg: "Email address already exist",
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "user",
  },
  privileges: {
    type: DataTypes.JSON,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: USER.ACTIVE,
  },
  verified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

export default User;
