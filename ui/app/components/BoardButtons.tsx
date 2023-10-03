'use client'
type Props = {
    addEvent: () => void;
    deleteEvent: () => void;
}

export default function BoardButtons({ addEvent, deleteEvent }: Props) {
    const emitAddEvent = () => {
        addEvent();
    }

    const emitDeleteEvent = () => {
        deleteEvent();
    }

    return (
        <>
        <button onClick={emitAddEvent} className="p-1 bg-blue-500 text-white m-1 rounded">Add</button>
        <button onClick={emitDeleteEvent} className="p-1 bg-red-500 text-white m-1 rounded">Delete</button>
        </>
    )
}