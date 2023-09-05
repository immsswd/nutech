
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Button } from "./ui/button";

export function Login() {
  return (
    <>
      {/* logo and system's name */}

      <div className="flex justify-center items-center space-x-4">
        <section>
          <Image
            src={`/img/assets/Logo.png`}
            width={32}
            height={32}
            alt="logo"
          />
        </section>
        <h1 className="font-semibold text-sm">SIMS PPOB</h1>
      </div>
      <h1 className="text-lg font-semibold">
        Masuk atau buat akun untuk memulai{" "}
      </h1>
      {/* Form Login*/}
      <div className="w w-8/12 my-10 flex flex-col gap-4">
        <Input type="email" placeholder="Masukkan email anda" />
        <Input type="password" placeholder="Masukkan password anda" />
        <Button variant="destructive">Masuk</Button>
      </div>
    </>
  );
}
