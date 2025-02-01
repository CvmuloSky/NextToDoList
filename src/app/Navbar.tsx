"use client";

import Link from "next/link";
import React from "react";

export default function Navbar() {
    return (
        <header className="w-full bg-blue-500 text-white shadow-md fixed top-0 left-0 z-10">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <h1 className="text-xl font-bold">To Do List</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/about" className="hover:underline">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/team" className="hover:underline">
                                Team
                            </Link>
                        </li>
                        <li>
                            <Link href="/login" className="hover:underline">
                                Login
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
