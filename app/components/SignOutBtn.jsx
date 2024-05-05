"use client";

import { signOut } from "next-auth/react";

export default function SignOutBtn() {
    return (
        <button className="text-white rounded-lg bg-purple-950 p-2" onClick={() => signOut()}>Sign out</button>
    );
}