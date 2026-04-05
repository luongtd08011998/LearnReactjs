const TodoData = (props) => {
    const { todoList, deleteValue } = props;

    const handleClick = (id) => {    
        deleteValue(id);
    }
    return (
        <div className="todo-data">
            {todoList.map((item) => {
                return (<div className="todoListContainer" key={item.id}>{item.name}
                <button className="deleteValue" onClick={()=>handleClick(item.id)}>Delete
                    </button>
                    </div>);
            })}
        </div>
    )
}
export default TodoData;