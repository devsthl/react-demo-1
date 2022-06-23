import React, { useState } from 'react'
import _ from 'lodash';
import AddTodo from './AddTodo';
import DisplayTodo from './DisplayTodo';
const Home = () => {
    const [todo, setTodo] = useState("");
    const [listTodo, setListTodo] = useState([
        { id: 'todo1', name: 'watching youtube' },
        { id: 'todo2', name: 'using facebook' },
        { id: 'todo3', name: 'reading book' }
    ])
    function randomNumberInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const handleClick = () => {
        if (!todo) {
            alert("Todo's name is not empty");
            return;
        }
        let todoId = randomNumberInRange(4, 9999999999);
        let todoItem = {
            id: `todo${todoId}`, name: todo
        }
        setListTodo([...listTodo, todoItem]);
        setTodo("");
    }
    const handleDeleteTodo = (id) => {
        // let currenTodoList = _.clone(listTodo);
        // currenTodoList = currenTodoList.filter(item => item.id !== id)
        // setListTodo(currenTodoList)
        let currenTodoList = listTodo.filter(item => item.id !== id)
        setListTodo(currenTodoList)

    }

    return (
        <div>
            <AddTodo
                todo={todo}
                setTodo={setTodo}
                handleClick={handleClick}
            />

            <DisplayTodo
                childData={listTodo}
                handleDeleteTodo={handleDeleteTodo}
            />

        </div>
    )
}
export default Home;
