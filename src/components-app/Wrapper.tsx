import React from "react"
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "../components/ui/resizable"
import { WindowButtons } from "../assets/SharedComponents"

// Component này sẽ không bị render lại nếu props không thay đổi (Memo)
export default React.memo((props: any) => {
    return (
        <div className="h-[100vh] w-[100%]">
            <ResizablePanelGroup direction="horizontal">
                <ResizablePanel minSize={30} defaultSize={35}>
                    <div
                        className=
                        "h-[40px] w-[100%] border-b-[.5px] dark:border-b-stone-800 border-b-stone-300 flex justify-center app-dragger"
                    >
                    </div>
                </ResizablePanel>

                <ResizableHandle />

                <ResizablePanel minSize={30}>
                    <div
                        className=
                        "h-[40px] w-[100%] border-b-[.5px] dark:border-b-stone-800 border-b-stone-300 flex justify-end app-dragger"
                    >
                        <WindowButtons />
                    </div>
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    )
})