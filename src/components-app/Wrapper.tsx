import React from "react"
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "../components/ui/resizable"
import { WindowButtons } from "../assets/SharedComponents"
import Editor from "./Editor"
import { useMainStateStore } from "../shared/zust-store"
import { EmptyNoteEditor } from "./EmptyNoteEditor"

// Component này sẽ không bị render lại nếu props không thay đổi (Memo)
export default React.memo((props: any) => {
    const active_note = useMainStateStore(state => state.active_note)
    // const handle_create_new_note = React.useCallback(() => {
    //     const dummy_data = {
    //         id: null as any,
    //         note: '',
    //         title: 
    //     };
    // }, [])
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
                        {
                            !window.navigator.userAgent.toLowerCase().includes('mac') && <WindowButtons />
                        }
                    </div>
                    {
                        active_note === null ? <EmptyNoteEditor onClick={() => { return }} /> : <Editor />
                    }
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    )
})