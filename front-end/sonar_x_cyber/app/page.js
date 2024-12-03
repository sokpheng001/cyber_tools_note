"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const loginFunction = async (email, password) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    email: email,
    password: password,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
    credentials: "include", // This is important for cookies
  };

  try {
    const response = await fetch(
      "http://136.228.158.126:5465/api/v1/auth/login",
      requestOptions
    );

    if (!response.ok) {
      throw new Error("Login failed");
    }

    const result = await response.json();
    console.log("Result: ", result);
    return result;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    setError("");

    try {
      const result = await loginFunction(email, password);

      // The access token is now set as an HttpOnly cookie by the server
      // Store the refresh token in localStorage (or you might handle it differently)
      localStorage.setItem("refreshToken", result?.data?.refreshToken);

      // Redirect to dashboard or home page
      // router.push("/dashboard");
    } catch (error) {
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <main className="min-h-screen flex justify-center items-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="w-72 flex flex-col gap-4 border p-4 bg-white rounded-sm"
      >
        {error && <p className="text-red-500">{error}</p>}
        <input
          className="border p-2 w-full outline-none"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="border p-2 w-full outline-none"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="py-2 px-4 bg-blue-500 text-white rounded-md"
        >
          Login
        </button>
      </form>
    </main>
  );
}
