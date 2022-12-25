import { v4 as uuidv4 } from "uuid";

const localData = [
  {
    text: "charge phone",
    id: uuidv4(),
    completed: false,
  },
  {
    text: "Food",
    id: uuidv4(),
    completed: true,
  },
  {
    text: "read book",
    id: uuidv4(),
    completed: false,
  },
  {
    text: "buy new book",
    id: uuidv4(),
    completed: false,
  },
  {
    text: "get up early",
    id: uuidv4(),
    completed: true,
  },
  {
    text: "get up early",
    id: uuidv4(),
    completed: true,
  },
  {
    text: "get up early",
    id: uuidv4(),
    completed: true,
  },
];

window.localStorage.setItem(localData, JSON.stringify(localData));