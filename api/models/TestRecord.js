import { DataTypes } from "sequelize";
import sequelize from "./db.js";
import { TEST } from "../utils/typesDef.js";

const TestRecord = sequelize.define("TestRecord", {
  test_taker: DataTypes.STRING,
  subject_uuid: DataTypes.STRING,
  questions_assigned: DataTypes.JSON,
  time_allowed: DataTypes.INTEGER,
  time_used: { type: DataTypes.INTEGER, defaultValue: 0 },
  status: { type: DataTypes.STRING, defaultValue: TEST.ACTIVE },
});

export default TestRecord;
