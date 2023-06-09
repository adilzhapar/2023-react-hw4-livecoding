import Link from "next/link";

export default function Home() {
    const cards = [
        {"title": "Characters", "link": "/characters"},
        {"title": "Locations", "link": "/locations"},
        {"title": "Episodes", "link": "/episodes"},
    ]

    return <div className="flex min-h-screen">
        <main className="flex-grow flex items-center justify-center">
            <div className="flex gap-4">
                {
                    cards.map((card, index) => (
                        <Link key={index} href={card.link}>
                            <div className="card bg-slate-50 w-72 h-96 flex items-center justify-center">
                                <h2 className="text-xl font-bold text-black">{card.title}</h2>
                            </div>
                        </Link>
                    )
                )}
            </div>
        </main>
    </div>;
}
