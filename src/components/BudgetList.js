import React from "react";
import BudgetItem from "./BudgetItem";

const BudgetList = ({ budgetItems, handleEditItm, handleDelItm, handelAllDelItms}) => {
  return (
    <>
      <div
        className="overflow-scroll scroll-mx-31"
        style={{ maxHeight: "50vh", overflowY: "scroll" }}>
        {budgetItems.map((data) => (
          <BudgetItem
            data={data}
            handleEditItm={handleEditItm}
            handleDelItm={handleDelItm}
          />
        ))}
      </div>
      <div
        className="bg-darkgreen px-4 py-2 text-white inline-block items-center cursor-pointer"
        onClick={handelAllDelItms}>
        <input
          className="px-1 cursor-pointer"
          type="submit"
          value="목록 지우기"
        />
        <img
          className="h-5 px-1 inline-block"
          src="/img/airplane.svg"
          alt="Edit item"
        />
      </div>
    </>
  );
};

export default BudgetList;
