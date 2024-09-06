"use client";

import { usePathname, useSearchParams } from "next/navigation";

export default function Cart() {
    const pathName = usePathname();  // client component hook
    const searchParams = useSearchParams();
    console.log(pathName);
    console.log("search = ", searchParams.get("search"));
    console.log("randomvalue = ", searchParams.get("randomvalue"));
    return <h1>This is a Cart Component</h1>
}