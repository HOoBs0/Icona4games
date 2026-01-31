import { Suspense } from "react";
import Windows from "./components/windows";
import Link from "next/link";
import Image from "next/image";
import Loading from "./components/loading";

export default function Home() {
  return (
    <div>
      <h1 className="text-black text-lg lg:text-2xl secondary_bg w-fit p-2 m-auto shadow_box">أفضل موقع لتحميل الإلعاب القديمة مجانًا.</h1>
      <div className="text-black text-2xl grid grid-cols-1  md:grid-cols-2 gap-12 items-center mt-12 mb-12">

        <div className="md:flex carousel shadow_box w-full" style={{ height: "400px" }}>
          <div className="carousel-item w-full">
            <Image
              height={720}
              width={1080}
              src="https://ik.imagekit.io/ctux3iaei/Games/1-gta%20vice%20city.webp?updatedAt=1769867870547"
              className="w-full"
              alt="gta vaisiti , gta vice city , gta_vc,gtavc" />
          </div>
          <div className="carousel-item w-full">
            <Image
              height={720}
              width={1080}
              src="https://ik.imagekit.io/ctux3iaei/Games/2-gta%20san%20andreas.webp"
              className="w-full"
              alt="gta san andreas" />
          </div>
          <div className="carousel-item w-full">
            <Image
              height={720}
              width={1080}
              src="https://ik.imagekit.io/ctux3iaei/Games/2-medal%20of%20honor%20allied%20assault.webp?updatedAt=1769867868836"
              className="w-full"
              alt="medal of honor allied assault" />
          </div>
        </div>

        <div className="text-center md:text-right md:justify-self-end">
          <div className="max-w-md md:m-0 m-auto">
            <h2 className="text-4xl font-bold">حمل الان</h2>
            <p className="py-6 text-2xl">
              من موقع أيقونة أشهر مواقع العربية لتحميل الإلعاب القديمة المميزة و المشهورة مجانًا بحجم صغير جدًا عن طريق الروابط المباشرة ومن أشهر تلك الإلعاب علي سبيل المثال لعبة Gta San adreas وغيرها.
            </p>
            <Link href={"/pages/games"} className="btn four_comp_bg text-white rounded-none border-0 shadow_box">أبحث الأن<i className="fa-solid fa-magnifying-glass ml-1"></i></Link>
          </div>
        </div>

      </div>
      <h2 className="text-black text-lg lg:text-2xl secondary_bg w-fit p-2 m-auto shadow_box">قائمة الإلعاب لتحميل بسهولة </h2>
      <Suspense fallback={<Loading />}>
        <Windows />
      </Suspense>
      
    </div>
  );
}
