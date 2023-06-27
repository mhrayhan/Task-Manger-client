import { useEffect, useState } from "react";

const useTodo = () => {
  const [todos, setTodos] = useState({});

  useEffect(() => {
    fetch('https://task-manager-server-rose.vercel.app/todo')
      .then(res => res.json())
      .then(data => setTodos(data))
  }, [])


  return [todos, setTodos];
}

export default useTodo;
