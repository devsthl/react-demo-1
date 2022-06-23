const AddTodo = (props) => {
    const { todo, setTodo, handleClick } = props;
    return (
        <div>
            <label>Todo's Name: </label>
            <input value={todo} type='text' onChange={(event) => setTodo(event.target.value)} />
            <button type='button' onClick={() => { handleClick() }}>Submit</button>
            <br />
            <br />
        </div>
    )
}
export default AddTodo;