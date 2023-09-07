// "use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userLoginValidation } from "@/lib/userLoginValidation";

type Inputs = {
  email: string;
  password: string;
};

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(userLoginValidation),
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const router = useRouter();
  // const handleSubmit = (event: any) => {
  //   event.preventDefault();
  //   router.push("/home");
  //   console.log("submited");
  // };
  return (
    <>
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
      <div className="w-8/12">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" my-10 flex flex-col gap-4"
        >
          <div className="flex flex-col gap-1">
            <Input
              type="email"
              id="email"
              placeholder="Masukkan email anda"
              className={errors.email ? `border-red-500` : ``}
              {...register}
            />
            {errors.email && (
              <div className="text-xs text-redNutech">
                {errors.email?.message}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <Input
              type="password"
              id="password"
              className={errors.password ? `border-red-500` : ``}
              placeholder="Masukkan password anda"
            />
            {errors.password && (
              <div className="text-xs text-redNutech">
                {errors.password?.message}
              </div>
            )}
          </div>
          <Button type="submit" variant="destructive">
            Masuk
          </Button>
        </form>
      </div>
    </>
  );
}
