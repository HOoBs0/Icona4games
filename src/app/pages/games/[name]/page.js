import Loading from "@/app/loading"
import Image from "next/image"
import { Suspense } from "react"

async function getData(name) {
    const data = await fetch('https://hoobs0.github.io/games-json_file/db.json?name=' + name)
    const game = await data.json()

    return game[0]
}

export async function generateMetadata({ params }) {
    const { name } = await params
    const game = await getData(name)

    return {
        title: "تحميل لعبة " + game.name + "مجانًا " + "| موقع أيقونة",
        description: game.story
    }
}

export default async function Game({ params }) {

    const { name } = await params
    const game = await getData(name)

    return (
        <div className="secondary_bg shadow_box p-2 text-black grid grid-cols-1 lg:grid-cols-3 gap-12">
            <Suspense fallback={<Loading />}>


                <h1 className="text-black text-lg lg:text-2xl lg:col-span-3">تحميل لعبة {game.name} برابط مباشر مجانًا.</h1>
                <div className="lg:col-span-2 space-y-2">
                    <h2 className="font-bold">معرض اللعبة:.</h2>

                    <div className="md:flex carousel w-full justify-self-end" style={{ height: "400px" }}>
                        {
                            game.images.map((i) => {
                                return (
                                    <div key={i.id} className="carousel-item w-full">
                                        <Image
                                            width={720}
                                            height={720}
                                            src={i.url}
                                            className="w-full"
                                            alt={game.keywords} />
                                    </div>
                                )
                            })
                        }

                    </div>
                    <h2 className="font-bold">حكاية لعبة {game.name}:.</h2>
                    <p>{game.story}</p>
                    <h2 className="font-bold">كلمات مفتاحية عن لعبة {game.name}:.</h2>
                    {
                        game.keywords.map((i) => {
                            return (
                                <p key={i} className="inline">{i} , </p>
                            )
                        })
                    }
                </div>

                <div className="space-y-2">
                    <h2 className="font-bold">تنزيل لعبة {game.name}:.</h2>
                    <div className="p-2 bg-white">
                        <a target="_blank" href={game.url} download={game.name} className="btn four_comp_bg text-white rounded-none border-0 w-full">تنزيل برابط مباشر<i className="fa-solid fa-cloud-arrow-down mr-1"></i></a>
                        <div className="divider divider-neutral">ملاحظات</div>
                        <ul className="red space-y-2">
                            <li><p><i className="fa-solid fa-check"></i>بحجم {game.size} جيجا بايت.</p></li>
                            <li><p><i className="fa-solid fa-check"></i>بلا الفيروسات.</p></li>
                            <li><p><i className="fa-solid fa-check"></i>اللعبة كاملة.</p></li>
                        </ul>

                    </div>
                    <a  href="https://t.me/icona4games" target="_blank" className="btn primary_comp_bg text-white rounded-none border-0 w-full">
                        <i className="fa-solid fa-paper-plane"></i>
                        تابعنا علي تيليجرام
                    </a>
                </div>
            </Suspense>
        </div>
    )
}