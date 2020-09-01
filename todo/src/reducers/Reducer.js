


export const initialState = {
    todos: [
        {
            item: "Make an App",
            completed: false,
            id: "",
            raw: ""
        }
    ]
}

export const reducer = (state, action) => {
    // console.log(action);
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };

        case "TOGGLE_COMPLETED":
            
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id === action.payload) {
                        return {

                            ...todo,
                            completed: !todo.completed,
                            
                        }
                    } else {
                        return todo;
                    }
                })
            }

        case "CLEAR_COMPLETED":
            return {
                ...state,
                todos: state.todos.filter(todo => !todo.completed)
            }
            default:
                return state;
    }
};