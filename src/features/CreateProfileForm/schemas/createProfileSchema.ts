import * as Yup from "yup";

export const createProfileSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^\(\d{3}\) \d{3}-\d{4}$/, "Phone must be exactly 10 digits")
    .required("Phone is required"),
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .min(12, "Password must be at least 12 characters")
    .matches(/[A-Z]/, "Password must contain an uppercase letter")
    .matches(/[a-z]/, "Password must contain a lowercase letter")
    .matches(/[0-9]/, "Password must contain a number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain a special character (e.g., !@#$)"
    )
    .required("Password is required"),
});
