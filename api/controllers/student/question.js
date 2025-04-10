import Question from "../../models/Question.js";

export const getAllQuestions = async (req, res) => {
  const questions = await Question.findAll({
    where: { subject_uuid: req.params.subject },
  });
  return res.status(200).json({ questions });
};

export const getShuffledQuestions = async (subjectDetails, no_of_questions) => {
  const questions = await Question.findAll({
    where: { subject_uuid: subjectDetails.subject_uuid },
  });

  let questionArrLength =
    subjectDetails.enforceNoOfQuestons || !no_of_questions
      ? subjectDetails.max_questionsDelivered
      : no_of_questions;

  let usedNos = [];
  let shuffledQuestions = [];
  for (let i = 0; i < questionArrLength && i < questions.length; i++) {
    const randomNo = Math.round(
      Math.random() * (10 ^ String(questionArrLength).length)
    );
    console.log(randomNo);
    if (randomNo >= questions.length || usedNos.includes(randomNo)) continue;
    shuffledQuestions.push(questions[randomNo].id);
    usedNos.push(randomNo);
    console.log(questions[randomNo]);
  }

  return shuffledQuestions;
};
