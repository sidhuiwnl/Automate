"use client"

import {Button} from "@/components/ui/button";
import {Plus} from "lucide-react";
import {useModal} from "@/providers/modal-provider";
import CustomModal from "@/components/global/custom-modal";
import WorkflowForm from "@/components/forms/workflow-form";

export default function WorkflowButton(){
    const { setOpen,setClose } = useModal();

    function handleClick(){
        setOpen(
            <CustomModal
                title="Create a workflow automation"
                subheading="Workflows are a powerfull tool that help you automate tasks"
            >
                <WorkflowForm/>
            </CustomModal>
        )
    }
    return(
        <Button
            size={"icon"}
            onClick={handleClick}
        >
            <Plus/>
        </Button>
    )
}