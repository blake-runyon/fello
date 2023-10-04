"use client"

import { useEffect, useState } from "react";
import BoardItem from "../interfaces/BoardItem"

type Props = {
    items: BoardItem[],
    onSelect: (arg0: BoardItem | undefined) => void
}

export default function BoardItems({ items, onSelect }: Props) {
    const [selected, setSelected] = useState<BoardItem>();
    const [prev, setPrev] = useState<any>();

    useEffect(() => {
        onSelect(selected);
    }, [selected])

    function setItem(i: BoardItem) {
        if(selected === i) {
            setSelected(undefined);
        } else {
            setSelected(i);
        }   
    }

    const toggleActive = (event: any) => {
        // 👇️ toggle class on click
        event.currentTarget.classList.toggle('bg-blue-300');
    
        // 👇️ add class on click
        // event.currentTarget.classList.add('bg-salmon');
    
        // 👇️ remove class on click
        // event.currentTarget.classList.remove('bg-salmon');
      };

    return (
        <div className="w-auto h-52 overflow-visible overflow-x-auto overscroll-contain hover:cursor-pointer">
        {
            items.map((i: BoardItem) => (
                <div key={i.id} className="bg-slate-200 my-2 rounded px-2" onClick={(e: any) => { setItem(i); toggleActive(e); }}>
                    <h1 className="text-xl bold">{ i.title }</h1>
                    <p>{ i.description }</p>
                </div>
            ))
        }
        </div>
    )
}