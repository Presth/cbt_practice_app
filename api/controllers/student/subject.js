import Subject from "../../models/Subject.js";

export const getAllSubjects = async (req, res) => {
  try {
    const subjects = await Subject.findAll();
    res.status(200).json({ subjects });
  } catch (error) {
    res.status(500).json({ message: "Error fetching subjects", error });
  }
};
