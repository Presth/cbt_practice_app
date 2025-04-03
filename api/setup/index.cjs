const path = require("path");
const { readFile } = require("fs");
const bcrypt = require("bcryptjs");
const { db } = require("../config/db");

const setupDataBase = () => {
  const filePath = path.join(__dirname, "db_structure.sql");
  readFile(filePath, { encoding: "utf-8" }, (err, sqlScript) => {
    if (err) return console.error(err);

    db.query(sqlScript, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }

      console.log(result);
      db.end();
    });
  });
};

const seedAdmin = () => {
  const password = "admin1234";
  const salt = bcrypt.genSaltSync(10);
  const hashedpassword = bcrypt.hashSync(password, salt);
  const credentials = ["admin", hashedpassword, "superadmin"];
  const sql = `INSERT INTO users (username, password, role) VALUES (?)`;
  db.query(sql, [credentials], (err, result) => {
    if (err) throw err;

    console.table({
      message: ["Admin created successfully"],
      credentials: [...credentials, { password }],
    });
    db.end();
  });
};

const command = process.argv[2];
if (command === "seedAdmin") {
  seedAdmin();
  return;
}

setupDataBase();
