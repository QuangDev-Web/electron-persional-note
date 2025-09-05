import { Plus } from "lucide-react";
import { Button } from "../components/ui/Button";
import React from "react";

// eslint-disable-next-line @typescript-eslint/ban-types
export const EmptyNoteEditor = (props: { onClick: Function }) => {
    return (
        <div className="w-[100%] h-[100%] flex justify-center items-center">
            <Button
                className="bg-transparent [&:hover]:bg-slate-200 text-stone-800 dark:text-stone-300"
                onClick={() => props.onClick()}
            >
                <Plus className="w-[25px] h-[25px]" />New note
            </Button>
        </div>
    )
}