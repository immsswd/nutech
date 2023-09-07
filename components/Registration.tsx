import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Button } from "./ui/button";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userRegisterSchema } from "@/lib/userRegistValidation";

type Inputs = {
  email: string;
  namaDepan: string;
  namaBelakang: string;
  password: string;
  passwordKonfirmasi: string;
};

const formLabel = [
  {
    name: "email",
    placeholder: "Masukkan email anda",
    // type: "text",
    id: "email",
  },
  {
    name: "namaDepan",
    placeholder: "Nama depan",
    // type: "text",
    id: "namaDepan",
  },
  {
    name: "namaBelakang",
    placeholder: "Nama belakang",
    // type: "text",
    id: "namaBelakang",
  },
  {
    name: "password",
    placeholder: "Buat password",
    // type: "password",
    id: "password",
  },
  {
    name: "passwordKonfirmasi",
    placeholder: "Konfirmasi password",
    // type: "password",
    id: "passwordKonfirmasi",
  },
];

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<Inputs>({
    defaultValues: {
      email: "",
      namaDepan: "",
      namaBelakang: "",
      password: "",
      passwordKonfirmasi: "",
    },
    resolver: zodResolver(userRegisterSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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
      <div className="w-8/12 ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="my-10 flex flex-col gap-4"
        >
          <div className="flex flex-col">
            <Input
              type="email"
              id="email"
              {...register("email")}
              placeholder="Masukkan email anda"
              disabled={isSubmitting}
              className={
                errors.email?.message ? `border-red-400 ring-red-500` : ""
              }
            />
            {errors.email?.message && (
              <div className="text-xs items-end py-1 text-red-600">
                {errors.email?.message}
              </div>
            )}
          </div>
          <div>
            <Input
              type="text"
              id="namaDepan"
              {...register("namaDepan")}
              placeholder="Nama depan"
              className={
                errors.namaDepan?.message ? `border-red-400 ring-red-500` : ""
              }
            />
            {errors.namaDepan?.message && (
              <div className="text-xs items-end py-1 text-red-600">
                {errors.namaDepan?.message}
              </div>
            )}
          </div>
          <Input
            type="text"
            id="namaBelakang"
            {...register("namaBelakang")}
            placeholder="Nama belakang"
          />
          <div>
            <Input
              type="password"
              id="password"
              {...register("password")}
              placeholder="Password"
              className={
                errors.passwordKonfirmasi?.message
                  ? `border-red-400 ring-red-500`
                  : ""
              }
            />
            {errors.password?.message && (
              <div className="text-xs items-end py-1 text-red-600">
                {errors.password?.message}
              </div>
            )}
          </div>
          <Input
            type="password"
            id="passwordKonfirmasi"
            {...register("passwordKonfirmasi")}
            placeholder="Password Konfirmasi"
          />
          {errors.passwordKonfirmasi?.message && (
            <div className="text-xs items-end py-1 text-red-600">
              {errors.passwordKonfirmasi?.message}
            </div>
          )}
          {/* {formLabel.map((formLabel, index) => (
            <Input
              key={index + ""}
              type={formLabel.name === "email" ? "email" : "text"}
              {...formLabel}
              {...register(formLabel.name)}
            />
          ))} */}

          <Button variant="destructive" disabled={isSubmitting}>
            Registrasi
          </Button>
        </form>
        <pre className="hidden p-2 bg-slate-200 rounded-md text-sm">
          {JSON.stringify(watch(), null, 2)}
        </pre>
      </div>
    </>
  );
}
