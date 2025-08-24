import NavLink from "./nav-links"

export default function Header(){
    return(
        <header className="container m-auto">
            <nav className="py-4 flex justify-between items-center">
                <div className="text-gray-500 font-medium pl-3">LogoHeader</div>
                <ul className="flex items-center justify-end text-1xl font-normal gap-8 text-gray-500 pr-3">
                    <NavLink/>
                    <li className="bg-blue-500 py-2.5 px-4 text-white rounded-[5px] hover:cursor-pointer">Login</li>
                </ul>
            </nav>
        </header>
    )
}