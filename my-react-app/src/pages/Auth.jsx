import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [login, setLogin] = useState(true);
  const [form, setForm] = useState({ email: "", password: "" });
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const nav = useNavigate();

  const handle = () => {
    if (!form.email.includes("@")) return setError("Invalid email");
    if (form.password.length < 6) return setError("Min 6 chars");
    setError(""); // ✅ clear error
    nav("/dashboard");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-pink-500 to-orange-600">

      <div className="bg-white p-6 rounded-2xl shadow-xl w-80 space-y-3">

        <h2 className="text-xl font-bold text-center">
          {login ? "Login" : "Register"}
        </h2>

        <input
          placeholder="Email"
          className="border p-2 w-full rounded-lg"
          onChange={(e) => {
            setForm({ ...form, email: e.target.value });
            setError(""); // ✅ reset error
          }}
        />

        <input
          type={show ? "text" : "password"}
          placeholder="Password"
          className="border p-2 w-full rounded-lg"
          onChange={(e) => {
            setForm({ ...form, password: e.target.value });
            setError(""); // ✅ reset error
          }}
        />

        <button
          onClick={() => setShow(!show)}
          className="text-sm text-blue-500"
        >
          {show ? "Hide" : "Show"} Password
        </button>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          onClick={handle}
          className="bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-700"
        >
          Submit
        </button>

        <p
          onClick={() => setLogin(!login)}
          className="text-center text-blue-500 cursor-pointer"
        >
          Switch to {login ? "Register" : "Login"}
        </p>

      </div>
    </div>
  );
}