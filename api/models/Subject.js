import { DataTypes } from "sequelize";
import sequelize from "./db.js";

const Subject = sequelize.define("Subject", {
  subject_uuid: {
    type: DataTypes.STRING,
    unique: {
      args: true,
      msg: "UUID must be unique",
    },
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
  },
  name: DataTypes.STRING,
  code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  time_allowed: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  max_questionsDelivered: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  enforceNoOfQuestons: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  allowMultipleSession: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});

Subject.associate = (models) => {
  Subject.hasMany(models.Questions, {
    foreignKey: "subject_uuid",
    as: "questions",
  });
};

export default Subject;
