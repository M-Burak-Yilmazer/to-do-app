import React from "react";

import { ImRadioUnchecked } from "react-icons/im";
import { MdDeleteSweep, MdEditDocument } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";

const List = ({ handleCheck, id, item }) => {
  return (
    <div
      id={id}
      className="d-flex justify-content-between align-items-center p-2 border border-danger border-3 mt-3 rounded"
    >
      <div className="d-flex gap-2  ">
        <span onClick={() => handleCheck(item.id)} className="">
          {item.check ? <ImRadioUnchecked /> : <FaRegCheckCircle />}
        </span>
        <span className="">{item.text}</span>
      </div>
      <div className="fs-3">
        <MdEditDocument className="me-2 text-warning" />
        <MdDeleteSweep className="text-danger" />
      </div>
    </div>
  );
};

export default List;
