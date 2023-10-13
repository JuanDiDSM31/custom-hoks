

export const TodoReducer = (initialState=[], action) => {
  switch (action.type) {
    case '[TODO] add todo':
        // throw new Error('Action.type= ABC no esta imprementada')
        return [...initialState, action.payload];
       
        case '[TODO] remove todo':
          return initialState.filter(todo=> todo.id !== action.payload);
          case '[TODO] tachar todo':
            return initialState.map(todo=>{
              if(todo.id===action.payload){
                return {
                  ...todo, 
                  done:!todo.done
                }
                
              }
              return todo;
            })
         
  
    default: initialState
        break;
  }
}
