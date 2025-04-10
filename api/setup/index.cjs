const bcrypt = require("bcryptjs");
const { default: User } = require("../models/Users");
const { default: Subject } = require("../models/Subject");
const { default: Question } = require("../models/Question");
const { default: sequelize } = require("../models/db");
const { default: TestRecord } = require("../models/TestRecord");

const setupDataBase = async () => {
  try {
    await User.sync();
    console.log("User table created successfully");

    await Subject.sync();
    console.log("Subject table created successfully");

    await Question.sync();
    console.log("Questions table created successfully");

    await TestRecord.sync();
    console.log("Test Record table created successfully");

    console.log("All tables created successfully");
    sequelize.close();
  } catch (error) {
    console.log("Error setting up database tables", error);
  }
};

// const seedAdmin = () => {
//   const password = "admin1234";
//   const salt = bcrypt.genSaltSync(10);
//   const hashedpassword = bcrypt.hashSync(password, salt);
//   const credentials = ["admin", hashedpassword, "superadmin"];
//   const sql = `INSERT INTO users (username, password, role) VALUES (?)`;
//   db.query(sql, [credentials], (err, result) => {
//     if (err) throw err;

//     console.table({
//       message: ["Admin created successfully"],
//       credentials: [...credentials, { password }],
//     });
//     db.end();
//   });
// };

// const command = process.argv[2];
// if (command === "seedAdmin") {
//   seedAdmin();
//   return;
// }

setupDataBase();
