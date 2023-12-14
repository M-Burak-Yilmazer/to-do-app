import React from "react";

import { ImRadioUnchecked } from "react-icons/im";
import { MdDeleteSweep, MdEditDocument } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";

const List = ({
  handleEdit,
  handleDelete,
  handleCheck,
  id,
  item,
  editMode,
  editData,
  setEditData,
  handleSave,
  handleCancelEdit,
}) => {
  return (
    <div
      style={{ backgroundColor: "#2F3337", color: "#C7BCB4", opacity: "0.7" }}
      id={id}
      className="d-flex justify-content-between align-items-center p-2  mt-3 rounded"
    >
      <div className="d-flex gap-2  ">
        <span onClick={() => handleCheck(item.id)} className="">
          {!item.check ? (
            <ImRadioUnchecked
              style={{ color: "#35D073", cursor: "pointer", fontSize: "2rem" }}
            />
          ) : (
            <FaRegCheckCircle
              className="rounded-circle"
              style={{
                color: "#2F3337",
                backgroundColor: "#35D073",
                cursor: "pointer",
                fontSize: "2rem",
              }}
            />
          )}
        </span>
        {editMode == item.id ? (
          <input
            className="editinput"
            type="text"
            value={editData}
            onChange={(e) => setEditData(e.target.value)}
          />
        ) : (
          <span
            style={{ color: !item.check ? "yellow " : "#35D073" }}
            className="mx-3 fs-5"
          >
            {item.text}
          </span>
        )}
      </div>
      <div className="fs-3">
        {editData && editMode === item.id ? (
          <>
            <button
              className="addBtn"
              style={{ cursor: "pointer" }}
              onClick={() => handleSave(item.id)}
            >
              Save
            </button>
            <button
              className="ms-3 notBtn"
              style={{ cursor: "pointer" }}
              onClick={() => handleCancelEdit()}
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <MdEditDocument
              style={{ cursor: "pointer" }}
              onClick={() => handleEdit(item.id)}
              className="me-2 text-warning"
            />
            <MdDeleteSweep
              style={{ cursor: "pointer" }}
              onClick={() => handleDelete(item.id)}
              className="text-danger"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default List;
