const tasks = [
  {
      "id": 1727365481745,
      "title": "Clean the room",
      "priority": 1,
      "createdAt": 1727365481745,
      "updatedAt": null,
      "deleted": false
  },
  {
      "id": 1727365501554,
      "title": "Water the plants",
      "priority": 2,
      "createdAt": 1727365501554,
      "updatedAt": null,
      "deleted": false
  }
];

exports.create = (req, res) => {
  const { title, priority } = req.body;

  const newTask = {
    id: Date.now(),
    title: title,
    priority: priority,
    createdAt: Date.now(),
    updatedAt: null,
    deleted: false,
  };

  tasks.push(newTask);
  res.send(tasks);
};

exports.read = (req, res) => {
  const freshTasks = tasks.filter((task) => task.deleted === false);

  res.send(freshTasks);
};

exports.update = (req, res) => {
  const { id } = req.body;

  const index = tasks.findIndex((task) => task.id === id);

  tasks[index].title = req.body.title;
  tasks[index].priority = req.body.priority;
  tasks[index].updatedAt = Date.now();

  res.send(tasks);
};

exports.delete = (req, res) => {
  const { id } = req.body;

  const index = tasks.findIndex((task) => task.id === id);

  tasks[index].deleted = true;

  res.send(tasks[index]);
};
