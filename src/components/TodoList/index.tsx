

import { TaskTypes } from '../@types/todo';
import { Task } from '../Task';
import style from './style.module.css';


export interface TodoListProps {
    todo: TaskTypes[];
    changeToggleTaskDone: (id: string) => void;
    onRemoveTask: (id: string) => void;
}

export function TodoList({ todo, changeToggleTaskDone, onRemoveTask } : TodoListProps) {



    return (
        <div className={style.todoList}>
            { 
                todo.map(task => (
                        <Task key={task.id} task={task} changeToggleTaskDone={changeToggleTaskDone} onRemoveTask={onRemoveTask} />
                    )
                )
            }
        </div>
    )
}