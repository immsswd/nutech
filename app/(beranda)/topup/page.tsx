import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

export default function Pembayaran() {
  return (
    <div>
      <h1>Pembayaran</h1>

      <div className="flex items-center space-x-2 py-2">
        <Image
          src={`/img/assets/Pulsa.png`}
          width={24}
          height={24}
          alt="listrik"
        />
        <h2 className="text-xs">Nominal Toup</h2>
      </div>
      <div className="flex gap-3">
        <section className="flex flex-col gap-3 w-1/2 py-4">
          <Input placeholder="Rp. 10,0000" />
          <Button variant="destructive">Bayar</Button>
        </section>
        <section className="flex flex-wrap gap-3 text-slate-600 text-xs w-1/2 py-4">
          <Button variant="outline" className="p-4">
            Rp10.000
          </Button>
          <Button variant="outline" className="p-4">
            Rp20.000
          </Button>
          <Button variant="outline" className="p-4">
            Rp50.000
          </Button>
          <Button variant="outline" className="p-4">
            Rp100.000
          </Button>
          <Button variant="outline" className="p-4">
            Rp250.000
          </Button>
          <Button variant="outline" className="p-4">
            Rp500.000
          </Button>
        </section>
      </div>
    </div>
  );
}
