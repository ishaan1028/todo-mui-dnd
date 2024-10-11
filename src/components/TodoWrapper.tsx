import {
  closestCorners,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Box } from "@mui/material";
import React from "react";
import TodoCard from "./TodoCard";
import { Todo } from "../App";

type TodoWrapperType = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoWrapper: React.FC<TodoWrapperType> = ({ todos, setTodos }) => {
  const getTaskPos = (id: number | string) =>
    todos.findIndex((todo) => todo.id === id);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id === over?.id || !active.id || !over?.id) return;
    setTodos((todos) => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over?.id);
      return arrayMove(todos, originalPos, newPos);
    });
  };

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  return (
    <Box
      sx={{
        padding: 2,
        gap: 2,
        maxHeight: 500,
        overflow: "scroll",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <DndContext
        sensors={sensors}
        onDragEnd={handleDragEnd}
        collisionDetection={closestCorners}
      >
        <SortableContext items={todos} strategy={verticalListSortingStrategy}>
          {todos.map((todo: Todo) => {
            return <TodoCard key={todo.id} todo={todo} setTodos={setTodos} />;
          })}
        </SortableContext>
      </DndContext>
    </Box>
  );
};

export default TodoWrapper;
