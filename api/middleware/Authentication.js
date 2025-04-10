import jwt from "jsonwebtoken";
import User from "../models/Users.js";
import { USER } from "../utils/typesDef.js";

export const Authenticate = (userRole) => {
  return async (req, res, next) => {
    const authToken = req.cookies.token;

    if (!authToken) return res.status(403).json({ message: "Unauthorized" });

    const result = jwt.verify(authToken, process.env.JWT_SECRET);

    const userExist = await User.findOne({
      where: { student_uuid: result.student_uuid },
    });

    if (
      !userExist ||
      userExist.status !== USER.ACTIVE ||
      userExist.role !== userRole
    )
      return res.status(403).json({ message: "Unauthorized" });

    if (!userExist.verified)
      return res.status(401).json({ message: "Account not verified" });

    req.user = result;

    next();
  };
};
