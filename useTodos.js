import { useEffect, useReducer } from "react";
import { TodoReducer } from "../08-useReducer/TodoReducer";

const initialState=[//Esto que tenemos es el valor incial y por default el segundo argumento del hook
]
const init=()=>{
   return JSON.parse(localStorage.getItem('todos'))||[];
}
export const useTodos = (id) => {
    const [todos, dispatch] = useReducer(TodoReducer, initialState, init);
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
        
    }, [todos]) //Este argumento nos ayudara a renderizar 
    

    const handleNewTodo=(todo)=>{
const action={
  type:'[TODO] add todo',
  payload:todo

}   
dispatch(action); //El disppatch es la accion a ejecutar depende el argumento
}

const handleDeleteTodo=(id)=>{
  console.log({id})
 dispatch({
   type:'[TODO] remove todo',
     payload:id
 });
}
const handletachar=(id)=>{
console.log({id})
dispatch({
  type:'[TODO] tachar todo',
    payload:id
});
}


return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handletachar

}

}
