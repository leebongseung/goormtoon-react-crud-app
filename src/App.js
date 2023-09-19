import React, { useState, useCallback } from "react";
import "./App.css";
import BudgetForm from "./components/BudgetForm";
import BudgetList from "./components/BudgetList";

const App = () => {
  const [budgetItems, SetBudgetItems] = useState([]);
  const [id, SetId] = useState("");
  const [itm, SetItm] = useState("");
  const [cost, SetCost] = useState();
  const [isEdit, setIsEdit] = useState(false);
  const [showDivLst, SetShowDivLst] = useState("0"); // 0 : 제출, 1: 수정, 2: 삭제
  const [showDiv, SetShowDiv] = useState(false);
  const [timer, SetTimer] = useState(null);

  const handleClick = useCallback(() => {
    SetShowDiv(true);
    // 기존 타이머가 있으면 초기화
    if (timer) {
      clearTimeout(timer);
    }

    // 새 타이머 설정
    const newTimer = setTimeout(() => {
      SetShowDiv(false);
    }, 1000);

    SetTimer(newTimer);
  });

  const handleitmChange = useCallback((e) => {
    SetItm(e.target.value);
  });

  const handleCostChange = useCallback((e) => {
    SetCost(e.target.valueAsNumber); // 줌강의로 배움.
  });

  const handleItmSubmit = useCallback((e) => {
    e.preventDefault();

    let newBudgetItems = [];
    if (itm !== "" && cost > 0) {
      if (isEdit) {
        newBudgetItems = budgetItems.map((data) => {
          if (data.id === id) {
            data.itm = itm;
            data.cost = cost;
          }
          return data;
        });
      } else {
        const newBudgetItem = {
          id: Date.now(),
          itm: itm,
          cost: cost,
        };

        newBudgetItems = [...budgetItems, newBudgetItem];
      }
      handleClick();

      console.log(newBudgetItems);
      SetBudgetItems(newBudgetItems);
      SetId("");
      SetItm("");
      SetCost(0);
      setIsEdit(false);
      SetShowDivLst(id === "" ? "0" : "1");
    } else {
      itm === ""
        ? cost === 0
          ? alert("지출항목과 비용을 입력하세요")
          : alert("지출항목을 입력하세요")
        : alert("비용을 입력하세요");
    }
  });

  const handleDelItm = useCallback((id) => {
    const newBudgetItem = budgetItems.filter((data) => data.id !== id);
    console.log(newBudgetItem);

    SetBudgetItems(newBudgetItem);
    SetShowDivLst("2");

    handleClick();
  });

  const handleEditItm = useCallback((data) => {
    SetId(data.id);
    SetItm(data.itm);
    SetCost(data.cost);
    setIsEdit(true);
    SetShowDivLst("1");
  });

  const getSum = useCallback(() => {
    if (budgetItems) {
      const sum = budgetItems.reduce(
        (accumulator, data) => accumulator + data.cost,
        0
      );
      return sum;
    }
  });

  const handelAllDelItms = useCallback(() => {
    SetBudgetItems([]);
    SetShowDivLst("2");
    handleClick();
  });

  return (
    <div className="bg-color1 p-8 w-screen h-screen max-h-fit overflow-hidden ">
      {showDiv && (
        <div
          className={`${
            showDivLst === "2" ? "bg-red-600" : "bg-green-600"
          } text-white text-center py-3 font-bold text-l`}>
          아이템이{" "}
          {showDivLst === "0" ? "생성" : showDivLst === "1" ? "수정" : "삭제"}
          되었습니다.
        </div>
      )}

      <div>
        <h1 className="font-black text-3xl my-4"> 예산 계산기</h1>
      </div>
      <div className="bg-white p-4">
        <BudgetForm
          handleItmSubmit={handleItmSubmit}
          handleCostChange={handleCostChange}
          handleitmChange={handleitmChange}
          itm={itm}
          cost={cost}
          isEdit={isEdit}
        />

        <BudgetList
          budgetItems={budgetItems}
          handleEditItm={handleEditItm}
          handleDelItm={handleDelItm}
          handelAllDelItms={handelAllDelItms}
        />
      </div>

      <div className="text-right text-3xl mr-4">
        총지출 : {getSum().toLocaleString("ko-KR")}원
      </div>
    </div>
  );
};

export default App;
