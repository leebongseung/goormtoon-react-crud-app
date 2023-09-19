import React from "react";

const BudgetItem = ({ data, handleEditItm, handleDelItm }) => {
  return (
    <div
      className="flex border border-gray-500 my-3 h-10 textcen items-center px-5 justify-between"
      key={data.id}>
      <div className="w-2/3">{data.itm}</div>
      <div
        className="text-gray-500 w-2/3 pr-96"
        style={{
          paddingRight: "8em",
          textAlign: "right",
        }}>
        {data.cost.toLocaleString('ko-KR')}원
      </div>
      <button
        className="mr-3"
        style={{ ustifySelf: "self-end" }}
        type="button"
        onClick={() => handleEditItm(data)}>
        <img className="h-7 text-white" src="/img/pencil.svg" alt="Edit item" />
      </button>
      <button
        style={{ justifySelf: "self-end" }}
        className="content-end"
        type="button"
        onClick={() => {
          handleDelItm(data.id);
        }}>
        <img className="h-5" src="/img/trash_can.svg" alt="Delete item" />
      </button>
    </div>
  );
};

export default BudgetItem;
