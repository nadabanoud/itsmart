import React from "react";
import { Field, Formik, Form } from "formik";
import * as Yup from "yup";
import { FaUser, FaLock } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { TextField } from "@/components/forms";
import { Button } from "@/components/ui/button";
import imgWelcome from "@/assets/welcome.png";
import svg1 from "@/assets/svg1.png";
import svg5 from "@/assets/svg5.png";
import { Link } from "react-router";

function RegisterPage() {
  return (
    <Formik
      initialValues={{ username: "", password: "", email: "" }}
      validationSchema={() =>
        Yup.object({
          username: Yup.string().required("please enter user name"),
          password: Yup.string()
            .min(5, "password is short")
            .required("please enter password"),
          email: Yup.string().required("please enter email"),
        })
      }
      onSubmit={(values) => {
        console.log("values", values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="flex justify-center items-center bg-background min-h-screen p-4">
            <div className="relative w-full max-w-[850px] bg-primary rounded-3xl shadow flex flex-col md:flex-row items-center overflow-hidden">
          

              {/* Welcome Section */}
              <div className="w-full md:w-[50%] flex justify-center items-center p-4">
                <div className="w-full md:w-[80%] grid custom-glass text-center">
                  <p className="text-text font-extrabold text-2xl md:text-3xl p-4 mt-6">
                    Hello, Welcome to
                  </p>
                  <span className="gradient-text font-extrabold text-2xl md:text-3xl">
                    ! IT SMART
                  </span>
                  <img src={imgWelcome} className="w-full object-cover mt-4" />
                </div>
              </div>
                  {/* Form Section */}
              <div className="w-full md:w-[50%] bg-surface rounded-3xl flex flex-col justify-center items-center gap-5 p-6 text-primary text-center min-h-screen">
                <h1 className="text-2xl md:text-3xl font-medium font-reem mb-8">
                  Create Account
                </h1>

                {/* Email */}
                <div className="w-full relative mt-2">
                  <span className="absolute top-4 right-4 z-10 flex items-center pointer-events-none">
                    <AiFillMail />
                  </span>
                  <Field
                    name="email"
                    className="w-full rounded-[12px] p-2 pl-5 mt-2 border border-primary"
                    component={TextField}
                    type="text"
                    placeholder="Email"
                    error={errors.email && touched.email ? errors.email : undefined}
                  />
                </div>

                {/* Username */}
                <div className="w-full relative mt-4">
                  <span className="absolute top-3 right-4 z-10 flex items-center pointer-events-none">
                    <FaUser />
                  </span>
                  <Field
                    name="username"
                    className="w-full rounded-[12px] p-2 pl-5 border border-primary"
                    component={TextField}
                    type="text"
                    placeholder="Username"
                    error={errors.username && touched.username ? errors.username : undefined}
                  />
                </div>

                {/* Password */}
                <div className="w-full relative mt-4">
                  <span className="absolute top-3 right-4 z-10 flex items-center pointer-events-none">
                    <FaLock />
                  </span>
                  <Field
                    name="password"
                    className="w-full rounded-[12px] p-2 pl-5 border border-primary"
                    type="password"
                    component={TextField}
                    placeholder="Password"
                    error={errors.password && touched.password ? errors.password : undefined}
                  />
                </div>

                <Button className="w-full md:w-[50%] h-[48px] rounded-[8px] shadow cursor-pointer mt-6 text-text font-medium hover:bg-background">
                  Create Account
                </Button>

                <p className="mt-4">
                   Do have an account?</p>
                  <Link
                    to="/auth/login"
                    className="text-red-500 font-medium hover:underline"
                  ><p>
                     Login here! </p>
                  </Link>
               
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

export default RegisterPage;

