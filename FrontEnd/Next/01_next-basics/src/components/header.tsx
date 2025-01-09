'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    {
        href: "/",
        label: "Home"
    },
    {
        href: "/posts",
        label: "Posts"
    },
    {
        href: "/create-post",
        label: "Create Post"
    }
]

export default function Header() {
    const pathName = usePathname();
    return (
        <header className="flex justify-between items-center py-4 px-7 border-b">
            <Link href="/">
                <Image
                    src="https://bytegrad.com/course-assets/youtube/example-logo.png"
                    alt="logo"
                    className="min-h-[35px] min-w-[35px] object-contain"
                    width={35}
                    height={35}
                />
            </Link>
            <nav>
                <ul className="flex gap-x-5 text-[14px">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link className={`text-zinc-400 hover:bg-zinc-700 hover:text-zinc-100 px-3 py-2 rounded
                                ${pathName === link.href ? "bg-zinc-700 text-zinc-100" : ""}
                                `} href={link.href}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}
