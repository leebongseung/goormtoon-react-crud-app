import React from "react";

const BudgetForm = ({
  handleItmSubmit,
  handleCostChange,
  handleitmChange,
  itm,
  cost,
  isEdit,
}) => {
  return (
    <form onSubmit={handleItmSubmit}>
      <div className="flex py-3 px-2 text-color1   font-semibold justify-between">
        <div className="flex-1">지출 항목</div>
        <div className="flex-1">비용</div>
      </div>
      <div className="show-arrow flex py-3 px-1 justify-between">
        <input
          className="w-full mr-4 border-b border-gray-500 focus:border-none focus:border-white"
          type="text"
          name="text"
          onChange={handleitmChange}
          placeholder="예) 렌트비"
          value={itm}
        />
        <input
          className="your-tailwind-classes w-full border-b border-gray-500"
          style={{ WebkitAppearance: "none" }}
          type="number"
          name="cost"
          onChange={handleCostChange}
          value={cost}
        />
      </div>

      <div
        className="bg-darkgreen px-4 py-2 text-white inline-block items-center cursor-pointer mb-10"
        onClick={handleItmSubmit}>
        <input
          className="px-1 cursor-pointer"
          type="submit"
          value={isEdit ? "수정" : "제출"}
        />
        <img
          className="h-5 px-1 inline-block"
          src="/img/airplane.svg"
          alt="Edit item"
        />
      </div>
    </form>
  );
};

export default BudgetForm;
