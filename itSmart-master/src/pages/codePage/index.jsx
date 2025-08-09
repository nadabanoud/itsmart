import React from "react";
import logo from "../../assets/logo.png";
import svg3 from "../../assets/svg3.png";
import svg2 from "../../assets/svg2.png";
import { Field, Form, Formik } from "formik";
import { TextField } from "@/components/forms";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { Navigate, useNavigate } from "react-router";
function CodePage() {
  const navigate=useNavigate();
  return (
    <Formik
      initialValues={{ code: "" }}
      validationSchema={Yup.object({
        code: Yup.string().required("Please enter the code"),
      })}
      onSubmit={(values) => {
        console.log("Code submitted:", values.code);
        navigate("/material")
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="min-h-screen flex flex-col items-center justify-center relative px-4 mt-14">
          
            <img src={svg2} className="w-32 md:w-40 absolute left-2 bottom-2" />
            <img src={svg3} className="w-32 md:w-40 absolute right-2 top-2" />

          
            <div className="bg-surface p-6 pt-20 flex flex-col  gap-4 items-center justify-center rounded-2xl relative w-full max-w-sm shadow-lg">

            
              <img
                src={logo}
                className="w-80 h-40 object-cover"
              />

          
              <label
                htmlFor="code"
                className="text-primary font-semibold text-lg text-center font-text"
              >
                Enter the code:
              </label>

              <Field
                name="code"
                type="text"
                component={TextField}
                className="rounded-[12px] border-primary border w-full px-4 py-2"
                placeholder="Your code here"
              />

              {/* رسالة الخطأ */}
              {errors.code && touched.code && (
                <div className="text-red-500 text-sm">{errors.code}</div>
              )}

              {/* زر الإرسال */}
              <Button
                type="submit"
                className="mt-2 px-6 py-3 font-medium text-lg text-text hover:bg-background cursor-pointer w-full font-text"
              >
                Submit
              </Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default CodePage;

