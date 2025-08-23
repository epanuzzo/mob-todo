import * as yup from "yup";

// Task validation schema
export const textValidationSchema = yup.object().shape({
  text: yup
    .string()
    .trim()
    .required("Task text is required")
    .min(1, "Task text cannot be empty")
    .max(500, "Task text must be less than 500 characters"),
});
