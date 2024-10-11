import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
} from "@mui/material";
import React, { useState } from "react";
import { Todo } from "../App";

type TodoFormType = {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoForm: React.FC<TodoFormType> = ({ setTodos }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos((t: Todo[]) => {
      return [
        {
          id: t.length + 1,
          title: newTodo,
          completed: false,
        },
        ...t,
      ];
    });
    setNewTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <FormControl>
          <InputLabel htmlFor="newtodo">Add New Todo</InputLabel>
          <Input id="newtodo" value={newTodo} onChange={handleChange} />
        </FormControl>
        <Button variant="contained" sx={{ marginTop: 2 }} type="submit">
          Add
        </Button>
      </FormGroup>
    </form>
  );
};

export default TodoForm;
