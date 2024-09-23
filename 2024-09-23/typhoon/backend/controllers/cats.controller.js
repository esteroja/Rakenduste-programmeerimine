const crypto = require("crypto");

const cats = [
  {
      "id": "6aa7c913-84c8-443d-99d5-5c84ac74ce62",
      "name": "Meow",
      "createdAt": 1727099341018,
      "updatedAt": null,
      "deleted": false
  },
  {
      "id": "ea10df8b-0319-426a-89dc-8eeb5f8bceb5",
      "name": "Fluff",
      "createdAt": 1727099346234,
      "updatedAt": null,
      "deleted": false
  }
];

exports.create = (req, res) => {
  const { name } = req.body; //nii saab kätte  namei ja omistame muutuja külge

  const newCat = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    updatedAt: null,
    deleted: false,
  };

  cats.push(newCat);
  res.send(newCat);
};

exports.read = (req, res) => {
  res.send(cats);
};

exports.update = (req, res) => {
  const { name, id } = req.body.name;

  const index = cats.findIndex((cat) => cat.id === id);

  cats[index].name = name;
  cats[index].updatedAt = Date.now();

  res.send(cats[index]);
};

exports.delete = (req, res) => {};
