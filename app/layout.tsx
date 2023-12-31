import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getServerSession } from "next-auth";
import Link from "next/link";
import Logout from "./components/logout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  console.log({ session });

  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>{session && <Logout />}</nav>
        <nav>{!session && <Link href="/login"> Login </Link>}</nav>
        {children}
      </body>
    </html>
  );
}
