import { useState } from "react";

export const Form = () => {
  const [password, setPassword] = useState("");

  const [userColor, setUserColor] = useState("red");
  const [emailColor, setEmailColor] = useState("red");
  const [passwordColor, setPasswordColor] = useState("red");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("red");

  function validateUsername(value){
    if (value === "" || value.length < 3) {
      setUserColor("red");
    } else {
      setUserColor("green");
    }
  }

  function validateEmail(value) {
    if (value.includes("@gmail")) {
      setEmailColor("green");
    } else if (value === "") {
      setEmailColor("red");
    } else {
      setEmailColor("red");
    }
  }

  function validatePassword(value) {
    setPassword(value);
    if (value.length > 8) {
      setPasswordColor("green");
    } else if (value === "") {
      setPasswordColor("red");
    } else {
      setPasswordColor("red");
    }
  }
  
  function validateConfirmPassword(value) {
    if (value === password) {
      setConfirmPasswordColor("green");
    } else {
      setConfirmPasswordColor("red");
    }
  }

  return (
    <div className="w-[400px] items-center border-2 border-green-500 p-4 flex justify-center h-[500px] rounded-2xl">
      <form className="flex flex-col">
        <label>
          <input
            className={`w-[350px] transition-all ease-in-out duration-150 text-center py-3 my-3 rounded-xl border-[1px] outline-none ${
              userColor === "red" ? "border-red-500" : "border-green-500"
            }`}
            type="text"
            name="firstName"
            placeholder="Name"
            onChange={(e) => {
              validateUsername(e.target.value);
            }}
          />
        </label>
        <label>
          <input
            className={`w-[350px] transition-all ease-in-out duration-150 text-center py-3 my-3 rounded-xl border-[1px] outline-none ${
              emailColor === "red" ? "border-red-500" : "border-green-500"
            }`}
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => {
              validateEmail(e.target.value);
            }}
          />
        </label>
        <label>
          <input
            className={`w-[350px] transition-all ease-in-out duration-150 text-center py-3 my-3 rounded-xl border-[1px] outline-none ${
              passwordColor === "red" ? "border-red-500" : "border-green-500"
            }`}
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => {
              validatePassword(e.target.value);
            }}
          />
        </label>
        <label>
          <input
            className={`w-[350px] transition-all ease-in-out duration-150 text-center py-3 my-3 rounded-xl border-[1px] outline-none ${
              confirmPasswordColor === "red"
                ? "border-red-500"
                : "border-green-500"
            }`}
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={(e) => {
              validateConfirmPassword(e.target.value);
            }}
          />
        </label>
        <input type="submit" value="Submit" className="w-full py-2 transition-all ease-in-out duration-150 border-slate-500 border-2 mt-5 rounded-xl hover:bg-slate-500 hover:cursor-pointer"/>
      </form>
    </div>
  );
};
