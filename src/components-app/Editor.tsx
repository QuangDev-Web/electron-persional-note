import React from "react";
import EditorjsTemplate from "./EditorjsTemplate";
import { ScrollArea } from "../components/ui/scroll-area";

export default React.memo((props: any) => {
    const handle_change = React.useCallback((api: any, event: any) => {
        console.log("api: ", api);
    }, []);
    return (
        <ScrollArea className="h-[calc(100%-40px)]">
            <EditorjsTemplate onChange={handle_change} />
        </ScrollArea>
    )
})