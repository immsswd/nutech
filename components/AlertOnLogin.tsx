import { RocketIcon } from "@radix-ui/react-icons";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Link from "next/link";

export function AlertOnLogin() {
  return (
    <Alert>
      <RocketIcon className="h-4 w-4" />
      <AlertTitle className="animate-pulse text-orange-600">Info</AlertTitle>
      <AlertDescription className="text-xs text-orange-500">
        Aplikasi masih belum terkoneksi dengan{" "}
        <Link
          target="__blank"
          className="underline"
          href={`https://api-doc-tht.nutech-integrasi.app/`}
        >
          API
        </Link>{" "}
        yang sudah disediakan, sejauh ini proses login dilakukan{" "}
        <pre className="inline font-bold">random email</pre> dan{" "}
        <pre className="inline font-bold">random password</pre> namun tetap ada
        validasi jika form input kosong.
      </AlertDescription>
    </Alert>
  );
}
