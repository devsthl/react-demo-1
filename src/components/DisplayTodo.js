
import { handleDeleteTodo } from "./Home";
const DisplayTodo = (props) => {
    const deleteTodoFromChild = (id) => {
        props.handleDeleteTodo(id)
    }
    const listTodo = props.childData;
    //const deleteTodoFromChild = props.handleDeleteTodo;
    return (
        <div>
            <div>
                ---------------List todo:--------------
            </div>
            {listTodo.map((item, index) => {
                return (
                    <div key={item.id}
                        onClick={() => deleteTodoFromChild(item.id)}>
                        {item.name}
                    </div>
                )
            })}
        </div>
    )
}
export default DisplayTodo;