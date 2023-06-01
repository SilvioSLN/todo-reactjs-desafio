
import { FormEvent } from "react";

export interface TaskTypes {
    id: string;
    title: string;
    done?: boolean;
    doneAt?: Date;
}

export interface TodoListProps {
    todo: TaskTypes[];
    changeToggleTaskDone: (id: string) => void;
    onRemoveTask: (id: string) => void;
}

export interface TaskProps {
    task: TaskTypes;
    changeToggleTaskDone: (id: string) => void;
    onRemoveTask: (id: string) => void;
}

export interface FormNewTaskProps {
    onCreateNewTask: (event: FormEvent, titleTask:string ) => void;
}