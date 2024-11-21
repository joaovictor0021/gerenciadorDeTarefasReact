import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

function AddTasks({onCreateNewTask}) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const validate = () => {
        if (title !== '' && description !== '') {
            onCreateNewTask(title, description);
            setTitle("");
            setDescription("");
        } else {
            alert("Preencha todos os campos corretamente")
        }
    }

    return (
        <div className="w-full rounded-md p-6 flex justify-center flex-col bg-slate-100 space-y-3">
            <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder={'Digite o título da tarefa'} />

            <Input value={description} onChange={(e) => setDescription(e.target.value)} placeholder={'Digite a descrição da tarefa'} />

            <Button onClick={() => validate()} >Adicionar</Button>
        </div>
    )
}

export default AddTasks;