import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="py-7">
      <section className="flex flex-col-reverse gap-2 md:flex-row flex-wrap justify-center md:justify-between ">
        <div className="">
          <Image
            src={`/img/assets/user1.png`}
            width={75}
            height={75}
            alt="user"
          />
          <h1 className="text-sm pt-3">Selamat Datang</h1>
          <h1 className="text-xl font-semibold">Imam Siswandi</h1>
        </div>
        <div className="flex flex-col gap-3 bg-redNutech w-5/12 rounded-lg text-white py-3 px-4">
          <h2 className="text-sm">Saldo anda</h2>
          <h1 className="text-xl">Rp. 0</h1>
          <h2 className="text-sm">Lihat saldo</h2>
        </div>
      </section>
    </div>
  );
}
