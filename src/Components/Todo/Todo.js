import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import TodoDeleteModal from "./TodoDeleteModal";
import TodoList from "./TodoList";


const Todo = () => {
  const { register, handleSubmit, reset } = useForm();

  const [todos, setTodos] = useState([]);

  const [todoDelete, setTodoDelete] = useState(null);

  /* https://flannel-parliament-48417.{rayhan}herokuapp.com */
  const handleChange = e => {
    const completeTodo = {
      todo: e.todo
    }
    const url = 'https://flannel-parliament-48417.herokuapp.com/completed'
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(completeTodo)
    })
      .then(res => res.json())
      .then(result => {
        if (result.insertedId) {
          handleDelete(e._id);
        }
      })
  }

  const handleDelete = id => {
    console.log(id);
    const deleteUrl = `https://flannel-parliament-48417.herokuapp.com/todo/${id}`;
    fetch(deleteUrl, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(result => {

      })
  }



  const onSubmit = data => {
    console.log(data);
    const url = 'https://flannel-parliament-48417.herokuapp.com/todo'
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        if (result.insertedId) {

        }
      })
    reset();

  }

  useEffect(() => {
    fetch('https://flannel-parliament-48417.herokuapp.com/todo')
      .then(res => res.json())
      .then(data => setTodos(data))
  }, [todos])


  return (
    <div className="mx-2 lg:pb-5">
      <div className='lg:w-[35%] mx-auto mt-5'>
        <div className="form-control ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="input-group w-full">
              <input type="text" placeholder="Type here" className="input input-bordered w-full" {...register("todo")} />
              <input type="submit" className='btn btn-primary text-white font-semibold' value='ADD' />
            </label>
          </form>
        </div>
      </div>

      <div className="lg:w-[35%] mt-5 mx-auto shadow-xl">
        <h2 className="text-xl font-serif font-semibold bg-primary py-2 text-white">Task List</h2>
        <div className="grid grid-cols-1 divide-y text-left ">
          {
            todos.map(todoo => <TodoList
              key={todoo._id}
              todoo={todoo}
              handleChange={handleChange}
              handleDelete={handleDelete}
              setTodoDelete={setTodoDelete}
            ></TodoList>)
          }
        </div>
      </div>
      {todoDelete && <TodoDeleteModal todoDelete={todoDelete}></TodoDeleteModal>}
    </div>
  );
};

export default Todo;