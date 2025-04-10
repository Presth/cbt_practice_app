import { z } from "zod";

export const questionSchema = z.object({
  question: z.string().nonempty("Question is required"),
  answers: z.array(
    z.object({
      id: z.string().nonempty("Answer ID is required"),
      value: z.string().nonempty("Answer is required"),
    })
  ),
  correct_answer_id: z.string().nonempty("Correct answer should be provided"),
});
