import { useFormik } from "formik";
import Input from "../components/Common/Input";
import * as Yup from "yup";
import login from "../asset/images/login.png";
import { userLogin, getSingleUser } from "../services/allHttpServices";
import jwt_decode from "jwt-decode";
import { useState } from "react";
import Loading from "../components/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLoginUserAction } from "../Context/Providers/LoginUserProvider";
import toast from "react-hot-toast";

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = Yup.object({
  username: Yup.string().required("username is required!"),
  password: Yup.string().required("password is required").min(4),
});

const LoginPage = () => {
  const [isLoading, setisLoading] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();
  const redirect = state.redirect || "/products";
  const setUser = useLoginUserAction();
  const onSubmit = (values) => {
    setisLoading(true);
    userLogin(values)
      .then((res) => {
        const { sub } = jwt_decode(res.data.token);
        getSingleUser(sub)
          .then((res) => {
            Login(res.data);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => loginFail());
  };

  const Login = (data) => {
    setUser(data);
    localStorage.setItem("user", JSON.stringify(data));
    setisLoading(false);
    navigate(redirect);
    toast.success("Successfully Login!");
  };

  const loginFail = () => {
    setisLoading(false);
    toast("please check your input or your connectins and try again !!");
    toast.error("Login is fail !!");
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  if (isLoading) return <Loading />;

  return (
    <section className="w-full text-xs landscape:min-h-[500px] lg:text-base h-full flex lg:flex-row flex-col items-center lg:p-4">
      <div className="w-2/3 lg:w-1/3">
        <img className="w-full h-auto" src={login} alt="login" />
      </div>
      <div className="w-full md:w-[90%] lg:flex-1 flex lg:flex-row flex-col items-center justify-center">
        <form
          onSubmit={formik.handleSubmit}
          className="flex w-full md:w-2/3 xl:w-1/2  flex-col items-center justify-center border border-main-primary p-2 md:p-4 rounded-lg shadow-md"
        >
          <h1 className="font-kavoon lg:mb-4 text-sm lg:text-lg">Log in</h1>
          <Input formik={formik} label="User Name" name="username" />
          <Input formik={formik} label="Password" name="password" type="password" />
          <div className="w-full flex flex-col items-center">
            <span className="lg:mr-2">If you don't have an account</span>
            <span>
              <Link to="/signup" state={{ redirect: "/profile" }} className="text-main-primary">
                create an account
              </Link>
            </span>
          </div>
          <button
            type="submit"
            disabled={!formik.isValid}
            className="bg-main-primary disabled:cursor-not-allowed rounded-md p-2 text-main-secondary w-1/2 mt-4"
          >
            Log in
          </button>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
