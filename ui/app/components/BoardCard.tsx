"use client"
import BoardButtons from "./BoardButtons";

type Props = {
    name: string
}

export default function BoardCard({ name }: Props) {
    function addEvent() {
        alert("ADD")
    }

    function deleteEvent() {
        alert("DELETE")
    }

    return (
        <div className="bg-slate-300 flex w-fit py-3 px-2 rounded-xl">
            <div className="flex items-center">
                <h1 className="text-xl mr-3">{ name }</h1>
                <BoardButtons addEvent={addEvent} deleteEvent={deleteEvent} />
            </div>
        </div>
    )
}