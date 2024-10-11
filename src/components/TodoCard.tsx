import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Todo } from "../App";
import { useSortable } from "@dnd-kit/sortable";
import { Box, Button } from "@mui/material";
import { CSS } from "@dnd-kit/utilities";
const TodoCard = ({
  todo,
  setTodos,
}: {
  todo: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: todo.id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const markCompleted = () => {
    setTodos((t) =>
      t.map((item) =>
        item.id === todo.id ? { ...item, completed: true } : item
      )
    );
  };

  return (
    <Box
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      sx={{ touchAction: "none" }}
    >
      <Card sx={{ width: "100%", minHeight: 150 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {todo.id} {todo.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {todo.completed ? "Completed" : "Pending"}
          </Typography>
          <Button
            onClick={markCompleted}
            sx={{ marginTop: 2 }}
            variant="contained"
          >
            Mark completed
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TodoCard;
