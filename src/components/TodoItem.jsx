import {useState} from "react";
import {connect} from "react-redux";
import {removeTodo} from "../store/todo-slice";

const TodoItem = (props) => {
  const {todo, dispatchRemoveTodo} = props;

  const [todoStatus, setTodoStatus] = useState(props.completed);

  const switchTodoStatus = () => {
    setTodoStatus(!todoStatus);
  };

  return (
    <div
      key={props.id}
      onClick={switchTodoStatus}
      className={
        todoStatus ? "todo inactive col-lg-6 col-md-8 p-2" : "todo active col-lg-6 col-md-8 p-2"
      }
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-8 text-start">
            <span className={todoStatus ? "todo-title strike" : "todo-title"}>{props.title}</span>
          </div>
          <div className="col-4 text-end">
            <button
              onClick={() => dispatchRemoveTodo(props.id)}
              className={todoStatus ? "btn btn-outline-secondary" : "btn btn-outline-light"}
            >
              <i className="bi bi-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todo: state.todo.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchRemoveTodo: (payload) => dispatch(removeTodo(payload)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
