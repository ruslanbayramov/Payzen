import { Link } from "react-router-dom";

function Signup() {
  return (
    <section className="flex flex-col justify-center items-center h-screen gap-12">
      <main className="w-[32rem] flex flex-col py-24 px-5 justify-center items-center rounded-[10px] shadow-[0px_0px_10px_rgba(200,200,200,50)]">
        <h1 className="font-bold uppercase text-[2.5rem] tracking-wide mb-4">
          Welcome
        </h1>
        <img
          src="./src/assets/Payzen.png"
          alt="payzen"
          className="w-[5.625rem] block mb-8"
        />
        <form className="flex flex-col gap-3 w-72">
          <input
            type="text"
            name="Name"
            placeholder="Name"
            className="placeholder:text-[#676767] border border-[#676767] rounded px-4 py-2 block focus:outline-none"
          />
          <input
            type="text"
            name="Surname"
            placeholder="Surname"
            className="placeholder:text-[#676767] border border-[#676767] rounded px-4 py-2 block focus:outline-none"
          />
          <input
            type="text"
            name="Email"
            placeholder="Email"
            className="placeholder:text-[#676767] border border-[#676767] rounded px-4 py-2 block focus:outline-none"
          />
          <input
            type="text"
            name="Password"
            placeholder="Password"
            className="placeholder:text-[#676767] border border-[#676767] rounded px-4 py-2 block focus:outline-none"
          />
          <input
            type="text"
            name="ConfirmPassword"
            placeholder="Confirm password"
            className="placeholder:text-[#676767] border border-[#676767] rounded px-4 py-2 block focus:outline-none mb-2"
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
