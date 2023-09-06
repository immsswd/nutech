import Image from "next/image";
import React from "react";

export default function Pembayaran() {
  return (
    <div>
      <h1>Pembayaran</h1>
      <section className="flex items-center">
        <Image
          src={`/img/assets/Listrik.png`}
          width={24}
          height={24}
          alt="listrik"
        />
        <h2 className="text-xs">Listrik Prabayar</h2>
      </section>
    </div>
  );
}
