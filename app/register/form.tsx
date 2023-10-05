"use client";
import React from "react";
export default function Form() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    const response = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    const json = await response.json();
    console.log(json);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 mx-auto max-w-md mt-10 text-black"
      action=""
    >
      <input name="email" className="border border-black" type="email" />
      <input name="password" className="border border-black" type="password" />
      <button className="text-white" type="submit">
        Register
      </button>
    </form>
  );
}
