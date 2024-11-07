"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.push("/products");
      }}
    >
      products
    </button>
  );
}
