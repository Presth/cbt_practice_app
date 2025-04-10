import Subject from "../../models/Subject.js";

export const addSubject = async (req, res) => {
  const createSubject = await Subject.create({
    ...req.body,
    max_questionsDelivered: req.body.maxQuestions,
  });
  if (!createSubject) {
    return next(new Error("Error creating subject"));
  }

  return res.status(200).json({
    message: "Subject created successfully",
    subject: createSubject,
  });
};
