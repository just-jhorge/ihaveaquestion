import { z } from "zod";

export const passwordSchema = z
  .string()
  .min(1, "Password is required")
  .min(8, "Password must be at least 8 characters")
  .regex(
    /[^A-Za-z0-9]/,
    "Password must contain at least one special character"
  );
