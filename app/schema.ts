import * as yup from "yup";

export const basicSchema = yup.object().shape({
  email: yup.string().email("please enter a valid email").required("Required"),
  password: yup
    .string()
    // .min(4, "Please provide a stronger password")
    .required("Required"),
});

export const SignupSchema = yup.object().shape({
  CompanyName: yup.string().required("Required"),
  CompanyEmail: yup
    .string()
    .email("Please enter a valid email")
    .required("Required"),
  CompanyAddress: yup.string().required("Required"),
  CompanyPhone: yup.string().required("Required"),
  CompanyPassword: yup
    .string()
    .min(4, "Please provide a stronger password")
    .required("Required"),
  CompanyConfirmPassword: yup
    .string()
    .oneOf([yup.ref("CompanyPassword")], "Passwords must match")
    .required("Required"),
});
