import React, { useState } from "react";
import "../assets/Table.css";
import { SlCalender } from "react-icons/sl";
import { useNavigate, useParams } from "react-router-dom";
import { TiTickOutline } from "react-icons/ti";
import { LiaTelegram } from "react-icons/lia";
import Popup from "./Popup";
import { TiArrowBackOutline } from "react-icons/ti";

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
    setIsDone(!isDone);

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
                    {i === clickedIndex && isDone ? (
                      <TiArrowBackOutline
                        onClick={() => changeText(i)}
                        size={30}
                        className="crossed-out-div"
                      ></TiArrowBackOutline>
                    ) : (
                      <TiTickOutline onClick={() => changeText(i)} size={30} />
                    )}
                  </div>

                  <div className="btn">
                    <LiaTelegram onClick={() => setPopUpbool(true)} size={25} />
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
