import React from "react";
import { Field, Formik, Form } from "formik";
import * as Yup from "yup";
import { FaUser, FaLock } from "react-icons/fa";
import { TextField } from "@/components/forms";
import { Button } from "@/components/ui/button";
import imgWelcome from "@/assets/welcome.png";
import svg1 from "@/assets/svg1.png";
import svg5 from "@/assets/svg5.png";
import Select from "react-select";
import { Link } from "react-router";

function LoginPage() {
  return (
    <Formik
      initialValues={{ username: "", password: "", role: null }}
      validationSchema={() =>
        Yup.object({
          username: Yup.string().required("please enter user name"),
          password: Yup.string()
            .min(5, "password is short")
            .required("please enter password"),
          role: Yup.object().required("Select user type"),
        })
      }
      onSubmit={(values) => {
        console.log("values", values);
      }}
    >
      {({ errors, touched, setFieldValue, setFieldTouched }) => (
        <Form>
          <div className="flex justify-center items-center bg-background min-h-screen p-4">
            <div className="relative w-full max-w-[850px] bg-primary rounded-3xl shadow flex flex-col md:flex-row items-center text-primary overflow-hidden">
         

              {/* Welcome Section */}
              <div className="w-full md:w-[50%] flex justify-center items-center p-4">
                <div className="w-full md:w-[80%] grid custom-glass text-center">
                  <p className="text-text font-extrabold text-2xl md:text-3xl p-4">
                    Hello, welcome to
                  </p>
                  <span className="gradient-text font-extrabold text-2xl md:text-3xl">
                    ! IT SMART
                  </span>
                  <img src={imgWelcome} className="w-full object-cover mt-4" />
                </div>
              </div>
                   {/* Form Section */}
              <div className="w-full md:w-[50%] bg-surface flex flex-col justify-center items-center rounded-3xl p-6 min-h-screen gap-5">
                <h1 className="text-2xl md:text-3xl font-bold font-text mb-3 ">
                  Login
                </h1>

                <div className="w-full relative">
                  <span className="absolute top-5 right-4 flex items-center z-10 pointer-events-none">
                    <FaUser />
                  </span>
                  <Field
                    name="username"
                    className="w-full rounded-[12px] p-2 pl-5 mt-2 border border-primary"
                    component={TextField}
                    type="text"
                    placeholder="user name"
                  />
                </div>

                <div className="w-full relative mt-4">
                  <span className="absolute top-5 right-4 z-10 flex items-center pointer-events-none">
                    <FaLock />
                  </span>
                  <Field
                    name="password"
                    className="w-full rounded-[12px] p-2 pl-5 border border-primary"
                    label=" "
                    type="password"
                    component={TextField}
                    placeholder="password"
                  />
                </div>

                <div className="w-full mt-4 text-left">
                  <label className="block mb-2 font-bold text-primary">
                     select user type:
                  </label>
                  <Select
                    name="role"
                    options={[
                      { value: "student", label: "student" },
                      { value: "Admin", label: "Admin" },
                    ]}
                    className="text-left w-full"
                    placeholder="select type"
                    onChange={(option) => setFieldValue("role", option)}
                    onBlur={() => setFieldTouched("role", true)}
                  />
                  {errors.role && touched.role && (
                    <div className="text-red-500 text-sm mt-1">{errors.role}</div>
                  )}
                </div>

                <Button className="w-full md:w-[50%] h-[48px] rounded-[8px] shadow cursor-pointer mt-6 text-text font-medium hover:bg-background">
                  Login
                </Button>

                <p className="">
                   Don't have an account? </p>
                  <Link
                    to="/auth/register"
                    className="text-red-500  font-medium hover:underline"
                  >
                 <p>    Register here!
                </p>  </Link>
               
              </div>
            </div>

            {/* Decorative Images */}
            <img
              src={svg1}
              className="w-[120px] md:w-[200px] absolute bottom-5 left-5"
            />
            <img
              src={svg5}
              className="w-[80px] md:w-[120px] absolute top-5 right-5"
            />
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default LoginPage;

