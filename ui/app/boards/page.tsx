import Link from "next/link"

export default function Boards() {
    const ids = [1, 2, 3, 4, 5, 6]

    return (
        <>
        <h1>Board View</h1>
        <div className="flex">
        {
            ids.map((i) => (
                <Link key={i} className="bg-slate-300 p-2 round mr-3" href={`/boards/${i}`}>{ i.toString() }</Link>
            ))
        }
        </div>
        </>
    )
}