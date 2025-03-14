import WorkflowButton from "@/app/(main)/(pages)/workflows/_components/workflow-button";
import Workflows from "@/app/(main)/(pages)/workflows/_components";

export default function Page(){
    return (
        <div className="flex flex-col gap-4 relative">
            <h1 className="sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 p-6 text-2xl backdrop-blur-lg">
                Workflows
                <WorkflowButton/>
            </h1>
            <Workflows/>
        </div>
    )
}