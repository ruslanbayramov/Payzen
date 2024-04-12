import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../services/userApi";
import { ToastContainer, toast } from "react-toastify";

function Signup() {
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const navigate = useNavigate();

  function handleSubmit(e: any) {
    e.preventDefault();

    signup(name, surname, email, password, confirmPassword).then(
      (data: any) => {
        const notify = () => toast(data.message);
        notify();

        if (data.status === "success")
          setTimeout(() => navigate("/login"), 2000);
      }
    );
  }

  return (
    <section className="flex flex-col justify-center items-center h-screen gap-12">
      <main className="w-[32rem] flex flex-col py-24 px-5 justify-center items-center rounded-[10px] shadow-[0px_0px_10px_rgba(200,200,200,50)]">
        <ToastContainer autoClose={2000} />
        <h1 className="font-bold uppercase text-[2.5rem] tracking-wide mb-4">
          Welcome
        </h1>
        <img
          src="./src/assets/Payzen.png"
          alt="payzen"
          className="w-[5.625rem] block mb-8"
        />
        <form className="flex flex-col gap-3 w-72" onSubmit={handleSubmit}>
          <input
            type="text"
            name="Name"
            placeholder="Name"
            className="placeholder:text-[#676767] border border-[#676767] rounded px-4 py-2 block focus:outline-none"
            value={name}
            onChange={(e: any) => setName(e.target.value)}
          />
          <input
            type="text"
            name="Surname"
            placeholder="Surname"
            className="placeholder:text-[#676767] border border-[#676767] rounded px-4 py-2 block focus:outline-none"
            value={surname}
            onChange={(e: any) => setSurname(e.target.value)}
          />
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
          <input
            type="text"
            name="ConfirmPassword"
            placeholder="Confirm password"
            className="placeholder:text-[#676767] border border-[#676767] rounded px-4 py-2 block focus:outline-none mb-2"
            value={confirmPassword}
            onChange={(e: any) => setConfirmPassword(e.target.value)}
          />
          <button
            type="submit"
            className="bg-[#FF6D28] px-4 py-1 rounded-2xl hover:bg-[#e66224] transition-colors duration-300"
          >
            Sign up
          </button>
        </form>
      </main>

      <aside className="space-x-2">
        <p className="inline-block">Do you have account ?</p>
        <Link
          to="/login"
          className="text-[#FF6D28] hover:text-[#e66224] transition-colors duration-300"
        >
          Sign in
        </Link>
      </aside>
    </section>
  );
}

export default Signup;
