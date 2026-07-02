import { z } from "zod";

export const completeProfileSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  phone: z.string().optional(),
  avatar: z.string().optional(),
});

export type CompleteProfileInput =
  z.infer<typeof completeProfileSchema>;