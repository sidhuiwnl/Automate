"use client"

import {Dispatch,createContext,useContext,useEffect,useReducer} from "react";
import {EditorNodeType,EditorActions} from "@/lib/types";


export type EditorNode = EditorNodeType;

export type Editor = {         // A editor may contain different elements and edges and the currently sellected node
    elements : EditorNode[];
    edges : {
        id : string
        source : string
        target : string
    }[]
    selectedNode : EditorNodeType;
}


export type HistoryState = {      // this stores the all the previous editor nodes and the point to the current index
    history : Editor[];
    currentIndex : number;
}

export type EditorState = {   //  current editor state contains the editor and the history state
    editor : Editor;
    historyState : HistoryState;
}


const initialEditorState : EditorState["editor"] = {
    elements : [],
    selectedNode : {
        id : "",
        type : "Trigger",
        position : { x : 0, y: 0},
        data : {
            completed : false,
            current : false,
            description : "",
            metadata : "",
            type : "Trigger",
            title : ""
        }
    },
    edges : []
}

const initialHistoryState : HistoryState ={
    history : [initialEditorState],
    currentIndex: 0
}

const initialState : EditorState = {
    editor : initialEditorState,
    historyState : initialHistoryState
}

// useReducer is a function that perfoms the actions(functions) to change the state( not the perfect explanation but to understand)

function editorReducer(state : EditorState = initialState,action : EditorActions) : EditorState{
    switch (action.type) {
        case "REDO":
            if(state.historyState.currentIndex < state.historyState.history.length - 1){
                const nextIndex = state.historyState.currentIndex + 1;
                const nextEditorState = {
                    ...state.historyState.history[nextIndex],
                }
                const redoState = {
                    ...state,
                    editor: nextEditorState,
                    history: {
                        ...state.historyState,
                        currentIndex: nextIndex,
                    },
                }
                return redoState
            }
            return state
        case 'UNDO':
            if (state.historyState.currentIndex > 0) {
                const prevIndex = state.historyState.currentIndex - 1
                const prevEditorState = { ...state.historyState.history[prevIndex] }
                const undoState = {
                    ...state,
                    editor: prevEditorState,
                    history: {
                        ...state.historyState,
                        currentIndex: prevIndex,
                    },
                }
                return undoState
            }
            return state
        case "LOAD_DATA":
            return {
                ...state,
                editor : {
                    ...state.editor,
                    elements : action.payload.elements || initialEditorState.elements,
                    edges : action.payload.edges
                }
            }
        case "SELECTED_ELEMENT":
            return {
                ...state,
                editor : {
                    ...state.editor,
                    selectedNode : action.payload.element
                }
            }
        default:
            return state;
    }
}

export type EditorContextData  = {
    previewMode : boolean
    setPreviewMode : (previewMode : boolean) => void
}

export const EditorContext = createContext<{
    state : EditorState,
    dispatch : Dispatch<EditorActions>,
}>({
    state : initialState,
    dispatch : () => undefined
})

type EditorProps = {
    children : React.ReactNode,
}


function EditorProvider({children}: EditorProps) {
    const [state,dispatch] = useReducer(editorReducer, initialState);

    return(
        <EditorContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            {children}
        </EditorContext.Provider>
    )
}


export function useEditor(){
    const context = useContext(EditorContext);

    if(!context){
        throw new Error("useEditor() must be used within a editor Provider");
    }
    return context;
}

export default EditorProvider;