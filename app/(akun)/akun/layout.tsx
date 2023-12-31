// import "./../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/app/(beranda)/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "nutech-Imam Siswandi",
  description: "Generated by create next app",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={inter.className}>
      <Navbar />
      <div className={`max-w-[1120px] mx-auto`}>{children}</div>
    </div>
  );
}
