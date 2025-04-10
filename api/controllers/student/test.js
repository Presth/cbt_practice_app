import { Op } from "sequelize";
import TestRecord from "../../models/TestRecord.js";
import { activeStudents, TEST } from "../../utils/typesDef.js";
import { sendWsMessage } from "../../utils/websocketSetup.js";
import Subject from "../../models/Subject.js";
import { getShuffledQuestions } from "./question.js";

export const startTest = async (req, res, next) => {
  const { subject } = req.params;

  const subjectDetails = await Subject.findOne({
    where: { subject_uuid: subject },
  });
  if (!subjectDetails)
    return res.status(404).json({ message: "Subject not found" });

  // check if exam already started
  const testAlreadyTaken = await TestRecord.findOne({
    where: {
      [Op.and]: {
        test_taker: req.user.student_uuid,
        subject_uuid: subject,
      },
    },
    order: [["created_by", "DESC"]],
  });

  if (testAlreadyTaken.status === TEST.ACTIVE) {
    return res.status(200).json({
      test: testAlreadyTaken,
    });
  }

  if (testAlreadyTaken && !subjectDetails.allowMultipleSession) {
    return next(new Error("You have already taken this test"));
  }

  const questions_assigned = await getShuffledQuestions(
    subjectDetails,
    req.body?.no_of_questions || null
  );

  console.log(questions_assigned);

  const createTest = await TestRecord.create({
    test_taker: req.user.student_uuid,
    subject_uuid: subject,
    time_allowed: subjectDetails.time_allowed,
    questions_assigned,
  });

  if (!createTest) return next(new Error("Unable to start exam"));
  return res.status(200).json({
    message: "Test started successfully",
    subject,
    test: createTest,
  });
};

export const configureWsForTest = async (
  dataFromClient,
  wsConnectionId,
  clientInfo
) => {
  // find the latest test record in case of multiple sessions
  const testDetails = await TestRecord.findOne({
    where: {
      [Op.and]: {
        test_taker: clientInfo.student_uuid,
        subject_uuid: dataFromClient.subject,
      },
    },
    order: [["created_at", "DESC"]],
  });

  if (!testDetails || testDetails.status === TEST.SUBMITTED)
    return sendWsMessage({ message: "Exam is not active" }, wsConnectionId);

  activeStudents[clientRequest.token] = {
    wsConnectionId: clientWsId,
    time_used: testDetails.time_used,
    test_id: testDetails.id,
  };
};

export const stopTest = async (req, res) => {
  const { subject } = req.params;
  return res.status(200).json({
    message: "Test started successfully",
    subject,
  });
};
