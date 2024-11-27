"use client";
import { useFormik } from "formik";
import Image from "next/image";
import { useState } from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { SlEye } from "react-icons/sl";
import { useRouter } from "next/navigation";
import { SignupSchema } from "@/app/schema";
import { UploadProps, Upload } from "antd";
import AuthaxiosInstance from "@/api/axios/axios-auth";
import { setCookieValue } from "@/api/cookies";
import { COOKIE_NAMES } from "@/api/constant";
import { toast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import fileUpload from "@/api/axios/FileUpload";
import { AxiosError } from "axios";

export default function AdminSignin() {
  const [valuess, setValues] = useState({ showPassword: false });
  const [ImageLoading, setImageLoading] = useState(false);
  const [ImgUrl, setImgUrl] = useState();
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const router = useRouter();

  const ViewPassword = () => {
    setValues({ ...valuess, showPassword: !valuess.showPassword });
  };

  const onSubmit = async (values: Record<string, unknown>) => {
    try {
      const newValues = { ...values, CompanyLogo: ImgUrl };
      const response = await AuthaxiosInstance.post("/signup", newValues);

      const { token, payload } = response.data;
      setCookieValue(COOKIE_NAMES.AUTH_TOKEN, token);
      setCookieValue(COOKIE_NAMES.COMPANY_DATA, payload.CompanyName);

      setTimeout(() => {
        router.push("/dashboard");
      }, 500);

      toast({
        title: "Company Registered successfully.",
      });
    } catch (error: unknown) {
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
      CompanyName: "",
      CompanyLogo: "",
      CompanyAddress: "",
      CompanyPhone: "",
      CompanyEmail: "",
      CompanyPassword: "",
      CompanyConfirmPassword: "",
    },
    validationSchema: SignupSchema,
    onSubmit,
  });

  const myprops: UploadProps = {
    action: "",
    async onChange(info) {
      const file = info.file.originFileObj;
      if (file) {
        setImageLoading(true);
        try {
          const result = await fileUpload(file);
          setImgUrl(result.files[0].url);
          setUploadSuccess(true);
          if (info.file.status === "error")
            toast({
              title: "Image uploaded Successfully",
            });
        } catch (error: unknown) {
          const axiosError = error as AxiosError;

          toast({
            variant: "destructive",
            title: `There was a problem with your request. ${
              axiosError?.message || "Unknown error"
            }`,
          });
        } finally {
          setImageLoading(false);
        }
      }
    },
  };

  return (
    <main>
      <div className="h-[100vh] ">
        <div className="h-[10vh]  bg-[#0F1017]"></div>
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
            <div className=" -mt-10 w-[60%] rounded-[20px]">
              <div>
                <h1 className="text-[24px] font-[700]">
                  {" "}
                  Manage your Apartment Complex
                </h1>
                <p className="text-[#57585D] text-[16px]">Register now </p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mt-[40px]">
                  <input
                    className={`${
                      errors.CompanyName && touched.CompanyName
                        ? "border-[#fc8181]"
                        : "border-[#9494F5]"
                    } border-[1px] h-[48px] pl-2  rounded-[5px] w-full  focus:border-deeppink focus:outline-none disabled:cursor-not-allowed`}
                    type="text"
                    name="CompanyName"
                    placeholder="Company Name ..."
                    required
                    value={values.CompanyName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.CompanyName && touched.CompanyName && (
                    <span className="text-[#fc8181]">{errors.CompanyName}</span>
                  )}
                </div>
                <div className="mt-[16px]">
                  <input
                    className={`${
                      errors.CompanyEmail && touched.CompanyEmail
                        ? "border-[#fc8181]"
                        : "border-[#9494F5]"
                    } border-[1px] h-[48px] pl-2  rounded-[5px] w-full  focus:border-deeppink focus:outline-none disabled:cursor-not-allowed`}
                    type="email"
                    name="CompanyEmail"
                    placeholder="hola@soytian.tech"
                    required
                    value={values.CompanyEmail}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.CompanyEmail && touched.CompanyEmail && (
                    <span className="text-[#fc8181]">
                      {errors.CompanyEmail}
                    </span>
                  )}
                </div>
                <section className="flex gap-2">
                  <div className="mt-[16px] flex flex-col ">
                    <input
                      className={`${
                        errors.CompanyPhone && touched.CompanyPhone
                          ? "border-[#fc8181]"
                          : "border-[#9494F5]"
                      } border-[1px] h-[48px] pl-2  rounded-[5px] w-full  focus:border-deeppink focus:outline-none disabled:cursor-not-allowed`}
                      type="text"
                      name="CompanyPhone"
                      placeholder="+233 506 843 863"
                      required
                      value={values.CompanyPhone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.CompanyPhone && touched.CompanyPhone && (
                      <span className="text-[#fc8181]">
                        {errors.CompanyPhone}
                      </span>
                    )}
                  </div>
                  <div className="flex w-[50%] mt-[16px]">
                    <div className="h-[48px] flex justify-center rounded-[5px] w-full">
                      <Upload.Dragger
                        showUploadList={false}
                        {...myprops}
                        className="w-full relative"
                        style={{
                          borderColor: "#E0E0FB",
                          background: "white",
                          color: "#9494F5",
                        }}
                      >
                        {ImageLoading ? (
                          <div className="flex items-center justify-center w-full h-full">
                            loading...
                          </div>
                        ) : uploadSuccess ? (
                          <div className="-mt-1  text-sm">
                            uploaded successfully
                          </div>
                        ) : (
                          <div className="-mt-1">Upload logo</div>
                        )}
                      </Upload.Dragger>
                    </div>
                  </div>
                </section>
                <div className="mt-[16px]">
                  <input
                    className={`${
                      errors.CompanyAddress && touched.CompanyAddress
                        ? "border-[#fc8181]"
                        : "border-[#9494F5]"
                    } border-[1px] h-[48px] pl-2  rounded-[5px] w-full  focus:border-deeppink focus:outline-none disabled:cursor-not-allowed`}
                    type="text"
                    name="CompanyAddress"
                    placeholder="123 Adele Street Accra,Ghana"
                    required
                    value={values.CompanyAddress}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.CompanyAddress && touched.CompanyAddress && (
                    <span className="text-[#fc8181]">
                      {errors.CompanyAddress}
                    </span>
                  )}
                </div>

                <div className="form-group mt-[16px] ">
                  <div className="relative">
                    <input
                      className={`${
                        errors.CompanyPassword && touched.CompanyPassword
                          ? "border-[#fc8181]"
                          : "border-[#9494F5]"
                      } border-[1px] h-[48px] pl-2 rounded-[5px] w-full  focus:border-deeppink focus:outline-none disabled:cursor-not-allowed`}
                      type={valuess.showPassword ? "text" : "password"}
                      name="CompanyPassword"
                      placeholder="Password"
                      value={values.CompanyPassword}
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
                  {errors.CompanyPassword && touched.CompanyPassword && (
                    <span className="text-[#fc8181]">
                      {errors.CompanyPassword}
                    </span>
                  )}
                </div>
                <div className="form-group mt-[16px] ">
                  <div className="relative">
                    <input
                      className={`${
                        errors.CompanyConfirmPassword &&
                        touched.CompanyConfirmPassword
                          ? "border-[#fc8181]"
                          : "border-[#9494F5]"
                      } border-[1px] h-[48px] pl-2 rounded-[5px] w-full  focus:border-deeppink focus:outline-none disabled:cursor-not-allowed`}
                      type={valuess.showPassword ? "text" : "password"}
                      name="CompanyConfirmPassword"
                      placeholder="Comfirm Password"
                      value={values.CompanyConfirmPassword}
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
                  {errors.CompanyConfirmPassword &&
                    touched.CompanyConfirmPassword && (
                      <span className="text-[#fc8181]">
                        {errors.CompanyConfirmPassword}
                      </span>
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
                    Login into Apartment Complex{" "}
                    <span
                      onClick={() => router.push("/")}
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
