
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Button } from "./ui/button";

const formLabel = [
  { placeholder: "Masukkan email anda", type: "email" },
  { placeholder: "Nama depan", type: "" },
  { placeholder: "Nama belakang", type: "" },
  { placeholder: "Buat password", type: "password" },
  { placeholder: "Konfirmasi password", type: "password" },
];

export default function RegistrationForm() {
  return (
    <>
      <div className="flex flex-row justify-center items-center space-x-4">
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
      <h1 className="text-lg max-w-2xl font-semibold">
        Lengkapi data untuk membuat akun
      </h1>
      {/* Form Login*/}
      <div className="w w-8/12 my-10 flex flex-col gap-4">
        {formLabel.map((formLabel, index) => (
          <Input key={index + ""} {...formLabel} />
        ))}

        <Button variant="destructive">Registrasi</Button>
      </div>
    </>
  );
}
