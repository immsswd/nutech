import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="border-b-2">
        <div className="max-w-[1120px] mx-auto py-4">
          <div className="flex items-center justify-between">
            <section className="flex items-center gap-2">
              <Image
                src={`/img/assets/Logo.png`}
                width={32}
                height={32}
                alt="logo"
              />
              <Link href={`/home`} className="text-base font-semibold">
                SIMS PPOB
              </Link>
            </section>
            <section className="flex space-x-8">
              <Link href={`/topup`} className="text-sm">
                Top Up
              </Link>
              <Link href={`/transaction`} className="text-sm">
                Transaction
              </Link>
              <Link href={`/akun`} className="text-sm">
                Akun
              </Link>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
