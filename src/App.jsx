import React,{useState} from 'react'
import Card from './Components/Card'
import Create from './Components/Create'


function App() {
  const initialdata =[
  {
    id : 1,
    name : "Office Task-1",
    description : "this is the description for My first Task",
    status : false
  },
  {
    id:2,
    name : "Office Task-2",
    description : "this is the description for My Second Task",
    status : false
  },
  {
    id:3,
    name : "Office Task-3",
    description : "this is the description for My Third Task",
    status : false
  }
]
const [filtervalue, setFilterValue] = useState("all");
const [data, setData] = useState(initialdata);

const handleFilter = (e) => {
  setFilterValue(e.target.value);
};

const handleAddTodo = (newTodo) => {
  const newId = Math.max(...data.map((item) => item.id)) + 1;
  const newData = [...data, { id: newId, ...newTodo }];
  setData(newData);
};

const onUpdateStatus = (id, newStatus) => {
  const updatedData = data.map((item) =>
    item.id === id ? { ...item, status: newStatus } : item
  );
  setData(updatedData);
};

const handleDeleteTodo = (id) => {
  const updatedData = data.filter((item) => item.id !== id);
  setData(updatedData);
};
  return <>
  <div class="container-fluid">
      <Create onAddTodo={handleAddTodo} />
      <div className="todo-header">
        <h2 className="todo-title-text">My Todos</h2>
        <form className="todo-filter">
          <label htmlFor="todo-filter" className="todo-lbl" id="todo-filter">
            Status Filter:
          </label>
          <select
            name="filter"
            id="todo-filter"
            className="todo-select"
            onChange={handleFilter}
          >
            <option value="all" className="todo-filter-option">
              All
            </option>
            <option value="completed" className="todo-filter-option">
              Completed
            </option>
            <option value="not-completed" className="todo-filter-option">
              Not-Completed
            </option>
          </select>
        </form>
      </div>
      <div className="todo-container">
        {filtervalue === "all" &&
          data.map((item) => (
            <Card key={item.id} {...item}  onUpdateStatus={onUpdateStatus}  onDeleteTodo={handleDeleteTodo} />
          ))}
        {filtervalue === "completed" && data.filter((item) => item.status === true).map((item) => (
              <Card key={item.id} {...item} onUpdateStatus={onUpdateStatus} onDeleteTodo={handleDeleteTodo}/>
            ))}
        {filtervalue === "not-completed" && data.filter((item) => item.status === false).map((item) => (
              <Card key={item.id} {...item} onUpdateStatus={onUpdateStatus} onDeleteTodo={handleDeleteTodo}/>
            ))}
      </div>
</div>
  </>
}

export default App