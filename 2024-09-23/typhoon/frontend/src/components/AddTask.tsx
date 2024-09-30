import { Box, Button, Stack, TextField } from "@mui/material";
import { useState } from "react";

type AddTaskProps = {
  fetchTasks: () => void;
};

const AddTask = ({ fetchTasks }: AddTaskProps) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<number>();

  const addTask = async () => {
    try {
      const response = await fetch("http://localhost:8080/todo", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: title, priority: priority }),
      });

      if (!response.ok) {
        console.log("No success");
      }
    } catch (error) {
      console.warn(error);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    addTask();
    setTimeout(fetchTasks, 100);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        marginTop: 5,
      }}
    >
      <form onSubmit={handleSubmit}>
        <Stack gap={2}>
          <TextField
            label="Title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <TextField
            label="Priority"
            type="number"
            value={priority}
            onChange={(event) =>
              setPriority(parseInt(event.target.value, 10) || 1)
            }
          />
          <Button type="submit" variant="contained">
            Add
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default AddTask;
