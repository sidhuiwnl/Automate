"use client"

import {Handle, HandleProps, useStore} from "@xyflow/react";
import {CSSProperties} from "react";
import {useEditor} from "@/providers/editor-provider";

type Props = HandleProps & { style? : CSSProperties};


function selector(s : any){
    return {
        nodeInternals : s.nodeInternals,
        edges : s.edges
    }
}

export default function CustomHandle(props: Props) {
    const { state } = useEditor();


    return (
        <Handle {...props}
                isValidConnection={(e) => {
                    const sourcesFromHandleInState = state.editor.edges.filter(
                        (edge) => edge.source === e.source
                    ).length
                    const sourceNode = state.editor.elements.find(
                        (node) => node.id === e.source
                    )
                    //target
                    const targetFromHandleInState = state.editor.edges.filter(
                        (edge) => edge.target === e.target
                    ).length

                    if (targetFromHandleInState === 1) return false
                    if (sourceNode?.type === 'Condition') return true
                    if (sourcesFromHandleInState < 1) return true
                    return false
                }}
                className="!-bottom-2 !h-4 !w-4 dark:bg-neutral-800"
        />
    )
}