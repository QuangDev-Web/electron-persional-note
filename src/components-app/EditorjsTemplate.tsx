import React from "react";
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Link from '@editorjs/link';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import CheckList from '@editorjs/checklist';
import List from '@editorjs/list';
import Quote from '@editorjs/quote';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Marker from '@editorjs/marker';

export default React.memo((props: any) => {
    const darkEditor =
        "dark:[&::selection]:bg-[oklch(37.4%_0.01_67.558)!important] \
        dark:[&::selection]:text-white \
        dark:[& svg_path,svg_line,svg_rect]:stroke-[#ddd!important] \
        dark:[& .ce-popover-item]:text-[white!important] \
        dark:[& .ce-popover-item:hover]:bg-[oklch(37.4%_0.01_67.558)!important] \
        dark:[& .cdx-search-field]:bg-[oklch(37.4%_0.01_67.558)!important] \
        dark:[& [class*=container]]:bg-[oklch(21.6%_0.006_56.043)!important] \
        dark:[& [class*=container]]:border-transparent \
        dark:[& [class*=container]::-webkit-scrollbar]:hidden \
        dark:[& [class*=plus]:hover]:bg-[oklch(37.4%_0.01_67.558)!important]";
    React.useEffect(() => {
        const editor = new EditorJS({
            holder: 'editorjs-container',
            tools: {
                header: Header,
                link: Link,
                checklist: CheckList,
                list: List,
                quote: Quote,
                marker: Marker,
            },
            onChange(api, event) {
                props.onChange(api, event)
            },
        });

    }, [])

    return (
        <div
            id="editorjs-container"
            className={`p-4 h-full ${darkEditor}`}
        >
        </div>
    )
})
