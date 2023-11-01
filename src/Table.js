import React, { useState } from "react";
import "./assets/Table.css";
import { SlCalender } from "react-icons/sl";
import { useNavigate, useParams } from "react-router-dom";
import { TiTickOutline } from "react-icons/ti";
import { LiaTelegram } from "react-icons/lia";
import Popup from "./components/Popup";

function Table(props) {
  const data = props.data;
  const { name, id } = useParams();
  const [isDone, setIsDone] = useState(true);
  const [clickedIndex, setClickedIndex] = useState(-1);
  const [popUpBool, setPopUpbool] = useState(false);
  const navigate = useNavigate();

  const showMissions = () => {
    navigate(`/${name}/${id}/new`);
  };

  const changeText = (index) => {
    setClickedIndex(index);
    setIsDone(true);

    setTimeout(() => {
      setClickedIndex(-1);
      setIsDone(false);
    }, 5000);
  };

  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            <th className="custom-table-head">
              <div className="title-container">
                <div className="title">Görevler</div>
                <div onClick={showMissions} className="icon">
                  <SlCalender size={43} color="#13284bff" />
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="custom-table-body">
          {data?.map((row, i) => (
            <tr key={i}>
              <td>
                <span
                  className={
                    i === clickedIndex && isDone ? "crossed-out" : "notcrossed"
                  }
                >
                  {i + 1}. {row[1]}
                </span>
                <div className="btn-container">
                  <div className="btn">
                    <TiTickOutline
                      onClick={() => changeText(i)}
                      size={30}
                      color="#13284bff"
                    />
                  </div>
                  <div className="btn">
                    <LiaTelegram
                      onClick={() => setPopUpbool(true)}
                      size={25}
                      color="#13284bff"
                    />
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Popup trigger={popUpBool} setTrigger={setPopUpbool}>
        {name}
      </Popup>
    </div>
  );
}

export default Table;
