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
                    <li key={link.href}>
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`transition-colors ${pathname === link.href ? "text-blue-800" : "hover:text-blue-800"}`}
                        >
                            {link.name}
                        </Link>
                    </li>
                )
            })}
        </>
    );
}
