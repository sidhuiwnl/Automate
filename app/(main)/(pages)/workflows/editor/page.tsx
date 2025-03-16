type Props = {
    params : Promise<{ editorId : string }>
}

export default async function Page({ params} : Props){

    const { editorId } = await params;

    if(!editorId){

    }
    return (
        <div>
            {editorId}
        </div>
    )
}