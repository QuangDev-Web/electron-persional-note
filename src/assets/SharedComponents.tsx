import React from 'react';
import { Maximize, Minus, X } from 'lucide-react';

export const WindowButtons = React.memo((props: any) => {
    return (
        <div className="window-buttons flex">
            <div
                className="p-2 flex justify-center items-center hover:bg-[#e7e5e4] dark:hover:bg-[#1c1917]"
                onClick={() => window.electron.minimizeApp()}
            >
                <Minus className="w-[20px] h-[20px] text-black dark:text-[#e7e5e4]" />
            </div>
            <div
                className="p-2 flex justify-center items-center hover:bg-[#e7e5e4] dark:hover:bg-[#1c1917]"
                onClick={() => window.electron.maximizeApp()}
            >
                <Maximize className="w-[20px] h-[20px] text-black dark:text-[#e7e5e4]" />
            </div>
            <div
                className="p-2 flex justify-center items-center hover:bg-[#e7e5e4] dark:hover:bg-[#1c1917]"
                onClick={() => window.electron.close()}
            >
                <X className="w-[20px] h-[20px] text-black dark:text-[#e7e5e4]" />
            </div>
        </div>
    )
})