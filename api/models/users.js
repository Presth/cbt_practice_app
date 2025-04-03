import { DataTypes } from "sequelize";
import sequelize from "./db.js";

// Define a User model
const User = sequelize.define("User", {
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
});

// User.sync()
//   .then(() => console.log("User table created"))
//   .catch((err) => console.log("Error creating User table:", err));

export default User;
