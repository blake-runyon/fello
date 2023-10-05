import ToastContent from "@/app/interfaces/ToastContent"
import { createContext } from "react"

export default function ToastContainer() {
    const toastContext = createContext<ToastContent | undefined>(undefined);
    return (
        <div>

        </div>
    )
}