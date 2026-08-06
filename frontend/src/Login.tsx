import { useState } from "react";
import { useNavigate } from "react-router-dom";

const USERNAME = "admin";
const PASSWORD = "Shervy@1211";

export default function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    if (
      username.trim() === USERNAME &&
      password === PASSWORD
    ) {
      localStorage.setItem("crmLoggedIn", "true");
      navigate("/crm");
      return;
    }

    alert("Invalid Username or Password");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md">

        <div className="text-center">

          <h1 className="text-4xl font-bold text-emerald-600">
            Shervy Realty
          </h1>

          <p className="text-gray-500 mt-2">
            CRM Dashboard Login
          </p>

        </div>

        <form onSubmit={handleLogin} className="mt-10 space-y-5">

          <div>

            <label className="block mb-2 text-sm font-medium text-gray-700">
              Username
            </label>

            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Username"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
            />

          </div>

          <div>

            <label className="block mb-2 text-sm font-medium text-gray-700">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
            />

          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-xl transition"
          >
            Login
          </button>

        </form>

      </div>
    </div>
  );
}