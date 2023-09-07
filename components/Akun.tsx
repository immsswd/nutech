"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

export default function Akun() {
  const router = useRouter();
  const submitHandler = (e: any) => {
    e.preventDefault();
    router.push("/");
  };
  return (
    <React.Fragment>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <form onSubmit={submitHandler} className="flex flex-col gap-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
          </div>
          <div>
            <Label htmlFor="email">Nama depan</Label>
            <Input type="email" id="email" placeholder="John" />
          </div>
          <div>
            <Label htmlFor="email">Nama belakang</Label>
            <Input type="email" id="email" placeholder="Doe" />
          </div>
          <Button className="border-red-500 text-redNutech" variant="outline">
            Edit Profile
          </Button>
          <Button variant="destructive">Logout</Button>
        </form>
      </div>
    </React.Fragment>
  );
}
