"use client";

import React, { useState } from "react";
import Link from "next/link";
import RegistrationForm from "@/components/Registration";
import { Login } from "@/components/Login";

export default function Auth() {
  const [showRegist, setShowRegist] = useState(false);

  const toggleView = () => {
    setShowRegist(!showRegist);
  };

  return (
    <div className="flex gap-2 flex-col justify-center items-center">
      {/* Use toggleView to switch between views */}

      {showRegist ? <RegistrationForm /> : <Login />}
      <section className="flex flex-row gap-1">
        {showRegist
          ? "Sudah punya akun? Login"
          : "Belum Punya akun? Registrasi"}
        <h1
          onClick={toggleView}
          className="text-redNutech cursor-pointer hover:underline hover:underline-offset-4"
        >
          {showRegist ? "di sini" : "di sini"}
        </h1>
      </section>
    </div>
  );
}
