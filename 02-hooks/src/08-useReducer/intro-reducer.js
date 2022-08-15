const initalState = [{
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false
}];

const toDoReducer = ( state = initalState, action = {} ) => {
    
    if( action.type === '[TODO] add todo' ) {
        return [...state, action.payload];
    }
    
    return state;
}

let toDos = toDoReducer();

let newToDo = {
    id: 2,
    todo: 'Recolectar la piedra del Poder',
    done: false
}

const AddToDoAction = {
    type: '[TODO] add todo',
    payload: newToDo
}

toDos = toDoReducer ( toDos, AddToDoAction );