import { useEffect, useState } from "react";

const useTodo = () => {
  const [todos, setTodos] = useState({});

  useEffect(() => {
    fetch('https://flannel-parliament-48417.herokuapp.com/todo')
      .then(res => res.json())
      .then(data => setTodos(data))
  }, [])


  return [todos, setTodos];
}

export default useTodo;
