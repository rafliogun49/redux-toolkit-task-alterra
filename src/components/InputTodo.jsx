import {useState} from "react";

const InputTodo = (props) => {
  const [inputData, setInputData] = useState({
    title: "",
    completed: false,
  });

  const handleChange = (event) => {
    setInputData({...inputData, [event.target.name]: event.target.value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputData.title) {
      const newTodo = {
        id: new Date().now,
        ...inputData,
        title: inputData.title,
      };

      props.addTodo(newTodo);
      setInputData({title: ""});
    } else {
      alert("Don't forget to fill your To Do!");
    }
  };

  return (
    <>
      <div className="col-lg-6 col-md-8">
        <div className="row">
          <div className="input-group mb-4">
            <input
              type="text"
              class="form-control py-2"
              value={inputData.title}
              name="title"
              placeholder="What's to do for today?"
              onChange={handleChange}
            />
            <div class="input-group-append">
              <button onClick={handleSubmit} className="btn btn-primary py-2" type="button">
                <i className="bi bi-plus-circle"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputTodo;
