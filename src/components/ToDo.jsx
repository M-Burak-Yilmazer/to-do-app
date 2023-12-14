import { useState } from "react";
import List from "./List";
import { v4 } from "uuid";
import { Form } from "react-bootstrap";
const ToDo = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  //   const [check, setCheck] = useState(true);
  const handleAdd = (e) => {
    e.preventDefault();
    setList([...list, { text: input, id: v4(), check: false }]);
    setInput("");
  };
  const handleCheck = (id) => {
    setList(
      list.map((item) =>
        item.id == id ? { ...item, check: !item.check } : item
      )
    );
  };

  console.log(list);

  return (
    <div className="text-center ">
      <h1>Market List</h1>
      <div className="container">
        <Form onSubmit={handleAdd}>
          <input
            onChange={(e) => setInput(e.target.value)}
            className="form-control"
            type="text"
            name=""
            id=""
            value={input}
          />
          <button
            type="submit"
            className="btn btn-primary mt-3 mb-3
        "
          >
            Add to list
          </button>
          <div className="nav-btns">
            <button type="button" className="btn btn-success me-2">
              All
            </button>
            <button type="button" className="btn btn-info me-2">
              Active
            </button>
            <button type="button" className="btn btn-danger me-2">
              Inactive
            </button>
          </div>
        </Form>
        <div>
          {list.length > 0 &&
            list.map((item) => (
              <List handleCheck={handleCheck} key={v4()} item={item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ToDo;
