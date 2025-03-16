import EditorProvider from "@/providers/editor-provider";
import {ConnectionsProvider} from "@/providers/connections-provider";
import EditorCanvas from "@/app/(main)/(pages)/workflows/editor/[editorId]/_components/editor-canvas";

export default function Page(){
    return(
        <div className="h-full">
            <EditorProvider>
                <ConnectionsProvider>
                  <EditorCanvas/>
                </ConnectionsProvider>
            </EditorProvider>
        </div>
    )
}