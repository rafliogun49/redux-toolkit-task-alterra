import BigTitle from "../components/BigTitle";
import Navbar from "../components/Navbar";
import {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {removeTodo, addTodo, changeTodoStatus as change} from "../store/todo-slice";
import CompleteIndicator from "../components/CompleteIndicator";

const Home = () => {
  const title = useRef();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todo.data);

  const resetInput = () => {
    title.current.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      let newTodo = {
        id: new Date().now,
        title: title.current.value,
        completed: false,
      };
      resetInput();
      return newTodo;
    } else {
      alert("Don't forget to fill your To Do!");
    }
  };

  return (
    <>
      <Navbar></Navbar>
      <BigTitle>Todos</BigTitle>
      {/* input form */}
      <section className="container">
        <div className="row justify-content-center gap-3">
          <div className="col-lg-6 col-md-8">
            <div className="row">
              <div className="input-group mb-4">
                <input
                  type="text"
                  className="form-control py-2"
                  ref={title}
                  name="title"
                  placeholder="What's to do for today?"
                />
                <div class="input-group-append">
                  <button
                    onClick={(e) => dispatch(addTodo(handleSubmit(e)))}
                    className="btn btn-primary py-2"
                    type="button"
                  >
                    <i className="bi bi-plus-circle"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <section className="container">
            <div className="row justify-content-center gap-3 mb-5">
              <CompleteIndicator />
              {/* to do list */}
              {data.map((todo, i) => {
                return (
                  <div
                    onClick={() => dispatch(change(i))}
                    className={
                      todo.completed
                        ? "todo inactive col-lg-6 col-md-8 p-2"
                        : "todo active col-lg-6 col-md-8 p-2"
                    }
                    key={todo.id}
                  >
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="col-8 text-start">
                          <span className={todo.completed ? "todo-title strike" : "todo-title"}>
                            {todo.title}
                          </span>
                        </div>
                        <div className="col-4 text-end">
                          <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className={
                              todo.completed ? "btn btn-outline-secondary" : "btn btn-outline-light"
                            }
                          >
                            <i className="bi bi-trash"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Home;
