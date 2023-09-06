import Image from "next/image";
import AuthPage from "./authPage";

export default function Home() {
  return (
    // <div className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="flex flex-col-reverse md:flex-row justify-center items-center">
      <div className="w-full md:w-1/2 bg-white">
        <AuthPage />
      </div>
      <div className="w-full md:w-1/2">
        <Image
          src="/img/login_illustration.png"
          width={726}
          height={1024}
          alt="login"
          className="bg-cover bg-no-repeat"
        />
      </div>
    </div>
  );
}
