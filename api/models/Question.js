import { DataTypes } from "sequelize";
import sequelize from "./db.js";

const Question = sequelize.define("Question", {
  question_uuid: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
    unique: {
      args: true,
      msg: "UUID must be unique",
    },
  },
  subject_uuid: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  question: DataTypes.TEXT("tiny"),
  answers: DataTypes.JSON,
  correct_answer_id: DataTypes.STRING,
});

Question.associate = (models) => {
  Question.belongsTo(models.Subject, {
    foreignKey: "subject_uuid",
    as: "subject",
  });
};

export default Question;
