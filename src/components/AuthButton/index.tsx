"use client";

import { signIn, signOut, useSession } from "next-auth/react";

const AuthButton = () => {
  const { data } = useSession();

  if (data && data.user) {
    return (
      <>
        <button onClick={(e) => signOut()}>Logout</button>
      </>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={() => signIn("cognito", { callbackUrl: "/", redirect: true })}
      >
        <i className="bi bi-box-arrow-in-right me-2"></i>
        SignIn
      </button>
    </>
  );
};

export default AuthButton;
