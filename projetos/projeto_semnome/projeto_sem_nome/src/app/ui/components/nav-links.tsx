"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {name: "Home", href: "/"},
    {name: "Sobre", href: "/sobre"},
    {name: "Posts", href: "/posts"},
];

export default function NavLink() {
    const pathname = usePathname();    
    return (
        <>
            {links.map((link) => {
                return (
                    <li>
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`transition-colors ${pathname === link.href ? "text-blue-500" : "hover:text-blue-600"}`}
                        >
                            {link.name}
                        </Link>
                    </li>
                )
            })}
        </>
    );
}
