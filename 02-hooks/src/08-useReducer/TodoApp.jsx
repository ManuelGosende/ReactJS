import { useReducer } from "react";
import { TodoAdd } from "./TodoAdd";
import TodoList from "./TodoList";
import { todoReducer } from "./todoReducer";

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Aprender useReducer',
        done: false   
    },
    {
        id: new Date().getTime() * 3,
        description: 'Seguir aprendiendo',
        done: false   
    }
]

export const TodoApp = () => {

    const [ todos , dispatch ] = useReducer( todoReducer, initialState );

    const handleNewTodo = () => {
        console.log({ todo });
    }
  
    return (
        <>
            <h1>Todos: (10), <small>Pendientes: (2)</small></h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                    <TodoList todos={ todos }/>
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr/>
                    <TodoAdd onNewTodo={ handleNewTodo }/>
                </div>
            </div>
        </>
    )
}