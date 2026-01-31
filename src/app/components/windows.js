import Image from "next/image"
import Link from "next/link"

export default async function Windows() {
    const data = await fetch('https://697e3ecb97386252a26a3f45.mockapi.io/db/games')
    const games = await data.json()
    return (
        <div>
            <h3 className="font-bold text-black mt-12 mb-2">الإلعاب الكمبيوتر:.</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center">
                {
                    games.map((i) => {
                        return (
                            <Link href={"/pages/games/" + i.name} key={i.id} className="card secondary_bg w-80 lg:w-full shadow_box rounded-none text-black">
                                <figure>
                                    <Image
                                        src={i.poster}
                                        alt={i.keywords}
                                        width={720}
                                        height={720}
                                        className="w-full h-80"
                                        
                                        />
                                </figure>
                                <div className="card-body text-center">
                                    <h3 className="text-sm font-bold truncate">
                                        لعبة {i.name}
                                    </h3>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}
