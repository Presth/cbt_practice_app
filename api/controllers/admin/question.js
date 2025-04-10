import Question from "../../models/Question.js";
import Subject from "../../models/Subject.js";

export const addQuestion = async (req, res, next) => {
  let { subject } = req.params;

  const subjectExist = await Subject.findOne({
    where: { subject_uuid: subject },
  });
  if (!subjectExist) return next(new Error("Subject does not exist"));

  // upload a question
  const createQuestion = await Question.create({
    subject_uuid: subject,
    ...req.body,
  });

  if (!createQuestion) {
    return next(new Error("Error creating question"));
  }

  return res.status(200).json({
    message: "Question created successfully",
    question: createQuestion,
  });
};
