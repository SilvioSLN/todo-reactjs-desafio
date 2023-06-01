import { PlusCircle } from "@phosphor-icons/react";
import { ChangeEvent, useState, InvalidEvent, FormEvent } from "react";

import style from './style.module.css';
import { FormNewTaskProps } from "../../@types/todo";




export function FormNewTask({ onCreateNewTask } : FormNewTaskProps) {

    const [newTaskText, setNewTaskText] = useState('');

    const handleCreateNewTask = (event : FormEvent) => {
        event.preventDefault()
        onCreateNewTask(event, newTaskText)
        setNewTaskText('')
    }

    const handleNewTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNewTaskText(event.currentTarget.value)
    }

    const handleNewTaskInvalid = (event: InvalidEvent<HTMLInputElement>) => {
        event.target.setCustomValidity('Digite um texto para a tarefa')
    }

    const isNewTaskEmpty = newTaskText.trim().length === 0

  return (
    <form onSubmit={handleCreateNewTask} className={style.formCreateTodo} >
        <input 
          type="text" 
          name="todo" 
          required 
          placeholder="Adicione uma nova tarefa" 
          value={newTaskText} 
          onChange={handleNewTaskChange} 
          onInvalid={handleNewTaskInvalid} />

      <button type="submit" disabled={isNewTaskEmpty} >
        <span>Criar</span>
        <PlusCircle size={18} weight="bold" />
      </button>
      </form>
  )
}