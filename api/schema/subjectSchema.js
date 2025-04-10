import { z } from "zod";

export const subjectSchema = z.object({
  name: z.string().nonempty("Subject name is required"),
  code: z.string().nonempty("Subject code is required"),
  time_allowed: z.number().min(1, "Time allowed should be greater than 0"),
  maxQuestions: z
    .number()
    .min(1, "Maximum number of delivery questions not set"),
});
