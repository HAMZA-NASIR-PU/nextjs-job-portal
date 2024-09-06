"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

// useRouter -> next/navigation  ==> useRouter is a client component and to use it you have to convert that server component to client component

export default function Home() {

  const router = useRouter();

  console.log(router);

  function handleNavigate() {
    router.push('products');
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      HELLO WORLD

      <Link href={`products`}>Navigate to products page</Link>
      <Link href={`account`}>Navigate to Accounts page</Link>


      {/* <button onClick={handleNavigate}>Navigate to Products Page using useRouter hook</button> */}


    </div>
  );
}
