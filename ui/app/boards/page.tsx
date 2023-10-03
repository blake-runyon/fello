import Link from "next/link"

export default function Boards() {
    const ids = [1, 2, 3, 4, 5, 6]

    return (
        <>
        <h1>Board View</h1>
        {
            ids.map((i) => (
                <Link key={i} href={`/boards/${i}`}>{ i.toString() }</Link>
            ))
        }
        </>
    )
}