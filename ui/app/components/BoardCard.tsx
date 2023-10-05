"use client"
import { useEffect, useState } from "react";
import BoardItem from "../interfaces/BoardItem";
import BoardButtons from "./BoardButtons";
import BoardItems from "./BoardItems";

type Props = {
    name: string
}

export default function BoardCard({ name }: Props) {
    const cardItems: BoardItem[] = [
        {
            id: 1,
            title: "Item 1",
            description: "Desc 1"
        },
        {
            id: 2,
            title: "Item 2",
            description: "Desc 2"
        },
        {
            id: 3,
            title: "Item 3",
            description: "Desc 3"
        },
    ]

    useEffect(() => {
        setTasks(cardItems);
    }, [])

    const [tasks, setTasks] = useState<BoardItem[]>([]);
    const [selected, setSelected] = useState<BoardItem | undefined>();

    function addEvent() {
    
        let item: BoardItem = {id: tasks ? tasks[tasks.length-1].id+1 : 1, title: `Item ${tasks ? tasks[tasks.length-1].id+1 : 1}`, description: `Desc ${tasks ? tasks[tasks.length-1].id+1 : 1}`};
        setTasks([...tasks, item])
    }

    function DeleteDisplay() {
        return <div>Delete</div>;
      }

    function deleteEvent() {
        if(selected === undefined) {
            alert("Please select an item to delete.")
        } else {
            let filteredTasks = tasks.filter(v => v.id !== selected?.id);
            setTasks(filteredTasks);
            setSelected(undefined);
        }
    }

    return (
        <div className="bg-slate-300 w-fit py-3 px-2 rounded-xl">
            <div className="flex items-center">
                <h1 className="text-xl mr-3">{ name }</h1>
                <BoardButtons addEvent={addEvent} deleteEvent={deleteEvent} />
                <hr />
            </div>

            <BoardItems items={tasks} onSelect={(i: BoardItem | undefined) => { setSelected(i) }} />
        </div>
    )
}