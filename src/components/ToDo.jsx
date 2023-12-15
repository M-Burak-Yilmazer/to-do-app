import { useEffect, useState } from "react";
import List from "./List";
import { v4 } from "uuid";
import { Form } from "react-bootstrap";
import { ImGift } from "react-icons/im";
import image from "../img/20210319-reverse-shopping-list.png";
const ToDo = () => {
  const [list, setList] = useState(() => {
    const storedData = localStorage.getItem("userList");
    return storedData ? JSON.parse(storedData) : [];
  });
  const [input, setInput] = useState("");
  const [editData, setEditData] = useState(input);
  const [vision, setVision] = useState(list);
  const [editMode, setEditMode] = useState(null);

  const handleAdd = (e) => {
    e.preventDefault();
    input.trim() &&
      setList((prevList) => [
        ...prevList,
        { text: input, id: v4(), check: false },
      ]);

    setInput("");
  };
  useEffect(() => {
    setVision(list);
  }, [list]);

  useEffect(() => {
    // Save data to local storage whenever it changes
    localStorage.setItem("userList", JSON.stringify(list));
  }, [list]);

  console.log(list);
  const handleCheck = (id) => {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, check: !item.check } : item
      )
    );
  };

  const handleAll = () => setVision(list);
  const handleActive = () => {
    setVision(list.filter((item) => item.check == true));
    console.log(list);
  };
  const handleInActive = () => {
    setVision(list.filter((item) => item.check == false));
    console.log(list);
  };

  const handleDelete = (id) => {
    setList(list.filter((item) => item.id != id));
  };

  const handleEdit = (id) => {
    if (editMode === id) {
      setEditMode(null);
      setEditData("");
    } else {
      setEditMode(id);
      const itemToEdit = list.find((item) => item.id === id);
      setEditData(itemToEdit.text);
    }
  };

  const handleSave = (id) => {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, text: editData } : item
      )
    );
    setEditMode(null);
    setEditData("");
  };
  const handleCancelEdit = () => {
    setEditMode(null);
    setEditData("");
  };
  return (
    <div className="text-center mt-3 ">
      <h1>Shopping List</h1>
      <div className="container">
        <Form onSubmit={handleAdd}>
          <div className="justify-content-center input-group d-flex align-items-center">
            <input
              onChange={(e) => setInput(e.target.value)}
              className=" add-input"
              type="text"
              name=""
              id=""
              value={input}
            />
            <button type="submit" className="addBtn  mt-3 mb-3  ">
              Add to list{" "}
            </button>
          </div>
          <div className="nav-btns">
            <button type="button" className="allbtn me-2" onClick={handleAll}>
              All
            </button>
            <button
              type="button"
              className="alinanbtn me-2"
              onClick={handleActive}
            >
              purchased
            </button>
            <button
              type="button"
              className="notBtn me-2"
              onClick={handleInActive}
            >
              Not purchased
            </button>
          </div>
        </Form>
        <div className="mt-5 text-center mb-3">
          {vision?.length < 1 ? (
            <img
              src={image}
              style={{ width: "50%", opacity: "0.5" }}
              alt="shoplist"
            />
          ) : (
            vision.map((item) => (
              <List
                editMode={editMode}
                editData={editData}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                handleCheck={handleCheck}
                key={item.id}
                item={item}
                setEditData={setEditData}
                handleSave={handleSave}
                handleCancelEdit={handleCancelEdit}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ToDo;
