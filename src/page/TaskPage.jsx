import { useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
    const [searchParams] = useSearchParams();
    const title = searchParams.get('title');
    const description = searchParams.get('description');
    const isCompleted = searchParams.get('status');

    let status = false;

    if (isCompleted === "true") {
        status = true
    }

    return (
        <div className='w-screen min-h-screen bg-slate-500 flex justify-center p-6'>
            <div className='w-[500px] space-y-4'>
                <Title>Detalhes da Tarefa</Title>
                <div className="w-full rounded-md p-6 flex justify-center flex-col bg-slate-100 ">
                    <h1 className="text-2xl text-slate-600 font-semibold">{title}</h1>
                    <h1>{description}</h1>
                    <h1 className={`${status ? 'bg-green-300' : 'bg-red-300'} w-fit px-2 py-1 mt-2 font-semibold`} >{status ? "Status: Tarefa Concluída!" : "Status: Tarefa não concluída!"}</h1>
                </div>
            </div>
        </div>
    )
}

export default TaskPage;