import { Box, Container, Stack, Typography } from "@mui/material";
import "./App.css";
import React, { useState } from "react";

import todosJSON from "./todos.json";
import TodoForm from "./components/TodoForm";
import Header from "./components/Header";
import TodoWrapper from "./components/TodoWrapper";

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(todosJSON);
  console.log("todos", todos);
  return (
    <>
      <Header />
      <Container>
        <Stack direction={"row"} justifyContent={"center"} gap={8}>
          <Stack p={2} width={"100%"}>
            <TodoForm setTodos={setTodos} />
          </Stack>
          <Stack
            p={4}
            maxWidth={500}
            borderRadius={2}
            sx={(theme) => ({ backgroundColor: theme.palette.primary.main })}
          >
            <Box mb={2}>
              <Typography variant="h4" sx={{ color: "white" }}>
                Pending
              </Typography>
            </Box>
            <TodoWrapper todos={todos} setTodos={setTodos} />
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default App;
