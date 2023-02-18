import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import MenuBar from "./components/Menu/MenuBar";
import TodoList from "./components/TodoList/TodoList";
import { useState } from "react";

function App() {
  const priorities = [
    {
      id: 1,
      title: "Priority 1",
      color: "#DC143C",
    },
    {
      id: 2,
      title: "Priority 2",
      color: "#FFD700",
    },
    {
      id: 3,
      title: "Priority 3",
      color: "#00008B",
    },
    {
      id: 4,
      title: "Priority 4",
      color: "#f5eded",
    },
  ];

  const items = [
    {
      id: 0,
      title: "all",
      color: "white",
    },
    {
      id: 1,
      title: "work",
      color: "blue",
    },
    {
      id: 2,
      title: "home",
      color: "aqua",
    },
    {
      id: 3,
      title: "personal",
      color: "orange",
    },
    {
      id: 4,
      title: "payment",
      color: "red",
    },
  ];

  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "First todo",
      status: true,
      priority: priorities.at(3),
      tag: null,
    },
    {
      id: 2,
      title: "Second todo",
      status: true,
      priority: priorities.at(3),
      tag: null,
    },
    {
      id: 3,
      title: "Third todo",
      status: true,
      priority: priorities.at(3),
      tag: null,
    },
  ]);
  return (
    <div className="App">
      <Header />
      <div className="AppBody">
        <MenuBar items={items} />
        <TodoList
          todo={todo}
          setTodo={setTodo}
          items={items}
          priorities={priorities}
          className="ToDoList"
        />
      </div>
    </div>
  );
}

export default App;
