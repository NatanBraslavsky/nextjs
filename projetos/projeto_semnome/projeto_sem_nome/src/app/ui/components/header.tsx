import NavLink from "./nav-links"

export default function Header(){
    return(
        <header className="container m-auto">
            <nav className="py-4 flex justify-between">
                <div className="text-gray-500 font-medium pl-3">LogoHeader</div>
                <ul className="flex justify-end text-1xl font-normal gap-8 text-gray-500 pr-3">
                    <NavLink/>
                </ul>
            </nav>
        </header>
    )
}