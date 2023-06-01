
import { ClipboardText  } from '@phosphor-icons/react';

import style from './style.module.css';

export function TodoClear() {
    return (
        <div className={style.todoClear}>
          <ClipboardText size={60} />
          <strong>Voce ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}