import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer footer-horizontal footer-center secondary_bg border-2 border-r-0 border-l-0 text-black font-bold shadow-sm p-10">
            <nav className="grid grid-flow-col space-x-6 gap-4">
                <Link href={"/"} className="link link-hover"><i className="fa-solid fa-house ml-1"></i>الرئيسية</Link>
                <Link href={"/pages/games"} className="link link-hover"><i className="fa-solid fa-gamepad ml-1"></i>الإلعاب</Link>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://t.me/icona4games" target="_blank">
                        <i className="fa-solid fa-paper-plane ml-2"></i>
                        قناة أيقونة تيليجرام
                    </a>
                </div>
            </nav>
            <aside>
                <p>حقوق الطبع والنشر © {new Date().getFullYear()} - جميع الحقوق محفوظة لـ <Link className="red" href={"/pages/copyRight"}>موقع أيقونة</Link>.</p>
            </aside>
        </footer>
    )
}