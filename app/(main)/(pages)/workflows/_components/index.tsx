import Workflow from "@/app/(main)/(pages)/workflows/_components/workflow";

export default function Workflows(){
    return (
        <div className="relative flex flex-col gap-4">
            <section className="flex flex-col gap-4 p-6">
                <Workflow
                    name="Automata"
                    description="Automata the things"
                    id="dad1131adasdad"
                    publish={false}
                    />
            </section>
        </div>
    )
}