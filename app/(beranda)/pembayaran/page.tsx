import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

export default function Pembayaran() {
  return (
    <div>
      <h1>Pembayaran</h1>
      <section className="flex flex-col gap-4">
        <div className="flex items-center">
          <Image
            src={`/img/assets/Listrik.png`}
            width={24}
            height={24}
            alt="listrik"
          />

          <h2 className="text-xs">Listrik Prabayar</h2>
        </div>
        <Input placeholder="Rp. 10,0000" />
        <Button variant="destructive" >Bayar</Button>
      </section>
    </div>
  );
}
