import Link from "next/link";

export default function Navbar() {
    return (
        <div className="navbar secondary_bg border-2 border-r-0 border-l-0 text-black font-bold shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content secondary_bg border-2 text-black font-bold z-1 mt-3 w-52 p-2 shadow">
                        <li><Link href={"/"} className="link link-hover"><i className="fa-solid fa-house ml-1"></i>الرئيسية</Link></li>
                        <li><Link href={"/pages/games"} className="link link-hover"><i className="fa-solid fa-gamepad ml-1"></i>الإلعاب</Link></li>

                    </ul>
                </div>
                <Link href={"/"} className="btn btn-ghost text-xl"><img src="https://cdn-icons-png.flaticon.com/128/742/742263.png" className="w-8" alt="موقع أيقونة لتحميل الإلعاب " />أيقونة</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal space-x-6">
                    <li><Link href={"/"} className="link link-hover"><i className="fa-solid fa-house ml-1"></i>الرئيسية</Link></li>
                    <li><Link href={"/pages/games"} className="link link-hover"><i className="fa-solid fa-gamepad ml-1"></i>الإلعاب</Link></li>

                </ul>
            </div>
        </div>
    )
}