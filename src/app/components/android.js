export default async function Android() {
    const data = await fetch('http://localhost:3000/android')
    const games = await data.json()
    return (
        <div>
            <h3 className="font-bold text-black mt-12 mb-2">الإلعاب الأندرويد:.</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center">
                {
                    games.map((i) => {
                        return (
                            <div key={i.id} className="card secondary_bg w-full shadow_box rounded-none text-black">
                                <figure>
                                    <img
                                        src="https://cdn-bgp.bluestacks.com/BGP/ar/gametiles_com.rockstargames.gtasa.jpg"
                                        alt="Game"
                                        className="h-80 w-full" />
                                </figure>
                                <div className="card-body text-center">
                                    <h3 className="text-sm font-bold truncate">
                                        لعبة {i.name}
                                    </h3>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}