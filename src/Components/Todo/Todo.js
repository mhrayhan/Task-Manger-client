import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Slide, toast } from "react-toastify";
import TodoDeleteModal from "./TodoDeleteModal";
import TodoList from "./TodoList";
import UpdateModal from "./UpdateModal";


const Todo = () => {
  const { register, handleSubmit, reset } = useForm();

  const [todos, setTodos] = useState([]);

  const [todoDelete, setTodoDelete] = useState(null);

  const [openModal, setOpenModal] = useState()

  const handleChange = e => {
    const completeTodo = {
      todo: e.todo
    }
    const url = 'https://task-manager-server-rose.vercel.app/completed'
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
          toast.success('Task completed', {
            autoClose: 1000,
            transition: Slide
          })
        }
      })
  }

  const handleDelete = id => {
    console.log(id);
    const deleteUrl = `https://task-manager-server-rose.vercel.app/todo/${id}`;
    fetch(deleteUrl, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(result => {

      })
  }



  const onSubmit = data => {
    console.log(data);
    const url = 'https://task-manager-server-rose.vercel.app/todo'
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
          toast.success('Task Added', {
            autoClose: 500,
            transition: Slide,
            theme: 'dark'
          })
        }
      })
    reset();

  }

  useEffect(() => {
    fetch('https://task-manager-server-rose.vercel.app/todo')
      .then(res => res.json())
      .then(data => setTodos(data))
  }, [todos])

  const reversedTodo = [...todos].reverse();
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

      <div className="lg:w-[35%] mt-5 mx-auto shadow-xl ">
        <h2 className="text-xl font-serif font-semibold bg-primary py-2 text-white">Task List <br /><span className="text-sm font-thin">(mark for completed)</span></h2>
        <div className="grid grid-cols-1 text-left mx-1 mt-1 ">
          {
            reversedTodo.map(todoo => <TodoList
              key={todoo._id}
              todoo={todoo}
              handleChange={handleChange}
              handleDelete={handleDelete}
              setTodoDelete={setTodoDelete}
              setOpenModal={setOpenModal}
            ></TodoList>)
          }
        </div>
      </div>
      {todoDelete && <TodoDeleteModal todoDelete={todoDelete}></TodoDeleteModal>}
      {openModal && <UpdateModal openModal={openModal} setOpenModal={setOpenModal}></UpdateModal>}
    </div>
  );
};

export default Todo;