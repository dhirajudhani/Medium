import { useState, type ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { SigninInput } from "@dhirajudhani1313/medium-comman/dist/zod";



export const Auth = ({ type } : {type : "signin" | "signup" }) => {
  const [postInputs, setPostInputs] = useState<SigninInput>({
    email: "",
    password: "",
  });

  const sendRequest = () => {

  }

  return (
    <div className=" h-screen flex flex-col  justify-center items-center">
      <div className="">
        <div className="text-3xl font-bold ">Create an account</div>
        <div className="text-gray-400">
          Already have an account ?
          <Link className="ml-2 underline" to={"/signin"}>
            Login
          </Link>
        </div>
      </div>
      <div>
        <LabelledInput
          label="Email"
          type={"text"}
          placeholder="Enter your email"
          onChange={(e) => {
            setPostInputs((c) => ({
              ...c,
              email: e.target.value,
            }));
          }}
        />
        <LabelledInput
          label="Password"
          type={"password"}
          placeholder="Enter your password"
          onChange={(e) => {
            setPostInputs((c) => ({
              ...c,
              password: e.target.value,
            }));
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
