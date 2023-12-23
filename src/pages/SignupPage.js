import signup from "../asset/images/Sign up.png";
import {  useFormik } from "formik";
import Input from "../components/Common/Input";
import * as Yup from "yup";
import { addNewUser } from "../services/allHttpServices";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const initialValues = {
  username: "",
  email: "",
  password: "",
  passwordconfirm: "",
};

const validationSchema = Yup.object({
  username: Yup.string().required("name is required!"),
  email: Yup.string().email("invalid email address!").required("email is required"),
  password: Yup.string().required("password is required").min(4),
  passwordconfirm: Yup.string()
    .required("passwordconfirm is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const onSubmit = (values) => {
  const { username, email, password } = values;
  const user = {
    username,
    email,
    password,
    name: { firstname: "not set", lastname: "not set" },
    address: {
      city: "not set",
      street: "not set",
      number: "not set",
      zipcode: "not set",
    },
    phone: "09121234567",
  };

  addNewUser(user)
    .then((res) => {
      toast.success("user added successfuly!");
    })
    .catch((err) => console.log(err));
};

const SignupPage = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  return (
    <section className="w-full landscape:min-h-[500px] h-full flex lg:flex-row gap-2 flex-col items-center lg:p-4">
      <div className="hidden lg:block w-full lg:w-1/3">
        <img className="w-full h-auto" src={signup} alt="login" />
      </div>
      <div className="lg:flex-1 w-full md:w-2/3 flex items-center justify-center">
        <form
          onSubmit={formik.handleSubmit}
          className="flex w-full lg:w-2/3 xl:w-1/2 flex-col items-center justify-center border border-main-primary p-4 lg:p-6 rounded-lg shadow-md"
        >
          <h1 className="font-kavoon mb-4 text-sm lg:text-lg">Sign Up</h1>
          <Input formik={formik} label="User Name" name="username" />
          <Input formik={formik} label="Email" name="email" />
          <Input formik={formik} label="Password" name="password" type="password" />
          <Input
            formik={formik}
            label="Password Confirmation"
            name="passwordconfirm"
            type="password"
          />
          <div className="w-full text-xs md:text-sm lg:text-base flex flex-col items-center">
            <span className="">if you have an account</span>
            <span>
              <Link to="/login" state={{ redirect: "/profile" }} className="text-main-primary">
                Login
              </Link>
            </span>
          </div>
          <button
            type="submit"
            disabled={!formik.isValid}
            className="bg-main-primary disabled:cursor-not-allowed text-xs md:text-sm lg:text-base rounded-md p-2 text-main-secondary w-full md:w-1/2 mt-4"
          >
            Sign up
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignupPage;
