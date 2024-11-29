"use client";
import { useFormik } from "formik";
import Image from "next/image";
import { useEffect, useState } from "react";
import { basicSchema } from "./schema";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { SlEye } from "react-icons/sl";
import { useRouter } from "next/navigation";
import AuthaxiosInstance from "../api/axios/axios-auth";
import { setCookieValue } from "../api/cookies";
import { COOKIE_NAMES } from "../api/constant";
import { toast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { AxiosError } from "axios";
import { io } from "socket.io-client";
interface SignInValues {
  email: string;
  password: string;
}

export default function Home() {
  const [valuess, setValues] = useState({ showPassword: false });
  const router = useRouter();
  const ViewPassword = () => {
    setValues({ ...valuess, showPassword: !valuess.showPassword });
  };

  const onSubmit = async (values: SignInValues) => {
    try {
      const RequestPayload = {
        CompanyEmail: values.email,
        CompanyPassword: values.password,
      };

      const response = await AuthaxiosInstance.post("/signin", RequestPayload);
      const { token, payload } = await response.data;

      setCookieValue(COOKIE_NAMES.AUTH_TOKEN, token);
      setCookieValue(COOKIE_NAMES.COMPANY_DATA, payload.CompanyName);

      setTimeout(() => {
        router.push("/dashboard");
      }, 500);

      toast({
        title: "Login successfully.",
      });
    } catch (error) {
      const axiosError = error as AxiosError;

      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: `There was a problem with your request. ${
          axiosError?.message || "Unknown error"
        }`,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  const SOCKET_SERVER_URL =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
  const socket = io(SOCKET_SERVER_URL);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to the server:", socket.id);

      socket.emit("chat message", "Hello, server!");

      socket.on("chat message", (msg) => {
        console.log("Message from server:", msg);
      });
    });

    return () => {
      socket.off("chat message");
      socket.disconnect();
    };
  }, [socket]);

  return (
    <main>
      <div className="h-[100vh] ">
        <div className="h-[10vh]  bg-[#0F1017]">
          <div className="flex text-[32px]  text-white items-center  justify-center h-full  w-full ">
            {/* 🌲 WILD WOOD APARTMENTS 🌲 */}
          </div>
        </div>
        <div className="h-[90vh] grid grid-cols-2">
          <div className="w-full h-full relative">
            <Image
              src="/apartment.jpg"
              alt="Background Image"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>

          <div className="flex bg-white items-center  justify-center h-full">
            <div className=" -mt-20 w-[60%] rounded-[20px]">
              <div>
                <p className="text-[40px] font-[700]">Welcome back</p>
                <p className="text-[#57585D] ">Log into your Account </p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-group mt-[40px]">
                  <p>Email</p>
                  <input
                    className={`${
                      errors.email && touched.email
                        ? "border-[#fc8181]"
                        : "border-[#9494F5]"
                    } border-[1px] h-[48px] pl-2  rounded-[5px] w-full  focus:border-deeppink focus:outline-none disabled:cursor-not-allowed`}
                    type="email"
                    name="email"
                    placeholder="hola@soytian.tech"
                    required
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email && (
                    <span className="text-[#fc8181]">{errors.email}</span>
                  )}
                </div>
                <div className="form-group mt-[16px] ">
                  <div className="relative">
                    <p>Password</p>
                    <input
                      className={`${
                        errors.password && touched.password
                          ? "border-[#fc8181]"
                          : "border-[#9494F5]"
                      } border-[1px] h-[48px] pl-2 rounded-[5px] w-full  focus:border-deeppink focus:outline-none disabled:cursor-not-allowed`}
                      type={valuess.showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                    <div
                      className="absolute right-3 bottom-[13px]"
                      onClick={ViewPassword}
                    >
                      <SlEye className="w-5 h-5" />
                    </div>
                  </div>
                  {errors.password && touched.password && (
                    <span className="text-[#fc8181]">{errors.password}</span>
                  )}
                </div>

                <div className="form-group text-center mt-[40px]">
                  <button
                    className="  h-[49px]  font-[500] text-[18px] text-white bg-RedDefault rounded-[8px] form-control w-full   disabled:cursor-not-allowed disabled:bg-gray-500 focus:bg-deeppink"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <Spin
                        indicator={
                          <LoadingOutlined
                            style={{ fontSize: 24, color: "white" }}
                            spin
                          />
                        }
                      />
                    ) : (
                      "Continue"
                    )}
                  </button>
                  <p className="text-[16px] text-DarksideBarColor mt-[24px]">
                    Register an Apartment Complex{" "}
                    <span
                      onClick={() => router.push("/admin-siginup")}
                      className="text-RedDefault underline cursor-pointer"
                    >
                      here
                    </span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
