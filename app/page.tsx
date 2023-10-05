import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();
  return (
    <div>
      <div className="font-bold text-lg">Next Auth</div>
      <Link href="/dashboard">Dashboard</Link>
      <div>{JSON.stringify(session)}</div>
    </div>
  );
}
