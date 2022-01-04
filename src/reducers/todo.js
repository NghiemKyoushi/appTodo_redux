const initialState = {
  items: [],
};

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const COMPLETE_TODO = "COMPLETE_TODO";

const UPDATE_TODO = "UPDATE_TODO";

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: text,
});

export const deleteTodo = (number) => ({
  type: DELETE_TODO,
  payload: number,
});
export const completeTodo = (number) => ({
    type: COMPLETE_TODO,
    payload: number,
  });
  
export const updateTodo = (info) => ({
  type: UPDATE_TODO,
  payload: info
});
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      console.log("hdhdhd", ...state.items);
      const newState = { ...state };
      console.log(newState.items);
      return {
        ...state.items,
        items: [
          ...state.items,
          {
            content: action.payload,
            id: Math.floor(Math.random() * 10000),
            isComplete: false
          },
        ],
      };
    case "DELETE_TODO":
      console.log("delete", typeof action.payload);
      return {
        ...state.items,
        items: [...state.items].filter((item) => item.id !== action.payload),
      };
      case "COMPLETE_TODO":
      console.log("COMPLETE_TODO", typeof action.payload);
      return {
        ...state.items,
        items: [...state.items].map((item) => {
            if(item.id === action.payload){
                item.isComplete = true;
            }
            return item;
        })
      };
    case "UPDATE_TODO":
      console.log("update", action.payload);
     return {
        ...state.items,
        items: [...state.items].map((item) => {
            if(item.id === action.payload.id){
                item.content = action.payload.content;
            }
            return item;
        })
    }
    default:
      return state;
  }
};

export default reducer;
