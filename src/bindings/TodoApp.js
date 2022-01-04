import { connect } from "react-redux";
import TodoApp  from "../components/TodoApp";
import { addTodo, deleteTodo, updateTodo,completeTodo } from "../reducers/todo";
const mapStateToProps = (state) => {
    return {
        todos: state.todo.items
    }
}
const mapActionsToProps ={
    addTodo: addTodo,
    deleteTodo: deleteTodo,
    updateTodo: updateTodo,
    completeTodo: completeTodo
}
export default connect(mapStateToProps, mapActionsToProps)(TodoApp);