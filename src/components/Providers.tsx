"use client";
import { SessionProvider } from "next-auth/react";
import React, { FC, useState } from "react";

interface ProviderProps {
  children: React.ReactNode;
}

const AllProviders: FC<ProviderProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AllProviders;
