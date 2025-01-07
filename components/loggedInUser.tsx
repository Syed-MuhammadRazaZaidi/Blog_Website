"use client";
import { UserButton } from "@clerk/nextjs";
import React from "react";
// import { useUser } from "@clerk/nextjs";

const LoggedInUser = () => {
  // const { user } = useUser();

  return (
    <div>
      <div className="flex items-center justify-end">
        <UserButton />
      </div>
    </div>
  );
};

export default LoggedInUser;