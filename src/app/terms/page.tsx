"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function TermsPage() {
  const router = useRouter();

  // This is a fallback to redirect to home if client-side navigation doesn't work
  useEffect(() => {
    router.push("/");
  }, [router]);

  return null;
} 