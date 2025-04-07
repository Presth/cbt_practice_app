import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../../models/users.js";
import { Op } from "sequelize";

export const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({
    where: {
      [Op.or]: [
        {
          username,
        },
        { email: username },
      ],
    },
  });

  if (!user) return res.status(403).json("Invalid credentials");
  const verifyPassword = bcrypt.compareSync(password, user.password);
  if (!verifyPassword) return res.status(403).json("Invalid credentials");
  const token = jwt.sign(JSON.stringify(user), process.env.JWT_SECRET);
  res.status(200).json({ message: "Login success", token });
};

export const createAccount = async (req, res) => {
  let { email, password, username } = req.body;
  if (!username) {
    username = req.body.email.split("@")[0];
  }
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  const createUser = await User.create({ username, email, password: hash });

  console.log(createUser);
  res.status(200).json({ message: "Account created" });
};
