import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "موقع أيقونة | لتحميل الإلعاب مجانًا",
  description: "موقع أيقونة أشهر مواقع العربية لتحميل الإلعاب القديمة المميزة و المشهورة مجانًا بحجم صغير جدًا عن طريق الروابط المباشرة ومن أشهر تلك الإلعاب علي سبيل المثال لعبة Gta San adreas وغيرها.",
  icons:{
    icon:"https://cdn-icons-png.flaticon.com/128/742/742263.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4664146281278444"
     crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className="p-6 md:p-12">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
