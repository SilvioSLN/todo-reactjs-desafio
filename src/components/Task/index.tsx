import { CheckCircle, Circle, Trash, FolderMinus } from '@phosphor-icons/react';
import { TaskProps } from "../../@types/todo";

import style from './style.module.css';


export function Task({ task, changeToggleTaskDone, onRemoveTask } : TaskProps) {

    const handleRemoveTask = () => {
        onRemoveTask(task.id)
    }

    const handleToggleTaskDone = () => {
        changeToggleTaskDone(task.id)
    }

    const isTaskChecked = (task.done) ? true : false;

    return (
        <div  className={style.task}>
            <label htmlFor={`task-${task.id}`} className={style.boxTitle}>
                <input type="checkbox" id={`task-${task.id}`} onChange={handleToggleTaskDone} checked={isTaskChecked} /> 
                <div className={style.iconCheck}>
                { task.done ? 
                    <CheckCircle size={20} className={style.checkYes} weight="fill" />  : 
                    <Circle size={20} className={style.checkNo} />  }
                </div>
                <span className={ task.done ? style.checked : '' } >{task.title}</span>
            </label>
            <button type="button" title={!task.done ? "Excluir tarefa" : "Arquivar tarefa"} className={style.buttonRemoveTask} onClick={handleRemoveTask}>
                { !task.done ? <Trash size={18} weight="bold" /> : <FolderMinus size={18} weight="bold" /> }
            </button>
            
          </div>
    )
}