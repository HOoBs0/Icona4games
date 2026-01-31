import { Suspense } from "react"
import Loading from "./loading"
import Windows from "../../components/windows"
export default function Games() {
    return (
        <div>
            <h2 className="text-black text-lg lg:text-2xl secondary_bg w-fit p-2 m-auto shadow_box">قائمة الإلعاب لتحميل بسهولة </h2>
            <Suspense fallback={<Loading />}>
                <Windows />
            </Suspense>

        </div>

    )
}