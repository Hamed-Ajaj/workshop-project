import { useState, type FormEvent } from "react";
import { client } from "./lib/axios";
function App() {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [response, setResponse] = useState<{ success: boolean; message: string } | null>(null);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await client.post("/login", {
        email,
        password,
      });
      setResponse(res.data);
    } catch (error: any) {
      setResponse({
        success: false,
        message: error.response?.data?.message || "An error occurred during login",
      });
    }
  };

  return (
    <main className="w-full min-h-screen flex justify-center items-center bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <form onSubmit={handleLogin} className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">Welcome Back</h1>
          <p className="text-gray-500 mt-1">Sign in to your account</p>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className={`w-full px-4 py-2.5 border border-gray-300 rounded-lg  focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition`}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
          </div>
        </div>

        {response && (
          <div
            className={`p-3 rounded-md text-sm ${response.success
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
              }`}
          >
            {response.message}
          </div>
        )}

        <button
          disabled={!email || !password}
          className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white font-medium rounded-lg transition focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Sign In
        </button>
      </form>
    </main>
  );
}

export default App;
