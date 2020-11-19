import './styles.css';

import {Todo, TodoList } from './classes'; // cuando no se pone nombre se archivo, vsc busca y reconoce al "index.js" por defecto 
import { crearTodoHTML } from './js/componentes';

/* Todo     = 'Nueva tarea'
   TodoList = 'Lista de tareas'
*/
export const  todoList = new TodoList();

todoList.todos.forEach( todo  => crearTodoHTML( todo ));





