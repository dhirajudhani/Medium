import { useState, type ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { SignupInput } from "@dhirajudhani1313/medium-comman/dist/zod";
import { BACKEND_URL } from "../config";

export const Auth = ({ type }: { type: "signin" | "signup" }) => {
  const navigate = useNavigate()
  const [postInputs, setPostInputs] = useState<SignupInput>({
    email: "",
    password: "",
  });

  const sendRequest = async () => {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signin" ? "signin" : "signup"}`, postInputs)
      const jwt = response.data;
      localStorage.setItem("token", jwt.jwt)
      navigate("/blogs")
    } catch (error) {
      // alert the user here that the request failed
    }

  };

  return (
    <div className=" h-screen flex flex-col  justify-center items-center">
      <div className="">
        <div className="text-3xl font-bold ">Create an account</div>
        <div className="text-gray-400">
          {type === "signin"
            ? "Don't have an account ?"
            : "Already have an account ?"}
          <Link
            className="ml-2 underline"
            to={type === "signin" ? "/signup" : "/signin"}
          >
            {type === "signin" ? "Sign Up" : "Sign In"}
          </Link>
        </div>
      </div>
      <div>
        {type === "signup" ? (
          <LabelledInput
            label="Name"
            type={"text"}
            placeholder="Enter your name"
            onChange={(e) => {
              setPostInputs({
                ...postInputs,
                name: e.target.value,
              });
            }}
          />
        ) : null}
        <LabelledInput
          label="Email"
          type={"text"}
          placeholder="Enter your email"
          onChange={(e) => {
            setPostInputs({
              ...postInputs,
              email: e.target.value,
            });
          }}
        />
        <LabelledInput
          label="Password"
          type={"password"}
          placeholder="Enter your password"
          onChange={(e) => {
            setPostInputs({
              ...postInputs,
              password: e.target.value,
            });
          }}
        />
        <button
          onClick={sendRequest}
          type="button"
          className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          {type === "signup" ? "Sign up" : "Sign in"}
        </button>
      </div>
    </div>
  );
};

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelledInput({
  label,
  placeholder,
  onChange,
  type,
}: LabelledInputType) {
  return (
    <div>
      <label className="block mb-2 text-sm text-black font-semibold pt-4">
        {label}
      </label>
      <input
        onChange={onChange}
        id="first_name"
        type={type || "text"}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
