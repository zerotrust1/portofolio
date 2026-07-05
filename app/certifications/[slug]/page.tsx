import React from "react";
import Link from "next/link";
import { certGroups } from "../../../data/certGroups";
import CertGroupClient from "./CertGroupClient";

export function generateStaticParams() {
  return certGroups.map((group) => ({
    slug: group.slug,
  }));
}

export default async function CertGroupPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const group = certGroups.find((g) => g.slug === slug);

  if (!group) {
    return (
      <div className="flex flex-col min-h-screen bg-white dark:bg-black font-sans items-center justify-center">
        <h1 className="text-2xl font-bold text-black dark:text-white mb-4">Group not found</h1>
        <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return <CertGroupClient group={group} />;
}
