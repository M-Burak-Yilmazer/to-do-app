import React from "react";

import { ImRadioUnchecked } from "react-icons/im";
import { MdDeleteSweep, MdEditDocument } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";

const List = ({ handleEdit, handleDelete, handleCheck, id, item }) => {
  return (
    <div
      style={{ backgroundColor: "#2F3337", color: "#C7BCB4" }}
      id={id}
      className="d-flex justify-content-between align-items-center p-2 border border-danger border-3 mt-3 rounded"
    >
      <div className="d-flex gap-2  ">
        <span onClick={() => handleCheck(item.id)} className="">
          {item.check ? (
            <ImRadioUnchecked style={{ color: "#35D073" }} />
          ) : (
            <FaRegCheckCircle
              className="rounded-circle"
              style={{ color: "#2F3337", backgroundColor: "#35D073" }}
            />
          )}
        </span>
        <span className="">{item.text}</span>
      </div>
      <div className="fs-3">
        <MdEditDocument
          onClick={() => handleEdit(item.id)}
          className="me-2 text-warning"
        />
        <MdDeleteSweep
          onClick={() => handleDelete(item.id)}
          className="text-danger"
        />
      </div>
    </div>
  );
};

export default List;
