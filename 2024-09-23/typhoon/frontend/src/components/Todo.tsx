import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import AddTask from "./AddTask";

type Task = {
  id: number;
  title: string;
  priority: number;
  createdAt: number;
  updatedAt: number | null;
  deleted: boolean;
};

const formatDate = (timestamp: number) => {
  if (timestamp === null) {
    return "-";
  }
  const date = new Date(timestamp);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };
  return date.toLocaleDateString(undefined, options);
};

const Todo = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    const response = await fetch("http://localhost:8080/todo");
    const data = await response.json();

    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <Box
      sx={{
        marginRight: 50,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginTop: 5,
        }}
      >
        To-do list
      </Typography>
      <TableContainer
        sx={{
          maxWidth: 600,
        }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Task title</TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Created at
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Updated at
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Priority
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((task) => (
              <TableRow
                key={task.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {task.title}
                </TableCell>
                <TableCell align="right">
                  {formatDate(task.createdAt)}
                </TableCell>
                <TableCell align="right">
                  {task.updatedAt === null ? "-" : formatDate(task.updatedAt)}
                </TableCell>
                <TableCell align="right">{task.priority}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AddTask fetchTasks={fetchTasks} />
    </Box>
  );
};

export default Todo;
