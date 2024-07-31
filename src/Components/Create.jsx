import React,{useState}from 'react'


function Create({ onAddTodo }) {
    const [todoName, setTodoName] = useState("");
    const [todoDescription, setTodoDescription] = useState("");
  
    const handleNameChange = (e) => setTodoName(e.target.value);
    const handleDescriptionChange = (e) => setTodoDescription(e.target.value);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onAddTodo({
        name: todoName,
        description: todoDescription,
        status: false,
      });
      setTodoName("");
      setTodoDescription("");
    };
  
    return (
      <>
      <div class="container-fluid">
        <h1 className="title">My todo</h1>
        <form className="todo-form" onSubmit={handleSubmit}>
          <input type="text" value={todoName} className="todo-input" required placeholder="Todo Name" onChange={handleNameChange} />
          <input type="text" value={todoDescription} className="todo-input" required placeholder="Todo Description" onChange={handleDescriptionChange}/>
          <button type="submit" className="btn btn-success">
            Add Todo
          </button>
        </form>
      </div>
      </>
    );
  };
  


export default Create