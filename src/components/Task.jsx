import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { Check, ChevronRight, Trash } from "lucide-react"

function Task({ tasks, onTaskClick, onDeleteTaskClick }) {
    const navigate = useNavigate();

    function onSeeDetailsClick(tasks) {
        const query = new URLSearchParams();
        query.set('title', tasks.title);
        query.set('description', tasks.description);
        query.set('status', tasks.isCompleted);

        navigate(`/taskDetails?${query.toString()}`)
    }

    return (
        <div className="w-full rounded-md p-6 flex justify-center flex-col bg-slate-100 space-y-3">
            <ul className="space-y-3">
                {tasks.map((task) => (
                    <li key={task.id} className="flex gap-2">
                        <button onClick={() => onTaskClick(task.id)} className={`w-full flex gap-2 bg-slate-400 text-left p-2 rounded-md text-slate-100 ${task.isCompleted && 'line-through'} ${task.isCompleted && 'opacity-60'}`}>
                            {task.isCompleted && <Check/>}
                            {task.title}
                        </button>

                        <Button onClick={() => onSeeDetailsClick(task)} >
                            <ChevronRight />
                        </Button>

                        <Button onClick={() => onDeleteTaskClick(task.id)}>
                            <Trash />
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Task;