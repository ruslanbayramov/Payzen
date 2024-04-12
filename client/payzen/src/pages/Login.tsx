import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../services/userApi";

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  function handleSubmit(e: any) {
    e.preventDefault();

    login(email, password).then((data: any) => {
      const notify = () => toast(data.message);
      notify();

      if (data.status === "success")
        setTimeout(() => navigate("/signup"), 2000);
    });
  }

  return (
    <section className="flex flex-col justify-center items-center h-screen gap-12">
      <main className="w-[32rem] flex flex-col py-32 px-5 justify-center items-center rounded-[10px] shadow-[0px_0px_10px_rgba(200,200,200,50)] relative">
        <ToastContainer autoClose={2000} />
        <h1 className="font-bold uppercase text-[2.5rem] tracking-wide mb-4">
          Welcome
        </h1>
        <img
          src="./src/assets/Payzen.png"
          alt="payzen"
          className="w-[5.625rem] block mb-8"
        />
        <form className="flex flex-col gap-2 w-72" onSubmit={handleSubmit}>
          <input
            type="text"
            name="Email"
            placeholder="Email"
            className="placeholder:text-[#676767] border border-[#676767] rounded px-4 py-2 block focus:outline-none"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />
          <input
            type="text"
            name="Password"
            placeholder="Password"
            className="placeholder:text-[#676767] border border-[#676767] rounded px-4 py-2 block focus:outline-none"
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
          />
          <Link to="forgotpassword" className="text-[#0B2033] block underline">
            Forgot password ?
          </Link>
          <button
            type="submit"
            className="bg-[#FF6D28] px-4 py-1 rounded-2xl hover:bg-[#e66224] transition-colors duration-300"
          >
            Sign in
          </button>
        </form>
      </main>

      <aside className="space-x-2">
        <p className="inline-block">Don't have account ?</p>
        <Link
          to="/signup"
          className="text-[#FF6D28] hover:text-[#e66224] transition-colors duration-300"
        >
          Sign up
        </Link>
      </aside>
    </section>
  );
}

export default Login;
