"use server"

import {db} from "@/lib/db";

export async  function onCreateNodeEdges(
    flowId : string,
    nodes : string,
    edges : string,
    flowPath: string
){
    const flow = await db.workflows.update({
        where : {
            id : flowId
        },
        data : {
            nodes,
            edges,
            flowPath
        }
    })

    if(flow){
        return { message : "Flow saved"}
    }
}

export async function onFlowPublish(workflowId : string,state : boolean){
    const published = await db.workflows.update({
        where : {
            id : workflowId
        },
        data : {
            publish : state
        }
    })

    if(published.publish) return "Workflow published"

    return "Workflow unpublished"
}