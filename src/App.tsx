
import { FormEvent, useState } from 'react';
import { v4 as uuid } from 'uuid';

import './global.css';

import styleApp from './App.module.css';

import logoTodo from './assets/todo-logo.svg';
import { TodoClear } from './components/TodoClear';
import { TodoList } from './components/TodoList';
import { FormNewTask } from './components/FormNewTask';


const todos_db = [
  {
    id: 'sdfgsdfg-dsfg-sgfsdfgsd-gdsfv',
    title: 'Criar um novo projeto',
    done: true,
    doneAt: new Date(),
  },
  {
    id: 'utsdtba-dsfg-sgfsdfgsd-gdsfv',
    title: 'Subir projeto para o github',
  },
  {
    id: 'sdfgsdfg-uyidy-sgfsdfgsd-gdsfv',
    title: 'Escrever novo artigo para o blog sobre o projeto e postar em todas as redes sociais, linkedin, facebook, instagram, twitter, etc... depois pedir para os amigos compartilharem',
  }

  

]

export function App() {

  const [todos, setTodos] = useState(todos_db)
  const [taskCriated, setTaskCriated] = useState(todos.length)
  const [taskCompleted, setTaskCompleted] = useState(todos_db.filter(task => task.done).length)

  const createNewTask = (event : FormEvent, titleTask: string) => {
    event.preventDefault()

    const newTask = {
      id: uuid(),
      title: titleTask,      
    }

    setTodos([...todos, newTask])
    setTaskCriated((state) => {
      return state + 1
    })

    console.log('criar nova tarefa')
  }

  const handleToggleTaskDone = (id: string) => {
    console.log('mudar status da tarefa')
    const newsTodos = todos.map(task => {

      if (task.id === id) {
        task.done = !task.done
        task.doneAt = task.done ? new Date() : undefined
      }

      return task      
    })

    setTodos(newsTodos)

    setTaskCompleted(() => {
      return todos.filter(task => task.done).length
    })
  }

  const handleRemoveTask = (id: string) => {
    const newTodos = todos.filter(task => task.id !== id)
    setTodos(newTodos)

    setTaskCriated((state) => {
      return state - 1
    });

    const e = newTodos.filter(task => task.done).length;
    setTaskCompleted(e)
  }

  return (
    <>
    <header className={styleApp.headerTop}>
      <img src={logoTodo} alt="TODO logo" />
    </header>
    <main className={styleApp.main}>
      <FormNewTask onCreateNewTask={createNewTask} />
      <div className={styleApp.todosHeader}>
        <strong>Tarefas criadas<span>{taskCriated}</span></strong>
        <strong>Concluidas<span>{ taskCompleted>0? `${taskCompleted} de ${taskCriated}` : 0 }</span></strong>
      </div>
      <div className={styleApp.todoBox}>
        { todos.length > 0 ? <TodoList todo={todos} changeToggleTaskDone={handleToggleTaskDone} onRemoveTask={handleRemoveTask} /> : <TodoClear /> }
      </div>
    </main>
    </>
  )
}

