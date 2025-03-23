export default function Page({params}:{params:{pages:string}}){
    const resolvedParams = params;
    return (
        <div>
            <p>param: {resolvedParams.pages}</p>
        </div>
    )
}