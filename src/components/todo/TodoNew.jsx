import React, { useState } from "react";

const TodoNew = (props) => {
    console.log(props);
    const { addNewData } = props;
    const [valueInput, setValueInput] = useState('');

    const handleOnChangeInput = (value) => {
        setValueInput(value);
    }

    const handleAddNewData = () => {
        addNewData(valueInput);
        setValueInput('');
    }
    
    return (
        <div className="todo-new">
            <input type="text" value={valueInput} onChange={(e) => handleOnChangeInput(e.target.value)} />
            <button style={{ cursor: "pointer" }} onClick={handleAddNewData}>Add</button>
        </div>
    );
}
export default TodoNew;