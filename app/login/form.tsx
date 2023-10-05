"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function Form() {
  const router = useRouter();
  const handleSignInWithGoogle = async () => {
    const response = await signIn("google", {
      redirect: false,
    });
  };
  const handleSignInWithCredentials = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    console.log({ response });
    if (!response?.error) {
      router.push("/");
      router.refresh();
    } else {
      alert(`logion error: ${response.error}`);
    }
  };
  return (
    <div className="flex flex-col gap-8 w-full items-center">
      <form
        onSubmit={handleSignInWithCredentials}
        className="flex flex-col gap-2 w-[400px]  mt-10"
      >
        <input
          name="email"
          className="border border-black text-black"
          type="email"
        />
        <input
          name="password"
          className="border border-black  text-black"
          type="password"
        />
        <button type="submit">Login</button>
      </form>
      <div className="w-full flex justify-center">
        <button
          className="border px-2 py-1 rounded-lg"
          onClick={handleSignInWithGoogle}
        >
          Login with Google
        </button>
      </div>
    </div>
  );
}
