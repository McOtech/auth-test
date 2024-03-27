"use client";

import { useSession } from "next-auth/react";
import React from "react";

const Profile = () => {
  const { data } = useSession();
  const user = data?.user;

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", color: "white" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <span>First Name: {user?.firstName}</span>
          <span>last Name: {user?.lastName}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "row" }}>
          <span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={user?.image || ""} alt="" />
          </span>
          <span>Email: {user?.email}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "row" }}>
          <span>User ID: {user?.uid}</span>
          <span>
            Access Token: <pre>{user?.accessToken}</pre>
          </span>
        </div>
      </div>
    </>
  );
};

export default Profile;
