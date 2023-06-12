import React, { useState } from "react";
import "./Tabs.css";
import speed from "../../Images/speed1.png";
import graph from "../../Images/graph1.png";
import way from "../../Images/way1.png";
import len from "../../Images/len1.png";

function TasksTabs() {
    const [toggleState, setToggleState] = useState(1);
  
    const toggleTab = (index) => {
      setToggleState(index);
    };
  
    return (
      <div className="container">
        <div className="bloc-tabs">
          <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>
            <h2>7 класс</h2>
          </button>
          <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>
            <h2>8 класс</h2>
          </button>
          <button className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>
            <h2>9 класс</h2>
          </button>
          <button className={toggleState === 4 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(4)}>
            <h2>10 класс</h2>
          </button>
          <button className={toggleState === 5 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(5)}>
            <h2>11 класс</h2>
          </button>
        </div>
  
        <div className="content-tabs" style={{justifyContent: "center"}}>
          <div className={toggleState === 1 ? "content  active-content" : "content"}>
            <div className="task-card">
            <img src={ speed } alt="speed" style={{width: 250, height: 250}} className="task-pic"></img>
              <a href="https://urok.1c.ru/library/physics/fizika_7_11_klassy/mekhanika/kinematika/ravnouskorennoe_dvizhenie/4059.pht?v=2" className="tabs-link">
                Направление скорости и ускорения </a>
            <img src={ graph } alt="graph" style={{width: 250, height: 250}} className="task-pic"></img>
              <a href="https://urok.1c.ru/library/physics/fizika_7_11_klassy/mekhanika/kinematika/ravnomernoe_dvizhenie/4083.pht?v=2" className="tabs-link">
                Анализ графика движения </a>
            </div>
          </div>
  
          <div style={{marginTop: 20}} className={toggleState === 2 ? "content  active-content" : "content"}>
              Placeholder
          </div>
  
          <div className="task-card">
          <div className={toggleState === 3 ? "content  active-content" : "content"}>
            <img src={ way } alt="way" style={{width: 250, height: 250}} className="task-pic"></img>
              <a href="https://urok.1c.ru/library/physics/fizika_7_11_klassy/mekhanika/kinematika/osnovnye_ponyatiya_kinematiki/4112.pht?v=2" className="tabs-link">
                Построение пути и перемещения </a>
            <img src={ len } alt="len" style={{width: 250, height: 250}} className="task-pic"></img>
              <a href="https://urok.1c.ru/library/physics/fizika_7_11_klassy/volny/4076.pht?v=2" className="tabs-link">
                Определение длины волны </a>
          </div>
          </div>

          <div className={toggleState === 4 ? "content  active-content" : "content"}>
              Placeholder
          </div>

          <div className={toggleState === 5 ? "content  active-content" : "content"}>
              Placeholder
          </div>
        </div>
      </div>
    );
  }

export default TasksTabs;
