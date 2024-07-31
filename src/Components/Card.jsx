import React,{useState} from 'react'

function Card({id,name,description,status = false,onUpdateStatus,onDeleteTodo}) {
  const [editedStatus, setEditedStatus] = useState(status);
  const [isEditing, setIsEditing] = useState(false);
  const [prevStatus, setPrevStatus] = useState(status);

  const handleEdit = () => {
    setIsEditing(true);
    setPrevStatus(editedStatus);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedStatus(prevStatus);
  };

  const handleSave = () => {
    setIsEditing(false);
    onUpdateStatus(id, editedStatus);
  };

  const handleDelete = () => {
    onDeleteTodo(id);
  };

  const handleStatusChange = (e) => {
    setEditedStatus(e.target.value === "true");
  };

 return <>
 <div class="container-fluid">
    <div className="todo-card">
      <p className="todo-name">
        <span>Name: </span> {name}
      </p>
      <p className="todo-desc">
        <span>Description: </span>
        {description}
      </p>
      <div className="todo-status">
        <label htmlFor={`todo-filter-${id}`} className="todo-lbl">
          Status:
        </label>
        <select
          id={`todo-filter-${id}`} className="todo-select-card"  value={editedStatus} onChange={handleStatusChange} disabled={!isEditing}>
          <option value={true} className='completed'>Completed</option>
          <option value={false} className='notcompleted'>Not Completed</option>
        </select>
      </div>
      <br/><br/>
      {isEditing ? (
        <div className="btn-container">
          <button className="btn btn-save" onClick={handleSave}>
            Save
          </button>
          <button className="btn btn-cancel" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      ) : (
        <div className="btn-container">
          <button className="btn btn-edit" onClick={handleEdit}>
            Edit
          </button>
          <button className="btn btn-delete" style={{backgroundColor :"#c5552f"}} onClick={handleDelete}>
            Delete
          </button>
        </div>
      )}
    </div>
</div>
 </>
}

export default Card