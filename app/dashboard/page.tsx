"use client";
import Link from "next/link";
export default function DashboardPage() {
  return (
    <div>
      <Link href="/">Home</Link>
      <div>private dashboard page - you need to be logged in to view this</div>
    </div>
  );
}
