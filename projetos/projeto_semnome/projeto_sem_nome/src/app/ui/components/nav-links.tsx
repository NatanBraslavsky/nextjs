import { ReactNode } from "react";
import Link from "next/link";

interface NavLinkProps {
    href: string;
    children: ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps){
    return(
        <Link href={href} className="hover:text-gray-800">{children}</Link>
    )
}